import { useThree } from '@react-three/fiber'
import { useFrame } from '@studio-freight/hamo'
import { useEffect, useMemo } from 'react'
import StatsGL from 'stats-gl'
import s from './stats.module.scss'

export function Stats() {
  const gl = useThree(({ gl }) => gl)

  const stats = useMemo(() => new StatsGL(), [])

  useEffect(() => {
    // stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.container)
    stats.container.classList.add(s.stats)
    stats.init(gl.domElement)

    return () => {
      stats.container.remove()
    }
  }, [stats])

  useFrame(() => {
    stats.begin()
  }, -Infinity)

  useFrame(() => {
    stats.end()
  }, Infinity)
}
