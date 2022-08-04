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
  const [current, setCurrent] = useState(0)
  const { isMobile } = useMatchBreakpoints()
  
  const home = useRef('home')
  const zkPass = useRef('zkPass')
  const kyc = useRef('kyc')
  const architecture = useRef('architecture')
  const protocol = useRef('protocol')
  const whyzkpass = useRef('whyzkpass')
  const resources = useRef('resources')

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
      changeOpacity(home, mul, t, h)
      changeOpacity(zkPass, mul - 1, t - h, h)
      changeOpacity(kyc, mul - 2, t - 2 * h, h)
      changeOpacity(architecture, mul - 3, t - 3 * h, h)
      changeOpacity(protocol, mul - 4, t - 4 * h, h)
      changeOpacity(whyzkpass, mul - 5, t - 5 * h, h)
      changeOpacity(resources, mul - 6, t - 6 * h, h)
    }

    if (window && window.document) {
      window.document.addEventListener("scroll", updateScrollPosition, false);
      return function cleanup() {
        window.document.removeEventListener("scroll", updateScrollPosition, false);
      };
    }
  }, [])

  useEffect(() => {
    if (isMobile) return
    scrollScreen.init({ loop: false, duration: 150, location: [home, zkPass, kyc, architecture, protocol, whyzkpass, resources] })
    return () => {
      scrollScreen.unMount();
    }
  }, [])


  return <>
    <Navigation indexPage={current}></Navigation>
    <Home ref={home} ></Home>
    <ZKPass ref={zkPass}></ZKPass>
    <KYCModal ref={kyc}></KYCModal>
    <Architecture ref={architecture}></Architecture>
    <Protocol ref={protocol}></Protocol>
    <WhyZKPass ref={whyzkpass}></WhyZKPass>
    <Resources ref={resources}></Resources>
  </>
}

export default Main
