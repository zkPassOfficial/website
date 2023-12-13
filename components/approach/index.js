import { Accordion, Image, Link, Marquee } from '@studio-freight/compono'
import cn from 'clsx'
import { RichText } from 'libs/tina/richtext'
import { Background } from 'libs/webgl/components/background'
import { useEffect, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shuffle } from 'txt-shuffle'
import s from './approach.module.scss'

import CrossIcon from '/assets/svgs/cross.svg'

const MobileAccordion = ({ cards }) => {
  return (
    <Accordion
      className={cn(s.mobileAccordion, 'mobile-only')}
      type="single"
      defaultValue="item-0"
    >
      {cards?.map((card, i) => (
        <Accordion.Item className={s.accordionItem} key={i} value={`item-${i}`}>
          <Accordion.Trigger className={s.accordionTrigger}>
            <div className={cn(s.cardTitle)}>
              <Background className={s.bg} />

              <h4 className={cn(s.static, 'h1')}>{card.title}</h4>

              <Marquee className={s.marquee} repeat={3}>
                <h4 className="h1">
                  <span>{card.title}</span>
                  {!card.cta && <span className="p">Coming Soon</span>}
                </h4>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6.5" r="6" fill="black" />
                </svg>
              </Marquee>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className={s.accordionContent}>
            <div className={cn(s.card)}>
              <div className={s.imgWrap}>
                <Image src={card.illustration} fill alt="" />
              </div>

              <div>
                <div className={s.description}>
                  <RichText content={card.description} />
                </div>
                <Link
                  href={card.cta?.url}
                  className={cn(s.cta, !card.cta && s.disabled, 'p')}
                >
                  {card.cta?.text || 'Coming Soon'}
                </Link>
              </div>

              <CrossIcon className={s.cross} />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export function Approach(props) {
  const { sectionTitle, cards } = props

  const [activeCard, setActiveCard] = useState(0)
  const [exitingCard, setExitingCard] = useState(null)

  const [shuffledTexts, setShuffledTexts] = useState({})
  const [shuffledCTAs, setShuffledCTAs] = useState({})

  const handleShuffle = (text, cardIndex, isCTA = false) => {
    shuffle({
      text: text,
      duration: 0.75,
      stayFrames: 25,
      onUpdate: (output) => {
        if (isCTA) {
          setShuffledCTAs((prev) => ({ ...prev, [cardIndex]: output }))
        } else {
          setShuffledTexts((prev) => ({ ...prev, [cardIndex]: output }))
        }
      },
    })
  }

  useEffect(() => {
    if (cards && cards.length > 0) {
      handleShuffle(cards[0].title, 0)
      if (cards[0].cta) {
        handleShuffle(cards[0].cta.text, 0, true)
      }
    }
  }, [cards])

  return (
    <section className={cn(s.approach, 'layout-grid')}>
      <div className={cn(s.spacer, 'desktop-only')} />

      <h6
        className={cn(s.sectionTitle, 'p')}
        data-tina-field={tinaField(props, 'sectionTitle')}
        id="solutions"
      >
        <Background className={s.bg} />
        {sectionTitle}
      </h6>

      <MobileAccordion cards={cards} />

      {/* Title Marquees */}
      {cards?.map((card, i) => (
        <div
          key={i}
          onMouseEnter={() => {
            setActiveCard(i)
            if (activeCard !== i) {
              handleShuffle(card.title, i)
            }
            if (card.cta) {
              handleShuffle(card.cta?.text, i, true)
            }
          }}
          onMouseLeave={() => {
            setExitingCard(i)
            // handleShuffle(card.title, i)
            setTimeout(() => {
              setExitingCard(null)
            }, 400)
          }}
          className={cn(
            s.cardTitle,
            activeCard === i && s.active,
            exitingCard === i && s.exiting,
            'desktop-only',
          )}
          data-tina-field={tinaField(card, 'title')}
        >
          <Background className={s.bg} />

          {exitingCard === i ? (
            <h4 className={cn(s.static, 'h1')}>{shuffledTexts[i]}</h4>
          ) : (
            <h4 className={cn(s.static, 'h1')}>
              <span>{card.title}</span>
              {!card.cta && <span className="p">Coming Soon</span>}
            </h4>
          )}
          <Marquee className={s.marquee} repeat={3}>
            <h4 className="h1">
              <span>{activeCard === i ? shuffledTexts[i] : card.title}</span>
              {!card.cta && <span className="p">Coming Soon</span>}
            </h4>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.5" r="6" fill="black" />
            </svg>
          </Marquee>
        </div>
      ))}

      {/* Cards */}
      <div className={cn(s.cardWrap, 'desktop-only')}>
        <Background className={s.bg} />
        {cards?.map((card, i) => (
          <div className={cn(s.card, activeCard === i && s.active)} key={i}>
            <div className={s.imgWrap}>
              <Image
                src={card.illustration}
                fill
                data-tina-field={tinaField(card, 'illustration')}
                alt=""
              />
            </div>

            <div>
              <div
                className={s.description}
                data-tina-field={tinaField(card, 'description')}
              >
                <RichText
                  key={activeCard}
                  scramble={activeCard === i}
                  content={card.description}
                />
              </div>
              <Link
                href={card.cta?.url}
                className={cn(s.cta, !card.cta && s.disabled, 'p')}
                data-tina-field={tinaField(card, 'cta')}
              >
                {shuffledCTAs[i] ? shuffledCTAs[i] : 'Coming Soon'}
              </Link>
            </div>
            <CrossIcon className={s.cross} />
          </div>
        ))}
      </div>
    </section>
  )
}
