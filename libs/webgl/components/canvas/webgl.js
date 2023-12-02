import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useOrchestra } from 'libs/orchestra'
import { Stats } from 'libs/orchestra/stats'
import { SheetProvider } from 'libs/theatre'
import { Suspense } from 'react'
import { useCanvas } from '../../hooks/use-canvas'
import { PostProcessing } from '../postprocessing'
import { Preload } from '../preload'
import { RAF } from '../raf'
import s from './webgl.module.scss'

export function WebGLCanvas({ render = true }) {
  const { WebGLTunnel, DOMTunnel } = useCanvas()

  const { stats } = useOrchestra()

  return (
    <div className={s.webgl}>
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          alpha: true,
          stencil: false,
          depth: false,
        }}
        dpr={[1, 2]}
        orthographic
        // camera={{ position: [0, 0, 5000], near: 0.001, far: 10000, zoom: 1 }}
        frameloop="never"
        linear
        flat
        eventSource={document.documentElement}
        eventPrefix="client"
      >
        <SheetProvider id="webgl">
          <Suspense>
            <OrthographicCamera
              makeDefault
              position={[0, 0, 5000]}
              near={0.001}
              far={10000}
              zoom={1}
            />
            <RAF render={render} />
            {stats && <Stats />}
            <SheetProvider id="postprocessing">
              <PostProcessing />
            </SheetProvider>
            <WebGLTunnel.Out />
            <Preload />
          </Suspense>
        </SheetProvider>
      </Canvas>
      <DOMTunnel.Out />
    </div>
  )
}
