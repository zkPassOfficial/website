import { useRect } from '@studio-freight/hamo'
import cn from 'clsx'
import { useDeviceDetection } from 'components/device-detection'
import dynamic from 'next/dynamic'
import { useTiles } from '../postprocessing/effects/tiles/context'
import { WebGLTunnel } from '../tunnel'
import s from './background.module.scss'

const WebGLBackground = dynamic(
  () => import('./webgl').then(({ WebGLBackground }) => WebGLBackground),
  { ssr: false },
)

export function Background({ className, ...props }) {
  const [setRectRef, rect] = useRect()

  const { isWebGL } = useDeviceDetection()

  return (
    <div
      ref={setRectRef}
      className={cn(className, s.background)}
      style={
        isWebGL
          ? {
              opacity: 0,
            }
          : {}
      }
    >
      <WebGLTunnel>
        <WebGLBackground rect={rect} {...props} />
      </WebGLTunnel>
    </div>
  )
}

export function TextBackground({ className, align = 'left' }) {
  const [setRectRef, rect] = useRect()

  const { step } = useTiles()

  const width = Math.round(rect.width / step) * step

  return (
    <div
      className={cn(className, s.textBackground, s[align])}
      ref={setRectRef}
      style={{ '--width': width + 'px' }}
    ></div>
  )
}
