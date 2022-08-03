import styled from 'styled-components'
import Navigation from 'components/Navigation'
import Home from './components/home'
import ZKPass from './components/zkPass'
import KYCModal from './components/kyc'
import Architecture from './components/architecture'
import Protocol from './components/protocol'
import WhyZKPass from './components/whyZkPass'
import Resources from './components/resources'
import { RefObject, useEffect, useRef, useState } from 'react'

const MainContainer = styled.div`
  position: relative;
  scroll-behavior: smooth;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`


const Main = () => {
  const [current, setCurrent] = useState(0)
  const mainContainer = useRef('mianContainer')
  const home = useRef('Home')
  const zkPass = useRef('ZKPass')
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
      const t = mainContainer.current.scrollTop
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

    if (mainContainer && mainContainer.current) {
      mainContainer.current.addEventListener("scroll", updateScrollPosition, false);
      return function cleanup() {
        mainContainer.current.removeEventListener("scroll", updateScrollPosition, false);
      };
    }
  }, [])


  return <>
    <Navigation indexPage={current}></Navigation>
    <MainContainer ref={mainContainer}>
      <Home ref={home} ></Home>
      <ZKPass ref={zkPass}></ZKPass>
      <KYCModal ref={kyc}></KYCModal>
      <Architecture ref={architecture}></Architecture>
      <Protocol ref={protocol}></Protocol>
      <WhyZKPass ref={whyzkpass}></WhyZKPass>
      <Resources ref={resources}></Resources>
    </MainContainer>
  </>
}

export default Main
