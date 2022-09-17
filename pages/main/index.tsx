import { useRouter } from 'next/router'

import Navigation from 'components/Navigation'
import Home from './components/home'
import ZKPass from './components/zkPass'
import KYCModal from './components/kyc'
import Architecture from './components/architecture'
import Protocol from './components/protocol'
import WhyZKPass from './components/whyZkPass'
import Resources from './components/resources'
import { RefObject, useEffect, useRef, useState } from 'react'

import { scrollScreen } from 'rc-scroll-anim';

import useMatchBreakpoints from 'hooks/useMatchBreakpoints'

const Main = () => {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [defaultTab, setDefaultTab] = useState('Roadmap')
  const { isMobile } = useMatchBreakpoints()

  const routerMap = {
    home: useRef('home'),
    zkPass: useRef('zkPass'),
    kyc: useRef('kyc'),
    architecture: useRef('architecture'),
    protocol: useRef('protocol'),
    whyzkpass: useRef('whyzkpass'),
    resources: useRef('resources')
  }

  const changeOpacity = (ref: RefObject<any>, mul: number, scrollPosition: number, windowHeight: number) => {

    if (!ref || !ref.current) {
      return
    }
    if (mul < 1 && mul >= 0) {
      ref.current.style.opacity = 1 - (scrollPosition / windowHeight) * 1.5
    }

  }

  useEffect(() => {
    const h = window.innerHeight

    function updateScrollPosition() {
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      const mul = Math.floor(t / h)
      setCurrent(Math.round(t / h))
      changeOpacity(routerMap.home, mul, t, h)
      changeOpacity(routerMap.zkPass, mul - 1, t - h, h)
      changeOpacity(routerMap.kyc, mul - 2, t - 2 * h, h)
      changeOpacity(routerMap.architecture, mul - 3, t - 3 * h, h)
      changeOpacity(routerMap.protocol, mul - 4, t - 4 * h, h)
      changeOpacity(routerMap.whyzkpass, mul - 5, t - 5 * h, h)
      changeOpacity(routerMap.resources, mul - 6, t - 6 * h, h)
    }

    if (!isMobile && window && window.document) {
      window.document.addEventListener("scroll", updateScrollPosition, false);
      return function cleanup() {
        window.document.removeEventListener("scroll", updateScrollPosition, false);
      };
    }
  }, [])

  useEffect(() => {
    if (router.asPath) {
      const currentPath = router.asPath.split('/')[1]
      let currentElement = routerMap[currentPath]

      if (window && window.document) {
        if (currentPath === "roadmap") {
          setDefaultTab('Roadmap')
          currentElement = routerMap.resources
        }

        if (currentPath === "tokenomic") {
          setDefaultTab('Tokenomic')
          currentElement = routerMap.resources
        }

        if (currentElement && currentElement.current) {
          currentElement.current.scrollIntoView()
        }
      }
    }
  }, [router])

  useEffect(() => {
    if (isMobile) return
    scrollScreen.init({ loop: false, duration: 150, location: [routerMap.home, routerMap.zkPass, routerMap.kyc, routerMap.architecture, routerMap.protocol, routerMap.whyzkpass, routerMap.resources] })
    return () => {
      scrollScreen.unMount();
    }
  }, [])


  return <>
    <Navigation indexPage={current}></Navigation>
    <Home ref={routerMap.home} ></Home>
    <ZKPass ref={routerMap.zkPass}></ZKPass>
    <KYCModal ref={routerMap.kyc}></KYCModal>
    <Architecture ref={routerMap.architecture}></Architecture>
    <Protocol ref={routerMap.protocol}></Protocol>
    <WhyZKPass ref={routerMap.whyzkpass}></WhyZKPass>
    <Resources ref={routerMap.resources} defaultTab={defaultTab}></Resources>
  </>
}

export default Main
