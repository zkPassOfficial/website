import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shuffle } from 'txt-shuffle'
import s from './header.module.scss'

export function Header(props) {
  const { linkGroup, cta } = props
  const anchorLinks = [
    { text: 'Technologies', url: '/#technologies' },
    { text: 'Solutions', url: '/#solutions' },
    { text: 'Features', url: '/#features' },
    { text: 'Hybrid ZK', url: '/#hybrid-zk' },
    { text: 'Use Cases', url: '/#use-cases' },
  ]

  const [shuffledTexts, setShuffledTexts] = useState({})
  const handleShuffle = (text, cardIndex) => {
    shuffle({
      text: text,
      duration: 0.5,
      stayFrames: 25,
      onUpdate: (output) => {
        setShuffledTexts((prev) => ({ ...prev, [cardIndex]: output }))
      },
    })
  }

  useEffect(() => {
    if (!linkGroup?.length) return
    handleShuffle('zkPass', 'logo')
    anchorLinks.forEach((link, i) => handleShuffle(link.text, i))
    linkGroup.forEach((group, i) =>
      handleShuffle(group.groupLabel, i + anchorLinks.length),
    )
    handleShuffle(cta.text, 'cta')
  }, [linkGroup])

  return (
    <header className={cn(s.header, 'layout-grid', 'desktop-only')}>
      <Link
        href="/"
        className={s.logoLink}
        onMouseEnter={() => {
          handleShuffle('zkPass', 'logo')
        }}
      >
        {shuffledTexts['logo']}
      </Link>

      {anchorLinks?.map((link, i) => (
        <Link
          className={s.navLink}
          href={link.url}
          key={i}
          onMouseEnter={() => {
            handleShuffle(link.text, i)
          }}
        >
          {shuffledTexts[i]}
        </Link>
      ))}

      {linkGroup?.map((group, i) => (
        <div
          className={cn(s.navLink, s.dropdownItem)}
          key={i}
          onMouseEnter={() => {
            handleShuffle(group.groupLabel, i + anchorLinks.length)
          }}
          data-tina-field={tinaField(group, 'groupLabel')}
        >
          <p className={s.dropdownLabel}>
            {shuffledTexts[i + anchorLinks.length]}
          </p>

          <div className={s.dropdown}>
            {group.links?.map((link, i) => (
              <Link
                className="p"
                href={link.url}
                key={i}
                data-tina-field={tinaField(link, 'text')}
              >
                <span> {link.text}</span>
                {!link?.url && (
                  <span className={s.comingSoon}>&nbsp;(Coming Soon)</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <Link
        className={s.cta}
        href={cta.url}
        data-tina-field={tinaField(cta, 'text')}
        onMouseEnter={() => {
          handleShuffle(cta.text, 'cta')
        }}
      >
        {shuffledTexts['cta']}
      </Link>
    </header>
  )
}
