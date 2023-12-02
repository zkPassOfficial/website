import { Image as NextImage } from '@studio-freight/compono'
import { useRect } from '@studio-freight/hamo'
import { useDeviceDetection } from 'components/device-detection'
import { useCanvas } from 'libs/webgl/hooks/use-canvas'
import dynamic from 'next/dynamic'
import { useId, useState } from 'react'

const WebGLImage = dynamic(
  () => import('./webgl').then(({ WebGLImage }) => WebGLImage),
  {
    ssr: false,
  },
)

export function Image({ className, ...props }) {
  const [src, setSrc] = useState()
  const [setRectRef, rect] = useRect()

  const { WebGLTunnel } = useCanvas()

  const { isWebGL } = useDeviceDetection()

  const uuid = useId()

  return (
    <>
      <WebGLTunnel.In>
        {/* unique key is MANDATORY to avoid unmount/mount of component */}
        <WebGLImage key={uuid} rect={rect} src={src} />
      </WebGLTunnel.In>
      <div
        className={className}
        style={{
          opacity: src && isWebGL ? 0 : 1,
          position: 'relative',
        }}
        ref={setRectRef}
      >
        <NextImage
          {...props}
          onLoad={(img) => {
            setSrc(img.target.currentSrc)
          }}
          fill
        />
      </div>
    </>
  )
}
