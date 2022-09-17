import styled from "styled-components"
import Image from "next/image"

import banner from "public/images/home/main_bg.png"
import we from "public/images/home/we.png"
import privacy from "public/images/home/privacy.png"
import zkp from "public/images/home/mpc_zkp.png"

const Banner = styled.div`
  position: absolute;
  left: 15%;
  top: 15%;
  height: 70%;
  width: 70%;
`

const Privacy = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: show 1s ease-out;
`

const We = styled.div`
  position: absolute;
  left: 18%;
  top: 3%;
  height: 50%;
  width: 50%;
  transition: all 0.3s linear;
  animation: slide-we .8s ease-out;
`

const ZKP = styled.div`
  position: absolute;
  right: 9%;
  bottom: 0;
  height: 70%;
  width: 70%;
  transition: all 0.3s linear;
  animation: slide-mpc .8s ease-out;
`

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  &:hover ${We}{
    transition: all 0.3s linear;
    transform: translate3d(-10px, -10px, 0);
  }
  &:hover ${ZKP}{
    transition: all 0.3s linear;
    transform: translate3d(10px, 10px, 0);
  }
`

const HomeImage = () => {

  return <Container>
    <Banner>
      <Image src={banner} alt="logo" layout="fill" objectFit="contain"/>
    </Banner>
    <Privacy>
      <Image src={privacy} alt="logo" layout="fill" objectFit="contain"/>
    </Privacy>
    <We>
      <Image src={we} alt="logo" layout="fill" objectFit="contain"/>
    </We>
    <ZKP>
      <Image src={zkp} alt="logo" layout="fill" objectFit="contain"/>
    </ZKP>
  </Container>

}

export default HomeImage