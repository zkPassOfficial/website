import styled from "styled-components"
import { forwardRef } from "react"
import ScrollOverpack from "components/ScrollOverpack"
import QueueAnim from 'rc-queue-anim';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: url('./images/why/banner.png');
  background-size: 10vw;
  background-position: 20vw 25vh;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #0F0F0F;
  ${({ theme }) => theme.md} {
    height: auto;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
    display: block;
  }
`

const Header = styled.div`
  position: absolute;
  left: 19%;
  top: 75%;
  font-size: 60px;
  color: #FFFFFF;
  margin-bottom: 20px;
  transform: rotate(-90deg);
  transform-origin: top left;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 120%;
    right: 0;
    height: 3px;
    width: 50%;
    background: #FFFFFF;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
    margin-top: 50px;
    text-align: center;
    left: 0;
    width: 100%;
    font-size: 40px;
    transform: rotate(0deg);
    &::after{
      left: 50%;
      margin-left: -10%;
      width: 20%;
    }
  }
`

const ItemContainer = styled.div`
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  top: 24%;
  left: 33%;
  width: 50%;
  ${({ theme }) => theme.sm} {
    position: relative;
    width: 80%;
    left: 0;
    margin: 0 auto;
  }
`

const Text = styled.span`
  position: relative;
  top: -10px;
  left: 35px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 4px;
  line-height: 1.5;
  text-align: left;
  font-size: 14px;
  font-family: Gothic720BT-LightB;
  color: #999999;
`

const TextBanner = styled.div<{ text: string }>`
  position: relative;
  color: #FFFFFF;
  height: 30px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    height: 30px;
    width: 70%;
    background: #1D1D1D;
  }
  &::after {
    content: '${props => props.text}';
    font-size: 16px;
    display: block;
    position: absolute;
    top: 0;
    left: 5px;
    height: 30px;
  }
`

const WhyZKPass = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="whyZkPass">
      <Header>Why zkPass?</Header>
      <TextContainer>
        <ScrollOverpack>
          <QueueAnim delay={200} leaveReverse>
            <ItemContainer key="text1">
              <TextBanner text="Privacy-Preserving"></TextBanner>
              <Text>zkPass is a decentralized solution with Zero-Knowledge Proof(ZKP) and Multi-Party Computation(MPC) to ensure that user privacy is protected.The status of each participant is equal, and there is no participation of privileged third parties.</Text>
            </ItemContainer>
            <ItemContainer key="text2">
              <TextBanner text="Security"></TextBanner>
              <Text>The data input of each party in the secure multi-party calculation process is independent, and no local raw data is leaked during the calculation.</Text>
            </ItemContainer>
            <ItemContainer key="text3">
              <TextBanner text="Computability"></TextBanner>
              <Text>The results obtained by the secure multi-party computation algorithm are consistent with the local computation results of the original plaintext data.</Text>
            </ItemContainer>
            <ItemContainer key="text4">
              <TextBanner text="Customized Modules"></TextBanner>
              <Text>Multiple preset modules to meet your custom KYC needs.</Text>
            </ItemContainer>
            <ItemContainer key="text5">
              <TextBanner text="All-in-one Identity"></TextBanner>
              <Text>Users can generate an identity once and use it repeatedly, and their information is not disclosed to any third party throughout the multi-party interaction.</Text>
            </ItemContainer>
            <ItemContainer key="text6">
              <TextBanner text="Compatibility"></TextBanner>
              <Text>zkPass protocol has backward compatibility and is widely adapted to data source protocols, while the data source has no knowledge of the data destination.</Text>
            </ItemContainer>
          </QueueAnim>
        </ScrollOverpack>
      </TextContainer>
    </Container>
  </>
})

export default WhyZKPass