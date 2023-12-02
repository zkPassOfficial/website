import { useThree } from '@react-three/fiber'
import { useLenis } from '@studio-freight/react-lenis'
import { useRef } from 'react'

export function useWebGLRect(DOMRect) {
  const rect = useRef({})

  const size = useThree(({ size }) => size)

  useLenis(
    ({ scroll }) => {
      const x = -size.width / 2 + (DOMRect.left + DOMRect.width / 2)
      const y = size.height / 2 - (DOMRect.top + DOMRect.height / 2) + scroll
      const width = DOMRect.width
      const height = DOMRect.height
      rect.current = { x, y, width, height }
    },
    [DOMRect, size],
    -1,
  )

  return () => rect.current
}
