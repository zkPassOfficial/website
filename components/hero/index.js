import { Image, Link } from '@studio-freight/compono'
import { useLenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import { BarLevel } from 'components/bar-level'
import { Rive } from 'components/rive'
import { TextMarquee } from 'components/text-marquee'
import { Background } from 'libs/webgl/components/background'
import { useEffect, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shuffle } from 'txt-shuffle'
import s from './hero.module.scss'
import ArrowIcon from '/assets/svgs/arrow.svg'
import CrossIcon from '/assets/svgs/cross.svg'
import Logomark from '/assets/svgs/logomark.svg'

export function Hero(props) {
  const lenis = useLenis()
  const { header, banner, bodyLeft, bodyRight } = props

  const [shuffledText, setShuffledText] = useState('')
  const handleShuffle = (text) => {
    shuffle({
      text: text,
      duration: 0.5,
      stayFrames: 25,
      onUpdate: (output) => {
        setShuffledText(output)
      },
    })
  }
  useEffect(() => {
    if (!banner?.cta?.text) return
    handleShuffle(banner.cta.text)
  }, [banner])

  return (
    <section className={cn(s.hero, 'layout-grid')}>
      <div className={s.first}>
        <div className={s.background}>
          {new Array(7).fill(0).map((_, i) => (
            <Background key={i} />
          ))}
        </div>

        <div className={s.fg}>
          <h1 className="h1" data-tina-field={tinaField(header, 'rowOne')}>
            {header.rowOne}
          </h1>
          <h1 className="h1" data-tina-field={tinaField(header, 'rowTwo')}>
            {header.rowTwo}
          </h1>
          <h1 className="h1" data-tina-field={tinaField(header, 'rowThree')}>
            {header.rowThree}
          </h1>
          <h1 className="h1" data-tina-field={tinaField(header, 'rowFour')}>
            {header.rowFour}
          </h1>

          <div className={s.body}>
            <div className={s.logoWrap}>
              <Logomark />
            </div>

            <p
              className={cn(s.left, 'p indent')}
              data-tina-field={tinaField(props, 'bodyLeft')}
            >
              {bodyLeft}
            </p>
            <p
              className={cn(s.right, 'p indent')}
              data-tina-field={tinaField(props, 'bodyRight')}
            >
              {bodyRight}
            </p>
          </div>

          <div className={cn(s.lottieWrap, 'desktop-only')}>
            <Rive file="/animations/hero.riv" loop scrubOnLoop={1.5} />
          </div>

          <CrossIcon className={s.cross1} />
          <CrossIcon className={s.cross2} />
          <CrossIcon className={s.cross3} />

          <div className={cn(s.levelWrap, 'desktop-only')}>
            <BarLevel fillHigh={0.5} />
          </div>
        </div>
      </div>
      <div className={s.second}>
        <Background className={s.background} />

        <div className={s.fg}>
          <div
            className={s.iconWrap}
            data-tina-field={tinaField(banner, 'icon')}
          >
            <Image src={banner.icon} objectFit="contain" fill alt="" />
          </div>
          <TextMarquee
            className={s.marquee}
            {...banner.marquee}
            data-tina-field={tinaField(banner, 'textMarquee')}
          />
          {banner.cta?.url && (
            <Link
              className={s.cta}
              href={banner.cta.url}
              data-tina-field={tinaField(banner, 'cta')}
              onMouseEnter={() => handleShuffle(banner.cta.text)}
            >
              {shuffledText}
            </Link>
          )}
        </div>

        <div className={s.top}>
          <Background className={s.background} />
          <CrossIcon className={s.icon} />
        </div>
      </div>
      <button
        className={s.arrow}
        aria-label="scroll to stats section"
        onClick={() => {
          lenis.scrollTo('#stats')
        }}
      >
        <Background className={s.background} />
        <ArrowIcon className={s.icon} />
      </button>
      <div className={cn(s.third, 'desktop-only')}>
        <div className={s.bg}>
          {new Array(5).fill(0).map((_, i) => (
            <Background key={i} />
          ))}
        </div>

        <div className={s.lottieWrap}>
          <Rive file="/animations/hero-2.riv" loop />
        </div>

        <CrossIcon className={s.cross} />
      </div>
    </section>
  )
}
