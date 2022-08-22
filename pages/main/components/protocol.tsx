import styled from "styled-components"
import { forwardRef } from "react"
import ScrollOverpack from "components/ScrollOverpack"
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

import Image from "next/image"
import icon1 from "public/images/protocol/icon1.png"
import icon2 from "public/images/protocol/icon2.png"
import icon3 from "public/images/protocol/icon3.png"
import icon4 from "public/images/protocol/icon4.png"
import dot from "public/images/protocol/dot.png"

const Container = styled.div`
  position: relative;
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

const Header = styled(Texty)`
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    font-size: 30px;
  }
`
const SubHeader = styled(Texty)`
  width: 460px;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  font-family: Gothic720BT-LightB;
  margin: 20px auto;
  ${({ theme }) => theme.sm} {
    width: 300px;
  }
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
      <ScrollOverpack>
        <Header type="bottom">The zkPass Protocol</Header>
        <Dot>
          <Image src={dot} width={180} height={5} layout="fill" quality={100} />
        </Dot>
        <SubHeader type="bottom" delay={200} duration={400} split={()=>{
          return ['A', ' decentralized', ' KYC', ' solution', ' protocol', ' offers', ' secured,', ' easy,', ' convenient', ' KYC', ' authentication', ' for', ' the', ' crypto', ' economy.']
        }}> A decentralized KYC solution protocol offers secured, easy, convenient KYC authentication for the crypto economy.</SubHeader>
        <ContentList>
          <Content>
            <Icon>
              <Image src={icon1} layout="fill" quality={100}></Image>
            </Icon>
            <Title>Customer</Title>
            <Text>Web3 address owners who need to verify their identities and gain priority access to airdrop or initial sales </Text>
          </Content>
          <Content>
            <Icon>
              <Image src={icon2} layout="fill" quality={100}></Image>
            </Icon>
            <Title>Business</Title>
            <Text>Business user with KYC verification requirement, spend certain amount of $ZKPS to use ZKPass, bring income to zkPass ecosystem participants.</Text>
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
      </ScrollOverpack>
    </Container>
  </>
})

export default Protocol