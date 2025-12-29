import cn from 'clsx'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { TextBackground } from '../../libs/webgl/components/background'
import s from './hardware.module.scss'
import { HardwareTable } from './table'

const Cross = dynamic(() => import('/assets/svgs/cross.svg'), {
  ssr: false,
})

export function Hardware(props) {
  const { header, cardsSectionTitle, cards, table } = props
  const { rowOne, rowTwo, rowThree, label, body } = header

  return (
    <div className={cn(s.hardware, 'layout-grid')}>
      {/* Header */}
      <div className={s.header} id="hybrid-zk">
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="center" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowOne')}>
              {rowOne}
            </h2>
          </div>
        </div>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="right" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowTwo')}>
              {rowTwo}
            </h2>
          </div>
        </div>
        <div className={s.lineWrap}>
          <div className={s.line}>
            <TextBackground className={s.background} align="left" />
            <h2 className="h1" data-tina-field={tinaField(header, 'rowThree')}>
              {rowThree}
            </h2>
          </div>
        </div>

        <div className={s.cross}>
          <Cross />
          <Cross />
          <Cross />
        </div>

        <span className="p" data-tina-field={tinaField(header, 'label')}>
          {label}
        </span>
        <p className="p" data-tina-field={tinaField(header, 'body')}>
          {body}
        </p>
      </div>

      {/* Cards */}
      <div className={s.cardsSection}>
        <h6
          className={cn(s.sectionTitle, 'p')}
          data-tina-field={tinaField(props, 'cardsSectionTitle')}
        >
          <Background className={s.bg} />
          {cardsSectionTitle}
        </h6>

        <div className={s.cardWrap}>
          {cards?.map((card, i) => (
            <div className={s.card} key={i}>
              <span className="p" data-tina-field={tinaField(card, 'label')}>
                {card.label}
              </span>
              <p className="h2" data-tina-field={tinaField(card, 'body')}>
                {card.body.split('\n').map((line, i) => (
                  <Fragment key={i}>
                    <span key={i}>{line}</span>
                    <br />
                  </Fragment>
                ))}
              </p>
              <Cross />
            </div>
          ))}

          <Background className={s.bg} />
        </div>
      </div>

      {/* Table */}
      <HardwareTable table={table} />
    </div>
  )
}
