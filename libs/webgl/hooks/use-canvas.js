import { createContext, useContext, useState } from 'react'
import tunnel from 'tunnel-rat'

export const CanvasContext = createContext({})

export function CanvasContextProvider({ children }) {
  const [WebGLTunnel] = useState(() => new tunnel())
  const [DOMTunnel] = useState(() => new tunnel())

  return (
    <CanvasContext.Provider value={{ WebGLTunnel, DOMTunnel }}>
      {children}
    </CanvasContext.Provider>
  )
}

export function useCanvas() {
  return useContext(CanvasContext)
}
