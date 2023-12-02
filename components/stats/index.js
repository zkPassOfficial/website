import cn from 'clsx'
import { BarLevel } from 'components/bar-level'
import { useStore } from 'libs/store'
import { RichText } from 'libs/tina/richtext'
import { Background } from 'libs/webgl/components/background'
import { useEffect, useMemo, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shuffle } from 'txt-shuffle'
import { TextBackground } from '../../libs/webgl/components/background'
import s from './stats.module.scss'

import CrossIcon from '/assets/svgs/cross.svg'

export function Stats(props) {
  const { header, body, cardsSectionTitle, cards } = props
  const fillLevels = useMemo(
    () => [1, (1 / 8) * 4, (1 / 8) * 2, (1 / 8) * 4],
    [],
  )

  const [shuffledTitles, setShuffledTitles] = useState({})
  const [shuffledNumbers, setShuffledNumbers] = useState({})
  const [inView, setInView] = useState(false)
  const [currentFillLevels, setCurrentFillLevels] = useState(
    fillLevels.map(() => 0),
  )

  const toggleTheme = useStore(({ toggleTheme }) => toggleTheme)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.isIntersecting && !inView) {
          if (entry.isIntersecting) {
            setInView(true)

            cards.forEach((card, i) => {
              shuffleText(card.title, i, 'title')
              shuffleText(card.number, i, 'number')
            })
          } else {
            setInView(false)
          }
        })
      },
      // { threshold: 1 },
    )

    const target = document.getElementById('technologies')
    if (target) observer.observe(target)

    return () => {
      if (target) observer.disconnect()
    }
  }, [cards, inView])

  const shuffleText = (text, index, type) => {
    shuffle({
      text: text,
      duration: 1.15,
      stayFrames: 25,
      onUpdate: (output) => {
        if (type === 'title') {
          setShuffledTitles((prev) => ({ ...prev, [index]: output }))
        } else if (type === 'number') {
          setShuffledNumbers((prev) => ({ ...prev, [index]: output }))
        }
      },
    })
  }

  useEffect(() => {
    if (inView) {
      setCurrentFillLevels(fillLevels)
    } else {
      setCurrentFillLevels(fillLevels.map(() => 0)) // Or any default value
    }
  }, [inView, fillLevels])

  return (
    <section className={cn(s.stats, 'layout-grid')}>
      <div className={s.header}>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="right" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowOne')}>
              {header.rowOne}
            </h2>
          </div>
        </div>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="left" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowTwo')}>
              {header.rowTwo}
            </h2>
          </div>
        </div>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="left" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowThree')}>
              {header.rowThree}
            </h2>
          </div>
        </div>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="left" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowFour')}>
              {header.rowFour}
            </h2>
          </div>
        </div>

        <div className={s.body} data-tina-field={tinaField(props, 'body')}>
          {/* <div className={s.inner}> */}
          <RichText content={body} />
          <CrossIcon className={s.cross} />
          {/* </div> */}
        </div>

        <button className={s.themeButton} onClick={toggleTheme}>
          <div className={s.buttonInner} />
        </button>

        <CrossIcon className={cn(s.cross, s.one)} />
        <CrossIcon className={cn(s.cross, s.two)} />
      </div>

      <div className={s.cardsArea} id="technologies">
        <h4
          className="p"
          data-tina-field={tinaField(props, 'cardsSectionTitle')}
        >
          <Background className={s.bg} />
          {cardsSectionTitle}
        </h4>

        {cards.map((card, i) => (
          <div className={s.card} key={i}>
            <Background className={s.bg} />
            <h6 className="p" data-tina-field={tinaField(card, 'title')}>
              {inView ? shuffledTitles[i] || '' : ''}
            </h6>
            <p className="h1" data-tina-field={tinaField(card, 'number')}>
              {inView ? shuffledNumbers[i] || '' : ''}
            </p>
            <BarLevel
              className={s.barLevel}
              fillHigh={currentFillLevels[i]}
              animationDelay="1s"
            />
          </div>
        ))}
      </div>

      <div className={s.filler} />
    </section>
  )
}
