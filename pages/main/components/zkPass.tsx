import styled from "styled-components"
import { forwardRef } from "react"
import ScrollOverpack from "components/ScrollOverpack"
import QueueAnim from "rc-queue-anim"

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('./images/zkPass/banner.png');
  background-size: 50%;
  background-position:center 60%;
  background-repeat: no-repeat;
  background-color: #0F0F0F;
  ${({ theme }) => theme.sm} {
    position: relative;
    height: auto;
    background: none;
  }
`

const Header = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: #FFFFFF;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    font-size: 40px;
    text-align: center;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 15%;
  width: 65%;
  ${({ theme }) => theme.sm} {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 20px;
  }
`

const Text = styled.span`
  display: block;
  width: 70%;
  margin-bottom: 40px;
  padding: 4px;
  line-height: 1.5;
  text-align: left;
  font-size: 14px;
  font-family: Gothic720BT-LightB;
  color: #999999;
  ${({ theme }) => theme.sm} {
    width: 100%;
    text-align: center;
  }
`

const TextBanner = styled(Text)`
  background: #00000077;
  width: 100%;
`

const ZKPass = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="zkPass">
      <ScrollOverpack appear={false}>
        <TextContainer>
          <QueueAnim type="right" leaveReverse duration={500}>
            <Header key="header">What is zkPass</Header>
            <TextBanner key="banner">zkPass is a decentralized KYC solution based</TextBanner>
            <Text key="text">zkPass is a decentralized KYC solution based on MPC (Multi-Party Computation) and ZKP (Zero-Knowledge Proof), which aims to overcome the various flaws in the current KYC system, eliminate the pain points related to identity authentication, and protect user privacy while expanding KYC capabilities.</Text>
          </QueueAnim>
        </TextContainer>
      </ScrollOverpack>
    </Container>
  </>
})

export default ZKPass