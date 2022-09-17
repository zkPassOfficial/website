import styled from "styled-components"
import { forwardRef } from "react"
import QueueAnim from "rc-queue-anim"

const Container = styled.div``

const Text = styled.span`
  display: block;
  margin-bottom: 8px;
  padding: 4px;
  line-height: 1.5;
  text-align: left;
  font-size: 12px;
  font-family: Gothic720BT-LightB;
  color: #999999;
`
const Title = styled.div`
  width: 100%;
  margin: 0 auto 20px;
  font-size: 14px;
  color: #FFFFFF;
`

const ListContaner = styled.div`
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

const ItemContaienr = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-auto-flow: column;
`

const TimeLine = styled.div`
  position: relative;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    height: 3px;
    width: 100%;
    background: #FFFFFF;
  }
`

const Content = styled(QueueAnim)`
  display: flex;
  align-items: start;
  min-height: 360px;
  flex-direction: column;
  padding: 20px 10px;
  background: #19191A;
  box-sizeing: border-box;
`

const Roadmap = forwardRef((props, ref) => {
  return <>
    <Container>
      <ListContaner>
        <ItemContaienr>
          <TimeLine>2022</TimeLine>
          <Content type="bottom" duration={1000}>
            <Title key="title">Q1-Q2</Title>
            <Text key="text1">Technical Architecture Design.</Text>
            <Text key="text2">Set Up Dev Team and Dev Plan.</Text>
            <Text key="text3">Initial Marketing Promotion.</Text>
          </Content>
        </ItemContaienr>
        <ItemContaienr>
          <TimeLine>2022</TimeLine>
          <Content type="bottom" duration={1800} delay={200}>
            <Title key="title">Q3-Q4</Title>
            <Text key="text1">Build a Protocol Prototype for Multiple-parties Participating in the zkPass Product.</Text>
            <Text key="text2">Generate HMAC Key and Sign Message using 2PC.</Text>
            <Text key="text3">Developer Hackathons.</Text>
            <Text key="text4">Advanced Go-to-Market Strategies.</Text>
            <Text key="text5">Early Access to The Community.</Text>
            <Text key="text6">Seed Round Fundraising.</Text>
          </Content>
        </ItemContaienr>
        <ItemContaienr>
          <TimeLine>2023</TimeLine>
          <Content type="bottom" duration={1500} delay={400}>
            <Title key="title">Q1-Q2</Title>
            <Text key="text1">Building a Three-party TLS protocol.</Text>
            <Text key="text2">Building Zero-knowledge Proofs and Verifications.</Text>
            <Text key="text3">Extend 2PC to MPC and Add MPC Node.</Text>
            <Text key="text4">Global Partnership Development.</Text>
            <Text key="text5">Testnet NFTs Distribution campaign.</Text>
            <Text key="text6">Testnet Launch.</Text>
          </Content>
        </ItemContaienr>
        <ItemContaienr>
          <TimeLine>2023</TimeLine>
          <Content type="bottom" duration={1000} delay={600}>
            <Title key="title">Q3-Q4</Title>
            <Text key="text1">Enhance the zkPass Decentralized Network.</Text>
            <Text key="text2">zkPass Protocol Mainnet Launch.</Text>
            <Text key="text3">zkPass v1 Launch.</Text>
          </Content>
        </ItemContaienr>
      </ListContaner>
    </Container>
  </>
})

export default Roadmap