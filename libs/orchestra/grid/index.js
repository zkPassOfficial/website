import { useLenis } from '@studio-freight/react-lenis'
import { useRef } from 'react'
import s from './grid.module.scss'

export function GridDebugger() {
  const elementRef = useRef()

  useLenis(({ scroll }) => {
    elementRef.current.style.setProperty('--scroll', -scroll + 'px')
  })

  return <div className={s.grid} ref={elementRef} />
}
