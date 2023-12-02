import { Image } from '@studio-freight/compono'
import cn from 'clsx'
import { useState } from 'react'
import s from './mask.module.scss'

export function Mask({ className, src, ...props }) {
  const [currentSrc, setCurrentSrc] = useState()

  return (
    src && (
      <div
        className={cn(className, s.mask)}
        style={
          currentSrc && {
            WebkitMaskImage: `url(${currentSrc})`,
            maskImage: `url(${currentSrc})`,
          }
        }
      >
        <Image
          src={src}
          alt=""
          onLoad={({ target }) => {
            setCurrentSrc(target.currentSrc)
          }}
          fill
          {...props}
        />
      </div>
    )
  )
}
