import { useWindowSize } from '@studio-freight/hamo'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'

// @refresh reset

export const TilesContext = createContext({})

export function TilesContextProvider({ children }) {
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  const aspect = (windowWidth || 1) / (windowHeight || 1)

  const countX = 40
  const height = countX / aspect
  const countY = Math.ceil(height + 1)

  const step = useMemo(() => windowWidth / countX, [windowWidth, countX])

  // TODO: use Uint8ClampedArray

  const interactiveMatrix = useMemo(
    () =>
      new Array(countX)
        .fill(0)
        .map(() => new Array(countY).fill(0).map(() => 0)),
    [countX, countY],
  )

  const matrix = useMemo(
    () =>
      new Array(countX)
        .fill(0)
        .map(() => new Array(countY).fill(0).map(() => 0)),
    [countX, countY],
  )

  useEffect(() => {
    document.documentElement.style.setProperty('--vw', windowWidth / 100 + 'px')
    document.documentElement.style.setProperty(
      '--vh',
      windowHeight / 100 + 'px',
    )

    document.documentElement.style.setProperty('--tiles-count-x', countX + 'px')
    document.documentElement.style.setProperty('--tiles-count-y', countY)
    document.documentElement.style.setProperty('--tiles-step', step + 'px')
    document.documentElement.style.setProperty('--aspect-ratio', aspect)

    document.documentElement.style.setProperty(
      '--tiles-margin-y',
      windowHeight - Math.round(countX / aspect) * step + 'px',
    )
  }, [countX, step, windowWidth, windowHeight, aspect, countY])

  const offsetRef = useRef(0)

  const getOffset = useCallback(() => offsetRef.current, [])

  const setOffset = useCallback((offset) => {
    offsetRef.current = offset
  }, [])

  return (
    <TilesContext.Provider
      value={{
        interactiveMatrix,
        matrix,
        countX,
        countY,
        height,
        step,
        getOffset,
        setOffset,
      }}
    >
      {children}
    </TilesContext.Provider>
  )
}

export function useTiles() {
  return useContext(TilesContext)
}
