import { Lenis, useLenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import { CustomHead } from 'components/custom-head'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { HeaderMobile } from 'components/header/mobile'
import { Scrollbar } from 'components/scrollbar'
import { ThemeProvider } from 'hooks/use-theme'
import { Canvas } from 'libs/webgl/components/canvas'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import s from './layout.module.scss'

export function Layout({
  header,
  footer,
  seo = { title: '', description: '', image: '', keywords: '' },
  children,
  theme = 'light',
  className,
}) {
  const lenis = useLenis()

  useEffect(() => {
    function onHashChangeStart(url) {
      url = '#' + url.split('#').pop()
      lenis.scrollTo(url, {
        offset: -50,
      })
    }

    Router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [lenis])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <CustomHead {...seo} />
      <ThemeProvider theme={theme}>
        <Lenis root>
          <Canvas>
            <div
              className={cn(
                `theme-${theme}`,
                s.layout,
                isLoaded && s.isLoaded,
                className,
              )}
            >
              <Scrollbar />
              <Header {...header} />
              <HeaderMobile {...header} />
              <main className={s.main}>{children}</main>
              <Footer {...footer} />
            </div>
          </Canvas>
        </Lenis>
      </ThemeProvider>
    </>
  )
}
