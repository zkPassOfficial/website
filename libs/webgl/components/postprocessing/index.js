// @refresh reset

import { useFrame, useThree } from '@react-three/fiber'
import { useWindowSize } from '@studio-freight/hamo'
import { EffectComposer, EffectPass, RenderPass } from 'postprocessing'
import { useEffect, useMemo } from 'react'
import { HalfFloatType } from 'three'
import { useDotGridEffect } from './effects/dot-grid'
import { useTilesEffect } from './effects/tiles'

export function PostProcessing() {
  const { gl, viewport, camera, scene, setDpr } = useThree()

  const isWebgl2 = gl.capabilities.isWebGL2
  const dpr = viewport.dpr
  const maxSamples = gl.capabilities.maxSamples
  const needsAA = dpr < 2

  const composer = useMemo(
    () =>
      new EffectComposer(gl, {
        multisampling: isWebgl2 && needsAA ? maxSamples : 0,
        frameBufferType: HalfFloatType,
      }),
    [gl, needsAA, isWebgl2, maxSamples],
  )

  const renderPass = useMemo(
    () => new RenderPass(scene, camera),
    [scene, camera],
  )

  const dotGridEffect = useDotGridEffect()
  const tilesEffect = useTilesEffect()

  const effectPass = useMemo(
    () => new EffectPass(camera, dotGridEffect, tilesEffect),
    [camera, dotGridEffect, tilesEffect],
  )

  useEffect(() => {
    composer.addPass(renderPass)
    composer.addPass(effectPass)

    return () => {
      composer.removePass(renderPass)
      composer.removePass(effectPass)
    }
  }, [composer, renderPass, effectPass])

  const { width: windowWidth, height: windowHeight } = useWindowSize()

  useEffect(() => {
    const initialDpr = Math.min(window.devicePixelRatio, 2)

    const dpr = windowWidth <= 2048 ? initialDpr : 1
    setDpr(dpr)

    composer.setSize(windowWidth, windowHeight)
  }, [composer, windowWidth, windowHeight])

  useFrame((_, deltaTime) => {
    composer.render(deltaTime)
  }, Infinity)
}
