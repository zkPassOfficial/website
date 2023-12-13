import riveWASMResource from '@rive-app/canvas/rive.wasm'
import { RuntimeLoader, useRive } from '@rive-app/react-canvas'
import { useIntersectionObserver } from '@studio-freight/hamo'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import s from './rive.module.scss'

RuntimeLoader.setWasmUrl(riveWASMResource)

export function Rive({
  file,
  loop,
  loopMode = 'auto',
  scrubOnLoop = false,
  className,
}) {
  const [setRef, { isIntersecting }] = useIntersectionObserver()
  const [loopCount, setLoopCount] = useState(0)

  const { rive, RiveComponent } = useRive({
    src: file,
    autoplay: false,
    loopMode,
    onLoop: () => {
      if (!loop) rive.stop()
      setLoopCount((count) => count + 1)
    },
  })

  useEffect(() => {
    if (isIntersecting) {
      rive?.play()
    } else {
      rive?.pause()
    }
  }, [isIntersecting, rive])

  useEffect(() => {
    if (loopCount > 0 && scrubOnLoop && rive) {
      rive.scrub(rive.animationNames[0], scrubOnLoop)
    }
  }, [rive, scrubOnLoop, loopCount])

  return (
    <div ref={setRef} className={cn(className, s.rive)}>
      <RiveComponent />
    </div>
  )
}
