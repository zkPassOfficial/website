function encodeURL(str) {
  return encodeURI(str).replace(
    /[!'()*]/g,
    (c) => '%' + c.charCodeAt(0).toString(16),
  )
}

export function getTinaAsset(src) {
  if (!src) return
  const isBrowser = typeof window !== 'undefined'
  const isAdmin =
    isBrowser && window.parent.location.pathname.includes('/admin')
  const isLocal =
    isBrowser && window.parent.location.origin.includes('localhost:')

  if (isAdmin && !isLocal) return encodeURL(src)

  const splitSrc = src.split('/')
  let localSrc

  if (splitSrc.includes('images')) {
    localSrc = `/cms/images/${src.split('/').pop()}`
  } else if (splitSrc.includes('svg')) {
    localSrc = `/cms/svg/${src.split('/').pop()}`
  } else {
    localSrc = `/cms/${src.split('/').pop()}`
  }

  return encodeURL(localSrc)
}

export function useTinaMedia(src) {
  return getTinaAsset(src)
}
