import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import s from './header-mobile.module.scss'

const ChevronLeft = dynamic(() => import('/assets/svgs/chevron-left.svg'), {
  ssr: false,
})
const ChevronRight = dynamic(() => import('/assets/svgs/chevron-right.svg'), {
  ssr: false,
})

export function HeaderMobile(props) {
  const { linkGroup, cta } = props
  const anchorLinks = [
    { text: 'Technologies', url: '/#technologies' },
    { text: 'Solutions', url: '/#solutions' },
    { text: 'Features', url: '/#features' },
    { text: 'Hybrid ZK', url: '/#hybrid-zk' },
    { text: 'Use Cases', url: '/#use-cases' },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(-1)
  const [submenuVisible, setSubmenuVisible] = useState(-1)

  const openSubmenu = (i) => {
    setSubmenuOpen(i)
    setSubmenuVisible(i)
  }
  const closeSubmenu = () => {
    setSubmenuOpen(-1)
    setTimeout(() => setSubmenuVisible(-1), 400)
  }

  useEffect(() => {
    Router.events.on('hashChangeStart', () => setMenuOpen(false))

    return () => {
      Router.events.off('hashChangeStart', () => setMenuOpen(false))
    }
  }, [])

  return (
    <header className={cn(s.headerMobile, 'mobile-only')}>
      <Link href="/" className={s.logoLink}>
        ZkPass
      </Link>

      <button className={s.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

      <div className={cn(s.menu, menuOpen && s.open)}>
        <div className={cn(s.navWrap, submenuOpen > -1 && s.subOpen)}>
          <nav>
            {anchorLinks?.map((link, i) => (
              <Link className={cn(s.navLink, 'h1')} href={link.url} key={i}>
                {link.text}
              </Link>
            ))}

            {linkGroup?.map((group, i) => (
              <div className={cn(s.navLink, s.dropdownItem)} key={i}>
                <button
                  className={cn(s.dropdownLabel, 'h1')}
                  onClick={() => openSubmenu(i)}
                >
                  {group.groupLabel}
                  <ChevronRight />
                </button>

                <div
                  className={cn(s.dropdown, submenuVisible === i && s.isOpen)}
                >
                  <button onClick={() => closeSubmenu()}>
                    <ChevronLeft />
                    <span>Back</span>
                  </button>

                  <p className={s.label}>{group.groupLabel}</p>
                  {group.links?.map((link, i) => (
                    <Link
                      className={cn(!link?.url && s.comingSoon, 'h1')}
                      href={link.url}
                      key={i}
                    >
                      <span> {link.text}</span>
                      {!link?.url && (
                        <span className={s.comingSoon}>Coming Soon</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <Link className={s.cta} href={cta.url}>
            {cta.text}
          </Link>
        </div>
      </div>
    </header>
  )
}
