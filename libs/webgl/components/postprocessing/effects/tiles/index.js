import { useFrame, useThree } from '@react-three/fiber'
import { useWindowSize } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { types } from '@theatre/core'
import { useTheme } from 'hooks/use-theme'
import { useCurrentSheet } from 'libs/theatre'
import { useTheatre } from 'libs/theatre/hooks/use-theatre'
import { BlendFunction } from 'postprocessing'
import { useEffect, useRef, useState } from 'react'
import { DataTexture, NearestFilter } from 'three'
import { useTiles } from './context'
import { TilesEffect } from './effect'
import s from './tiles.module.scss'

export function useTilesEffect() {
  const [effect] = useState(() => new TilesEffect())

  const sheet = useCurrentSheet()

  useTheatre(
    sheet,
    'postprocessing / tiles',
    {
      blendFunction: types.stringLiteral(
        'ALPHA',
        Object.fromEntries(Object.keys(BlendFunction).map((v) => [v, v])),
      ),
    },
    {
      onValuesChange: ({ blendFunction }) => {
        effect.blendMode.blendFunction = BlendFunction[blendFunction]
      },
      deps: [effect],
    },
  )

  const { interactiveMatrix, matrix, height, step, getOffset } = useTiles()

  const lenis = useLenis()

  useLenis(
    ({ scroll }) => {
      const offset = getOffset()

      effect.scroll = (Math.floor(scroll) - offset) % step

      const windowHeight = window.innerHeight
      const footer = document.querySelector('#footer') // Replace with your footer's selector
      const footerPosition = footer.offsetTop / 1.05

      if (scroll > windowHeight && scroll < footerPosition) {
        canvas.style.opacity = 1
      } else {
        canvas.style.opacity = 0
      }
    },
    [getOffset, step],
    1,
  )

  const [canvas] = useState(() => document.createElement('canvas'))
  const context = canvas.getContext('2d')
  canvas.style.transition = 'opacity 0.5s ease-in-out'

  useEffect(() => {
    if (!lenis) return

    function onMouseMove({ clientX, clientY }) {
      const offset = getOffset()

      const scroll = Math.floor(lenis.scroll) - offset

      clientY += scroll % step

      const x = Math.floor(clientX / step)
      const y = Math.floor(clientY / step)

      if (interactiveMatrix?.[x]?.[y] !== undefined) {
        interactiveMatrix[x][y] = 1
      }
    }

    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [step, lenis, interactiveMatrix, getOffset])

  useFrame((_, deltaTime) => {
    if (!matrix) return

    matrix.forEach((column, x) => {
      column.forEach((_, y) => {
        interactiveMatrix[x][y] = Math.max(
          0,
          interactiveMatrix[x][y] - deltaTime * 0.5,
        )
        matrix[x][y] = 0
      })
    })
  }, -100)

  const lastDeltaYRef = useRef(0)

  useFrame(() => {
    if (!lenis) return

    const offset = getOffset()
    const scroll = Math.floor(lenis.scroll) - offset

    let deltaY = Math.floor(scroll / step)
    deltaY = isNaN(deltaY) ? 0 : deltaY

    if (deltaY !== lastDeltaYRef.current) {
      const difference = deltaY - lastDeltaYRef.current

      lastDeltaYRef.current = deltaY

      if (Math.sign(difference) === -1) {
        //delete last row and add new row at beginning

        interactiveMatrix.forEach((column) => {
          for (let i = 0; i < Math.abs(difference); i++) {
            column.pop()
            column.unshift(0)
          }
        })
      } else if (Math.sign(difference) === 1) {
        //delete first row and add new row at end

        interactiveMatrix.forEach((column) => {
          for (let i = 0; i < Math.abs(difference); i++) {
            column.shift()
            column.push(0)
          }
        })
      }
    }
    // console.timeEnd('scroll')
  }, 1)

  useFrame(() => {
    // console.log(clock.elapsedTime, 'draw')
    if (!matrix) return
    const size = matrix.length * matrix[0].length
    const data = new Uint8ClampedArray(size * 4)

    for (let i = 0; i < size; i++) {
      const value = Boolean(
        matrix[i % matrix.length][Math.floor(i / matrix.length)] ||
          interactiveMatrix[i % matrix.length][Math.floor(i / matrix.length)],
      )

      const channel = i * 4
      data[channel] = value ? 255 : 0
      data[channel + 1] = value ? 255 : 0
      data[channel + 2] = value ? 255 : 0
      data[channel + 3] = 255
    }

    const texture = new DataTexture(data, matrix.length, matrix[0].length)
    texture.minFilter = texture.magFilter = NearestFilter
    texture.flipY = true
    texture.needsUpdate = true

    effect.texture = texture

    const rest = matrix[0].length - height
    effect.scaleY = 1 - rest / matrix[0].length

    context.putImageData(
      new ImageData(data, matrix.length, matrix[0].length),
      0,
      0,
    )
  }, 2)

  const { width: windowWidth, height: windowHeight } = useWindowSize()

  useEffect(() => {
    if (!matrix) return

    canvas.width = matrix?.length
    canvas.height = matrix?.[0].length

    canvas.className = s.debug
    canvas.style.setProperty('--aspect', windowWidth / windowHeight)

    document.body.appendChild(canvas)

    return () => {
      document.body.removeChild(canvas)
    }
  }, [canvas, matrix, windowWidth, windowHeight])

  const theme = useTheme()

  useEffect(() => {
    effect.outlineColor = theme.dot
  }, [theme, effect])

  const viewport = useThree(({ viewport }) => viewport)

  useEffect(() => {
    effect.dpr = viewport.dpr
  }, [viewport, effect])

  return effect
}
