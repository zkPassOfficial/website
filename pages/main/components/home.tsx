import styled from "styled-components"
import Image from "next/image"
import footerPic from 'public/images/home/footer.png'
import SocialMedia from "components/SocialMedia"
import { forwardRef } from "react"
import ScrollOverpack from "components/ScrollOverpack"

import HomeImage from './homeImage'

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('./images/home/left_top.png');
  background-size: 40%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #0F0F0F;
  ${({ theme }) => theme.sm} {
    position: relative;
    height: auto;
    display: block;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 648px;
  ${({ theme }) => theme.sm} {
    position: relative;
    height: 200px;
    width: 324px;
    margin: 80px auto 32px;
  }
}
`

const FooterContainer = styled(ImageContainer)`
  position: absolute;
  left: 60px;
  bottom: 30px;
  width: 100%;
  height: 40px;
  ${({ theme }) => theme.sm} {
    position: relative;
    left: 0;
  }
`

const TextContainer = styled.div`
  position: absolute;
  bottom: 100px;
  ${({ theme }) => theme.sm} {
    position: relative;
    bottom: 0px;
    padding: 0 20px;
  }
`

const Text = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  font-family: Gothic720BT-LightB;
  color: #999999;
  ${({ theme }) => theme.sm} {
    font-size: 12px;
  }
`

const Home = forwardRef((props, ref) => {
  return <>
    <HomeContainer ref={ref} id="home">
      <ScrollOverpack>
        <ImageContainer>
          <HomeImage></HomeImage>
        </ImageContainer>
        <SocialMedia></SocialMedia>
        <TextContainer>
          <Text>
            zkPass is a decentralized KYC solution based
          </Text>
          <Text>
            on MPC(Multi-Party Computation) and ZKP(Zero-Knowledge Proof)
          </Text>
        </TextContainer>
        <FooterContainer>
          <Image layout="fill" objectFit="contain" quality={100} src={footerPic} />
        </FooterContainer>
      </ScrollOverpack>
    </HomeContainer>
  </>
})

export default Home