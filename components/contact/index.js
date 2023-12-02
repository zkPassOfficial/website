import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import { tinaField } from 'tinacms/dist/react'
import { useShuffle } from '../../hooks/use-shuffle'
import s from './contact.module.scss'

const Cross = dynamic(() => import('/assets/svgs/cross.svg'), {
  ssr: false,
})

export function Contact(props) {
  const { header, contactCTA } = props
  const { rowOne, rowTwo, rowThree } = header

  const { shuffledText, handleShuffle } = useShuffle({ text: contactCTA.text })

  return (
    <div className={cn(s.contact, 'layout-grid')}>
      <div className={s.header}>
        <div className={s.lineWrap}>
          <h2 className="h1" data-tina-field={tinaField(header, 'rowOne')}>
            {rowOne}
          </h2>
        </div>
        <div className={s.lineWrap}>
          <h2 className="h1" data-tina-field={tinaField(header, 'rowTwo')}>
            {rowTwo}
          </h2>
        </div>
        <div className={s.lineWrap}>
          <h2 className="h1" data-tina-field={tinaField(header, 'rowThree')}>
            {rowThree}
          </h2>
        </div>

        <Link
          className={s.cta}
          href={contactCTA.url}
          onMouseEnter={() => handleShuffle()}
          data-tina-field={tinaField(contactCTA, 'url')}
        >
          {new Array(4).fill().map((_, i) => (
            <Background className={s.bg} key={i} />
          ))}

          <span className="p" data-tina-field={tinaField(contactCTA, 'text')}>
            {shuffledText}
          </span>

          <Cross />
        </Link>
      </div>
    </div>
  )
}
