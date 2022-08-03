import styled from "styled-components"
import { forwardRef } from "react"

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
  font-size: 40px;
  color: #FFFFFF;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    text-align: center;
  }
`
const SubHeader = styled.div`
  width: 100%;
  font-size: 20px;
  color: #FFFFFF;
  margin: 20px auto;
  ${({ theme }) => theme.sm} {
    text-align: center;
  }
`

const TextContainer = styled.div`
`

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

const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 20px 10px;
  background: #19191A;
  box-sizeing: border-box;
`

const Resources = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="resourses">
      <TextContainer>
        <Header>Resources</Header>
        <SubHeader>Roadmap</SubHeader>
        <ListContaner>
          <ItemContaienr>
            <TimeLine>2022</TimeLine>
            <Content>
              <Title>Q1-Q2</Title>
              <Text>Technical Architecture Design.</Text>
              <Text>Set Up Dev Team and Dev Plan.</Text>
              <Text>Initial Marketing Promotion.</Text>
            </Content>
          </ItemContaienr>
          <ItemContaienr>
            <TimeLine>2022</TimeLine>
            <Content>
              <Title>Q3-Q4</Title>
              <Text>Build a Protocol Prototype for Multiple-parties Participating in the zkPass Product.</Text>
              <Text>Generate HMAC Key and Sign Message using 2PC.</Text>
              <Text>Developer Hackathons.</Text>
              <Text>Advanced Go-to-Market Strategies.</Text>
              <Text>Early Access to The Community.</Text>
              <Text>Seed Round Fundraising.</Text>
            </Content>
          </ItemContaienr>
          <ItemContaienr>
            <TimeLine>2023</TimeLine>
            <Content>
              <Title>Q1-Q2</Title>
              <Text>Building a Three-party TLS protocol.</Text>
              <Text>Building Zero-knowledge Proofs and Verifications.</Text>
              <Text>Extend 2PC to MPC and Add MPC Node.</Text>
              <Text>Global Partnership Development.</Text>
              <Text>Testnet NFTs Distribution campaign.</Text>
            </Content>
          </ItemContaienr>
          <ItemContaienr>
            <TimeLine>2023</TimeLine>
            <Content>
              <Title>Q3-Q4</Title>
              <Text>Enhance the zkPass Decentralized Network.</Text>
              <Text>{'UIUX Design & Product Experience and Testnet Launch.'}</Text>
              <Text>zkPass Protocol Mainnet Launch.</Text>
              <Text>zkPass v1 Launch.</Text>
            </Content>
          </ItemContaienr>
        </ListContaner>
      </TextContainer>
    </Container>
  </>
})

export default Resources