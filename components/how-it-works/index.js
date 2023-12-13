import { Image } from '@studio-freight/compono'
import { useRect } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import { BarLevel } from 'components/bar-level'
import { useDeviceDetection } from 'components/device-detection'
import { Background } from 'libs/webgl/components/background'
import { useTiles } from 'libs/webgl/components/postprocessing/effects/tiles/context'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shuffle } from 'txt-shuffle'
import { TransformProvider } from '../../hooks/use-transform'
import { clamp, mapRange } from '../../libs/maths'
import { ProgressMatrix } from '../progress-matrix'
import s from './how-it-works.module.scss'

const Cross = dynamic(() => import('/assets/svgs/cross.svg'), {
  ssr: false,
})

export function HowItWorks(props) {
  const { isMobile } = useDeviceDetection()

  const { sectionTitle, cards } = props
  const wrapRef = useRef()
  const [currentStep, setCurrentStep] = useState(0)
  const [barFill, setBarFill] = useState(0)
  const [shouldSpin, setShouldSpin] = useState(false)
  const [shuffledHeaders, setShuffledHeaders] = useState({})
  const [shuffledSubHeaders, setShuffledSubHeaders] = useState({})
  const [shuffledText, setShuffledText] = useState({})

  const [setRectRef, rect] = useRect()
  const [setRectCardRef, cardRect] = useRect()

  const { step, setOffset } = useTiles()

  const transformProviderRef = useRef()

  useLenis(
    ({ scroll }) => {
      if (isMobile) return

      const slideHeight = cardRect.height

      const start = rect.top - step
      const height = rect.height - slideHeight
      const end = start + height

      let progress = mapRange(start, end, Math.floor(scroll), 0, 1)
      progress = clamp(0, progress, 1)

      let currentStep = Math.floor(progress * cards.length)
      currentStep = clamp(0, currentStep, cards.length - 1)
      setCurrentStep(currentStep)

      const fillLevel = Math.ceil(progress / (1 / 30))
      const fillPercentage = (1 / 30) * fillLevel
      setBarFill(fillPercentage)

      const offset = progress * height

      setOffset(offset)

      transformProviderRef.current?.setTranslate(0, offset, 0)
    },
    [rect, step, cards.length, setOffset, cardRect],
    0,
  )

  useEffect(() => {
    setShouldSpin(true)
    const timer = setTimeout(() => setShouldSpin(false), 1000)

    return () => clearTimeout(timer)
  }, [currentStep])

  useEffect(() => {
    handleShuffle(cards[currentStep]?.header, currentStep, 'header')
    handleShuffle(cards[currentStep]?.subHeader, currentStep, 'subheader')
    handleShuffle(cards[currentStep]?.text, currentStep, 'text')
  }, [currentStep, cards])

  const handleShuffle = (text, cardIndex, type) => {
    shuffle({
      text: text,
      duration: 1.15,
      stayFrames: 25,
      onUpdate: (output) => {
        if (type === 'header') {
          setShuffledHeaders((prev) => ({ ...prev, [cardIndex]: output }))
        }
        if (type === 'subheader') {
          setShuffledSubHeaders((prev) => ({ ...prev, [cardIndex]: output }))
        }
        if (type === 'text') {
          setShuffledText((prev) => ({ ...prev, [cardIndex]: output }))
        }
      },
    })
  }

  const getMatrixStep = (i) => {
    return isMobile ? (i + 1) * 3 : (currentStep + 1) * 3
  }

  return (
    <TransformProvider ref={transformProviderRef}>
      <section
        className={cn(s.howItWorks, 'layout-block')}
        style={{ '--count': cards.length }}
        ref={setRectRef}
      >
        <div className={s.scrollWrap} ref={wrapRef}>
          <h4 className="p mobile-only">{sectionTitle}</h4>
          {cards?.map((card, i) => (
            <div
              className={cn(s.card, currentStep === i && s.current)}
              key={i}
              ref={(node) => {
                if (i === 0) {
                  setRectCardRef(node)
                }
              }}
            >
              <Background className={s.background} debug />
              <h4
                className="p desktop-only"
                data-tina-field={tinaField(props, 'sectionTitle')}
              >
                {sectionTitle}
              </h4>

              <div className={s.cardLeft}>
                <div className={s.header}>
                  <ProgressMatrix className={s.icon} step={getMatrixStep(i)} />
                  <h3
                    className="h1"
                    data-tina-field={tinaField(card, 'header')}
                  >
                    {currentStep === i
                      ? shuffledHeaders[i] || card.header
                      : card.header}
                  </h3>
                  <h6
                    className="p"
                    data-tina-field={tinaField(card, 'subHeader')}
                  >
                    {currentStep === i
                      ? shuffledSubHeaders[i] || card.subHeader
                      : card.subHeader}
                  </h6>
                </div>

                <div className={s.body}>
                  <p className="p" data-tina-field={tinaField(card, 'text')}>
                    {currentStep === i
                      ? shuffledText[i] || card.text
                      : card.text}
                  </p>
                  <span className="p">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className={cn(s.cardMiddle, 'desktop-only')}>
                <BarLevel className={s.barLevel} fillHigh={barFill} />
              </div>
              <div className={cn(s.cardRight, 'desktop-only')}>
                <div
                  className={cn(s.imgWrap, shouldSpin && s.spin)}
                  data-tina-field={tinaField(card, 'illustration')}
                >
                  {card.illustration && (
                    <Image
                      src={card.illustration}
                      objectFit="contain"
                      fill
                      alt=""
                    />
                  )}
                </div>

                <div className={s.frame}>
                  <Cross />
                  <Cross />
                  <Cross />
                  <Cross />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </TransformProvider>
  )
}
