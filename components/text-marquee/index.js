import { Marquee } from '@studio-freight/compono'
import cn from 'clsx'
import { tinaField } from 'tinacms/dist/react'
import s from './text-marquee.module.scss'

export function TextMarquee(props) {
  const { className, textEntry, reversed } = props

  return (
    <div
      className={cn(s.textMarquee, className)}
      data-tina-field={tinaField(props, 'textEntry')}
    >
      <Marquee className={s.marquee} speed={0.1} reversed={reversed}>
        {textEntry?.map((value, i) => (
          <span key={i} className={cn(s.item, 'p')}>
            {value}
          </span>
        ))}
      </Marquee>
    </div>
  )
}
