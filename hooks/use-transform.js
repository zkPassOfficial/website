import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react'

const DEFAULT_TRANSFORM = {
  translate: {
    x: 0,
    y: 0,
    z: 0,
  },
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: {
    x: 1,
    y: 1,
    z: 1,
  },
}

export const TransformContext = createContext(() => DEFAULT_TRANSFORM)

export const TransformProvider = forwardRef(function TransformProvider(
  { children },
  ref,
) {
  const transformRef = useRef(structuredClone(DEFAULT_TRANSFORM))

  const getTransform = useCallback(() => transformRef.current, [])

  const setTranslate = useCallback((x, y, z) => {
    transformRef.current.translate.x = x
    transformRef.current.translate.y = y
    transformRef.current.translate.z = z
  }, [])

  const setRotate = useCallback((x, y, z) => {
    transformRef.current.rotate.x = x
    transformRef.current.rotate.y = y
    transformRef.current.rotate.z = z
  }, [])

  const setScale = useCallback((x, y, z) => {
    transformRef.current.scale.x = x
    transformRef.current.scale.y = y
    transformRef.current.scale.z = z
  }, [])

  useImperativeHandle(ref, () => ({
    setTranslate,
    setRotate,
    setScale,
  }))

  return (
    <TransformContext.Provider value={getTransform}>
      {children}
    </TransformContext.Provider>
  )
})

export function useTransform() {
  return useContext(TransformContext)
}
