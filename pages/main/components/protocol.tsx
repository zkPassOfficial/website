import styled from "styled-components"
import { forwardRef } from "react"

import Image from "next/image"
import icon1 from "public/images/protocol/icon1.png"
import icon2 from "public/images/protocol/icon2.png"
import icon3 from "public/images/protocol/icon3.png"
import icon4 from "public/images/protocol/icon4.png"
import dot from "public/images/protocol/dot.png"

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #0F0F0F;
  ${({ theme }) => theme.md} {
    height: auto;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
  }
`

const Header = styled.div`
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    font-size: 30px;
  }
`
const SubHeader = styled.div`
  width: 60%;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  font-family: Gothic720BT-LightB;
  margin: 20px auto;
`

const TextContainer = styled.div`
`

const Text = styled.span`
  display: block;
  margin-bottom: 40px;
  padding: 4px;
  line-height: 1.5;
  text-align: left;
  font-size: 12px;
  font-family: Gothic720BT-LightB;
  color: #999999;
`
const Title = styled.div`
  margin: 20px auto;
  font-size: 14px;
  color: #FFFFFF;
`

const ContentList = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 20px;
  margin-top: 50px;
  ${({ theme }) => theme.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 20px;
  }
  ${({ theme }) => theme.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.sm} {
    grid-template-columns: 1fr;
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  background: #19191A;
  box-sizeing: border-box;
`
const Icon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`

const Dot = styled.div`
  margin: 20px auto;
  position: relative;
  width: 100px;
  height: 3px;
`

const Protocol = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="protocol">
      <TextContainer>
        <Header>The zkPass Protocol</Header>
        <Dot>
          <Image src={dot} width={180} height={5} layout="fill" quality={100} />
        </Dot>
        <SubHeader>A decentralized KYC solution protocol offers a secure,easy, convenient KYC authentication for the crypto economy.</SubHeader>
        <ContentList>
          <Content>
            <Icon>
              <Image src={icon1} layout="fill" quality={100}></Image>
            </Icon>
            <Title>Customer</Title>
            <Text>Web3 address owners who need to verify their identity to have priority to gain airdrop or Initial sales</Text>
          </Content>
          <Content>
            <Icon>
              <Image src={icon2} layout="fill" quality={100}></Image>
            </Icon>
            <Title>Entrepreneurs</Title>
            <Text>Entrepreneurs with KYC verification requirement, spend certain amount of to use ZKPass, bring income to zkPass platform</Text>
          </Content>
          <Content>
            <Icon>
              <Image src={icon3} layout="fill" quality={100}></Image>
            </Icon>
            <Title>zkPass Node</Title>
            <Text>Nodes that perform Multi-party Computation can earn protocol revenue by contributing verified computing power</Text>
          </Content>
          <Content>
            <Icon>
              <Image src={icon4} layout="fill" quality={100}></Image>
            </Icon>
            <Title>Developer</Title>
            <Text>Module and circuit development contributors, who are able to receive reward from protocol</Text>
          </Content>
        </ContentList>
      </TextContainer>
    </Container>
  </>
})

export default Protocol