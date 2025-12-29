import { Marquee } from '@studio-freight/compono'
import cn from 'clsx'
import { Mask } from 'components/mask'
import { Slider, useSlider } from 'components/slider'
import { Background } from 'libs/webgl/components/background'
import dynamic from 'next/dynamic'
import { tinaField } from 'tinacms/dist/react'
import s from './partners.module.scss'

const ChevronLeft = dynamic(() => import('/assets/svgs/chevron-left.svg'), {
  ssr: false,
})
const ChevronRight = dynamic(() => import('/assets/svgs/chevron-right.svg'), {
  ssr: false,
})

const SliderInternal = ({ row, rtl }) => {
  const { scrollPrev, scrollNext, currentIndex } = useSlider()

  return (
    <>
      <div className={s.controls}>
        <p className="h3" data-tina-field={tinaField(row, 'body')}>
          {row.body}
        </p>

        <div className={s.buttonWrap}>
          <button onClick={scrollPrev} aria-label="previous slide">
            <ChevronLeft />
          </button>
          <button onClick={scrollNext} aria-label="next slide">
            <ChevronRight />
          </button>
        </div>

        <Background className={s.bg} />
      </div>

      <div className={cn(s.slider, rtl && s.rtl)}>
        <Slider.Slides className={s.container}>
          {row.cards.map((card, i) => (
            <div
              className={cn(s.card, currentIndex === i && s.active)}
              key={i}
              data-tina-field={tinaField(card, 'companyLogo')}
            >
              {card.companyLogo && (
                <Mask src={card.companyLogo} className={s.imgWrap} />
              )}

              <Marquee className={s.marquee} repeat={6} speed={0.4}>
                <span className="p">
                  {card.companyName} ⋅ {card.companyName} ⋅&nbsp;
                </span>
              </Marquee>
            </div>
          ))}
        </Slider.Slides>
        <Background className={s.bg} />
      </div>
    </>
  )
}

export function Partners({ row: rows }) {
  return (
    <div className={cn(s.partners, 'layout-grid')}>
      <div className={s.spacer} />

      {rows?.map((row, i) => (
        <Slider
          emblaApi={{
            loop: true,
            autoplay: {
              delay: 2000,
              stopOnMouseEnter: true,
            },
            direction: row.alignment === 'Right' ? 'ltr' : 'rtl',
          }}
          key={i}
        >
          <div className={cn(s.row, s[row.alignment.toLowerCase()])}>
            <h6 className="p" data-tina-field={tinaField(row, 'sectionTitle')}>
              {row.sectionTitle}
              <Background className={s.bg} />
            </h6>

            <SliderInternal row={row} rtl={row.alignment === 'Left'} />
          </div>

          {i === 0 && <div className={cn(s.rowSpacer, 'mobile-only')} />}
        </Slider>
      ))}
    </div>
  )
}
