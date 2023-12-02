import { useRive } from '@rive-app/react-canvas'
import { useIntersectionObserver } from '@studio-freight/hamo'
import cn from 'clsx'
import { useEffect } from 'react'
import s from './rive.module.scss'

export function Rive({ file, loop, className }) {
  const [setRef, { isIntersecting }] = useIntersectionObserver()

  const { rive, RiveComponent } = useRive({
    src: file,
    autoplay: false,
    onLoop: () => {
      if (!loop) rive.stop()
    },
  })

  useEffect(() => {
    if (isIntersecting) {
      rive?.play()
    } else {
      rive?.pause()
    }
  }, [isIntersecting, rive])

  return (
    <div ref={setRef} className={cn(className, s.rive)}>
      <RiveComponent />
    </div>
  )
}
