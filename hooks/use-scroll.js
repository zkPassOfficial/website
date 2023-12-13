import { useEffect } from 'react'

export function useScroll(target, callback) {
  const getPositions = () => {
    const el = target?.current
    if (!el) return

    return {
      x: el.scrollLeft / (el.scrollWidth - el.clientWidth),
      y: el.scrollTop / (el.scrollHeight - el.clientHeight),
    }
  }

  const onScroll = () => {
    const newScrollValues = getPositions()
    if (!newScrollValues) return

    const { x, y } = newScrollValues
    callback({ scrollX: x, scrollY: y })
  }

  target?.current?.addEventListener('scroll', onScroll, {
    capture: false,
    passive: true,
  })

  useEffect(() => {
    const el = target?.current
    return () => {
      el?.removeEventListener('scroll', onScroll, {
        capture: false,
        passive: true,
      })
    }
  }, [target.current])
}
