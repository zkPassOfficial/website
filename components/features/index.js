import cn from 'clsx'
import { useDeviceDetection } from 'components/device-detection'
import gsap from 'gsap'
import { TransformProvider } from 'hooks/use-transform'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { tinaField } from 'tinacms/dist/react'
import s from './features.module.scss'
import { FeaturesMatrix } from './matrix'

const Cross = dynamic(() => import('/assets/svgs/cross.svg'), {
  ssr: false,
})

const CardBackground = forwardRef(function CardBackground(
  { index, numCards },
  ref,
) {
  const transformProviderRef = useRef()

  const setProgress = useCallback(
    (tlProgress) => {
      const step = 1 / numCards
      const stepP = Math.max(0, tlProgress - step * index)
      const selfP = Math.min(stepP * numCards, 1)
      const gridStep = window.innerWidth / 40

      transformProviderRef.current?.setTranslate(
        selfP * (gridStep * 2) * -1,
        0,
        0,
      )
      transformProviderRef.current?.setOpacity(selfP)
    },
    [index, numCards],
  )

  useImperativeHandle(
    ref,
    () => {
      return { setProgress }
    },
    [setProgress],
  )

  useEffect(() => {
    transformProviderRef.current.setOpacity(0)
  }, [])

  return (
    <TransformProvider
      ref={(node) => {
        transformProviderRef.current = node
        ref.current = node
      }}
    >
      <Background className={s.bg} />
    </TransformProvider>
  )
})

export function Features(props) {
  const { sectionTitle, cards } = props
  const cardRefs = useRef({})
  const cardBgRefs = useRef([])
  const startTrigger = useRef()
  const tl = useRef()

  const { isMobile } = useDeviceDetection()

  useEffect(() => {
    if (isMobile || typeof isMobile === 'undefined' || !startTrigger.current)
      return
    if (tl.current) tl.current.kill()
    tl.current = gsap.timeline({
      scrollTrigger: {
        id: 'features',
        trigger: startTrigger.current,
        start: 'top 75%',
        end: '+50%',
        scrub: true,
        onUpdate: ({ progress }) => {
          Object.values(cardBgRefs.current)
            .filter(Boolean)
            .forEach((bg) => {
              bg.setProgress(progress)
            })
        },
      },
    })

    Object.values(cardRefs.current).forEach((card) => {
      const gridStep = window.innerWidth / 40
      tl.current.fromTo(
        card,
        { x: gridStep * 2 },
        {
          x: 0,
          ease: (p) => {
            if (p <= 1 / 3) {
              return 0
            } else if (p <= 2 / 3) {
              return 0.5
            } else {
              return 1
            }
          },
        },
      )
      tl.current.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
        },
        '<',
      )
    })

    return () => {
      tl.current?.revert()
    }
  }, [startTrigger, cardRefs, cardBgRefs, isMobile])

  return (
    <section className={cn(s.features, 'layout-grid')}>
      <div className={s.spacer} />
      <h6
        className={cn(s.sectionTitle, 'p')}
        data-tina-field={tinaField(props, 'sectionTitle')}
        id="features"
        ref={startTrigger}
      >
        <Background className={s.bg} />
        {sectionTitle}
      </h6>

      {cards?.map((card, i) => (
        <div
          className={s.card}
          key={i}
          ref={(node) => {
            if (!node) return
            cardRefs.current[i] = node
          }}
        >
          <CardBackground
            index={i}
            numCards={cards.length}
            ref={(node) => {
              if (!node) return
              cardBgRefs.current[i] = node
            }}
          />

          <div className={s.dotMatrix}>
            <FeaturesMatrix step={i + 1} />
          </div>

          <div className={s.title}>
            <span className="p">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="h2" data-tina-field={tinaField(card, 'title')}>
              {card.title}
            </h3>
          </div>

          <p className="p" data-tina-field={tinaField(card, 'body')}>
            {card.body}
          </p>

          <Cross />
        </div>
      ))}
    </section>
  )
}
