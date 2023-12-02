import { useThree } from '@react-three/fiber'
import { useLenis } from '@studio-freight/react-lenis'
import { useTheme } from 'hooks/use-theme'
import { useEffect, useState } from 'react'
import { useTiles } from '../tiles/context'
import { DotGridEffect } from './effect'

export function useDotGridEffect() {
  const [gridEffect] = useState(() => new DotGridEffect())

  const { getOffset } = useTiles()

  useLenis(
    ({ scroll, limit }) => {
      const offset = getOffset()

      gridEffect.scroll = Math.floor(scroll) - offset
      gridEffect.maxScroll = Math.floor(limit)
    },
    [gridEffect, getOffset],
    1,
  )

  const theme = useTheme()

  const viewport = useThree(({ viewport }) => viewport)

  useEffect(() => {
    gridEffect.dpr = viewport.dpr
    gridEffect.size = viewport.dpr * 1.75
  }, [viewport, gridEffect])

  useEffect(() => {
    gridEffect.color = theme.dot
  }, [theme, gridEffect])

  return gridEffect
}
