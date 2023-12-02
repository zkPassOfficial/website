import cn from 'clsx'
import { TransformProvider } from 'hooks/use-transform'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { tinaField } from 'tinacms/dist/react'
import s from './features.module.scss'

const DotMatrix = dynamic(() => import('/assets/svgs/dot-matrix.svg'), {
  ssr: false,
})
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
      transformProviderRef.current?.setTranslate(
        selfP * window.innerWidth * -1,
        0,
        0,
      )
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
  const cardRefs = useRef([])
  const cardBgRefs = useRef([])
  const startTrigger = useRef()
  const endTrigger = useRef()

  //   useEffect(() => {
  //     if (!startTrigger.current || !endTrigger.current) return
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         id: 'features',
  //         trigger: startTrigger.current,
  //         start: 'top 75%',
  //         endTrigger: endTrigger.current,
  //         end: 'bottom 50%',
  //         scrub: true,
  //         onUpdate: ({ progress }) => {
  //           cardBgRefs.current?.filter(Boolean).forEach((bg) => {
  //             bg.setProgress(progress)
  //           })
  //         },
  //       },
  //     })

  //     cardRefs.current.forEach((card) => {
  //       tl.fromTo(card, { x: window.innerWidth }, { x: 0 })
  //     })
  //   }, [startTrigger])

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
            cardRefs.current.push(node)
            if (i === cards.length - 1) {
              endTrigger.current = node
            }
          }}
        >
          <CardBackground
            ref={(node) => cardBgRefs.current.push(node)}
            index={i}
            numCards={cards.length}
          />

          <div className={s.dotMatrix}>
            <DotMatrix />
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
