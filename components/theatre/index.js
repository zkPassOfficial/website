import { useFrame } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { createRafDriver } from '@theatre/core'
import extension from '@theatre/r3f/dist/extension'
import studio from '@theatre/studio'
import cn from 'clsx'
import { project } from 'pages/_app'
import { useEffect, useMemo, useState } from 'react'
import s from './theatre.module.scss'

// console.log('components/theatre.js')

export function Theatre() {
  const [visible, setVisible] = useState(true)
  const [ui, setUI] = useState(true)
  const lenis = useLenis()

  const raf = useMemo(() => createRafDriver({ name: 'studio raf' }), [])

  useFrame((time) => {
    raf.tick(time)
  })

  useEffect(() => {
    if (studio.__initialized) return

    studio.initialize({ __experimental_rafDriver: raf })
    studio.extend(extension)

    studio.__initialized = true
  }, [raf])

  useEffect(() => {
    if (lenis) {
      lenis.options.smoothWheel = !visible
    }

    if (visible) {
      studio.ui.restore()
      const theatreDOM = document.querySelector('#theatrejs-studio-root')
      if (theatreDOM) {
        theatreDOM.addEventListener('wheel', (e) => {
          // console.log('wheel')
          e.stopPropagation()
        })
      }
    } else {
      studio.ui.hide()
    }
  }, [lenis, visible])

  useEffect(() => {
    const main = document.querySelector('#layout')
    if (main) {
      // main.style.visibility = ui ? 'visible' : 'hidden'
      main.style.pointerEvents = visible ? 'none' : 'all'
    }
  }, [visible])

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.style.visibility = ui ? 'visible' : 'hidden'
    }
  }, [ui])

  return (
    <div className={cn(s.theatre, visible && s.visible)}>
      <button
        onClick={() => {
          setVisible((v) => !v)
        }}
        className={s.toggle}
      >
        🎭
      </button>

      <button
        onClick={() => {
          setUI((v) => !v)
        }}
        className={s.ui}
      >
        📄
      </button>

      <button
        onClick={() => {
          // setVisible(!visible)
          const id = project.address.projectId
          const json = studio.createContentOfSaveFile(id)
          const file = new File(
            [JSON.stringify(json, null, 2)],
            'config.json',
            {
              type: 'application/json',
            },
          )
          const url = URL.createObjectURL(file)
          const a = document.createElement('a')
          a.href = url
          // create title using id and date up to seconds
          const title = `${id}-theatre-state-${new Date()
            .toISOString()
            .slice(0, 19)}`
          a.download = title
          a.click()
        }}
        className={s.save}
      >
        💾
      </button>
    </div>
  )
}
