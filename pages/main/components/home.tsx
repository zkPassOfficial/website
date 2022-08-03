import styled from "styled-components"
import Image from "next/image"
import mainPic from 'public/images/home/main.png'
import footerPic from 'public/images/home/footer.png'
import SocialMedia from "components/SocialMedia"
import { forwardRef } from "react"

const HomeContainer = styled.div`
  position: sticky;
  top: 0;
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
  height: 55%;
  width: 45%;
  ${({ theme }) => theme.sm} {
    position: relative;
    height: 300px;
    width: 200px;
    margin: auto;
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
    bottom: 50px;
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
      <ImageContainer>
        <Image layout="fill" objectFit="contain" quality={100} src={mainPic} />
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
    </HomeContainer>
  </>
})

export default Home