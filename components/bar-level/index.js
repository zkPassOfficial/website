import { useRect, useWindowSize } from '@studio-freight/hamo'
import cn from 'clsx'
import { useDeviceDetection } from 'components/device-detection'
import { viewports } from 'config/variables'
import { useEffect, useState } from 'react'
import s from './bar-level.module.scss'

export function BarLevel({
  fillLow = 0,
  fillHigh = 1,
  className,
  animationDelay = 0,
}) {
  const { width } = useWindowSize()
  const [setRectRef, { height }] = useRect()
  const [numBars, setNumBars] = useState(0)

  const { isMobile } = useDeviceDetection()
  const mobileWidth = Number(viewports.mobile.width.replace('px', ''))
  const desktopWidth = Number(viewports.desktop.width.replace('px', ''))

  useEffect(() => {
    if (!height) return
    const vwSpacing = (24 / (isMobile ? mobileWidth : desktopWidth)) * width
    setNumBars(Math.floor(height / (vwSpacing + 1)))
  }, [height, width, desktopWidth, isMobile, mobileWidth])

  const isFilled = (i) => {
    const barPercentage = i / numBars
    return barPercentage >= fillLow && barPercentage <= fillHigh
  }

  return (
    <div className={cn(s.barLevel, className)} ref={setRectRef}>
      {new Array(numBars).fill().map((_, i) => (
        <div
          className={cn(s.bar, isFilled(i) && s.filled)}
          style={{ transitionDelay: animationDelay }}
          key={i}
        />
      ))}
    </div>
  )
}
