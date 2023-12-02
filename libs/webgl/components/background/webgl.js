import { useFrame } from '@react-three/fiber'
import { useWindowSize } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { useTransform } from 'hooks/use-transform'
import { useTiles } from '../postprocessing/effects/tiles/context'

export function WebGLBackground({ rect }) {
  const { matrix, step } = useTiles()

  const lenis = useLenis()

  const get = useTransform()

  const { height: windowHeight } = useWindowSize()

  useFrame(() => {
    if (!lenis) return

    const { translate } = get()

    const scroll = Math.floor(lenis.scroll) - translate.y

    const { left, top, height, width } = rect

    const deltaX = Math.round(translate.x / step)
    const deltaY = Math.floor(scroll / step)

    // if (debug) {
    //   // if (lenis.targetScroll === lenis.actualScroll) console.log('stop')
    //   console.log(lenis.scroll, lenis.actualScroll, Math.floor(lenis.scroll))
    // }

    if (top - scroll > windowHeight || top + height - scroll < 0) {
      return
    }

    const x1 = Math.round(left / step) + deltaX
    const x2 = Math.round((left + width) / step) + deltaX

    const y1 = Math.round(top / step) - deltaY
    const y2 = Math.round((top + height) / step) - deltaY

    for (let i = 0; i < x2 - x1; i++) {
      for (let j = 0; j < y2 - y1; j++) {
        //check if coords exists
        if (matrix?.[x1 + i]?.[y1 + j] !== undefined) {
          matrix[x1 + i][y1 + j] = 1
        }
      }
    }
  }, 0)
}
