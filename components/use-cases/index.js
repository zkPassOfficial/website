import { Accordion, Image, Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import { tinaField } from 'tinacms/dist/react'
import { useShuffle } from '../../hooks/use-shuffle'
import s from './use-cases.module.scss'

const Cross = dynamic(() => import('/assets/svgs/cross.svg'), {
  ssr: false,
})

export function UseCases(props) {
  const { sectionTitle, cards, cta } = props

  const { shuffledText, handleShuffle } = useShuffle({ text: cta.text })

  return (
    <section
      className={cn(s.useCases, 'layout-grid')}
      style={{ '--num-cards': cards.length }}
    >
      <h6
        className="p"
        data-tina-field={tinaField(props, 'sectionTitle')}
        id="use-cases"
      >
        {sectionTitle}

        <Background className={s.bg} />
      </h6>

      <Accordion className={s.accordion} type="single" defaultValue="item-0">
        {cards?.map((card, i) => (
          <Accordion.Item
            className={s.accordionItem}
            key={i}
            value={`item-${i}`}
          >
            <Accordion.Trigger className={s.accordionTrigger}>
              <span className="p" data-tina-field={tinaField(card, 'title')}>
                {card.title}
              </span>
            </Accordion.Trigger>
            <Accordion.Content className={s.accordionContent}>
              <div className={s.contentInner}>
                <div className={s.index}>
                  <span className="p">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className={s.bodyWrap}>
                  <h3
                    className="h1"
                    data-tina-field={tinaField(card, 'header')}
                  >
                    {card.header}
                  </h3>
                  <div
                    className={cn(s.imgWrap, 'desktop-only')}
                    data-tina-field={tinaField(card, 'illustration')}
                  >
                    {card.illustration && (
                      <Image src={card.illustration} fill objectFit="contain" />
                    )}
                  </div>
                  <Cross />
                  <p className="p" data-tina-field={tinaField(card, 'body')}>
                    {card.body}
                  </p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}

        <Background className={s.bg} />
      </Accordion>

      {cta?.url && (
        <Link
          className={s.cta}
          href={cta.url}
          onMouseEnter={() => handleShuffle()}
          data-tina-field={tinaField(cta, 'url')}
        >
          {new Array(4).fill().map((_, i) => (
            <Background className={s.bg} key={i} />
          ))}

          <span>{shuffledText}</span>

          <Cross />
        </Link>
      )}
    </section>
  )
}
