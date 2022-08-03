import styled from "styled-components"
import { forwardRef } from "react"

import Image from "next/image"
import line1 from "public/images/kyc/line1.png"
import line2 from "public/images/kyc/line2.png"
import line3 from "public/images/kyc/line3.png"

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('./images/kyc/banner.png');
  background-size: 65%;
  background-position:center 30%;
  background-repeat: no-repeat;
  background-color: #0F0F0F;
  ${({ theme }) => theme.md} {
    min-height: 100vh;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
    background-position:center 50px;
  }
`

const Header = styled.div`
  font-weight: bold;
  font-size: 100px;
  color: #FFFFFF;
  text-align: right;
  margin-bottom: 20px;
  ${({ theme }) => theme.md} {
    font-size: 60px;
  }
  ${({ theme }) => theme.sm} {
    font-size: 40px;
    text-align: center;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 17.5%;
  width: 65%;
  ${({ theme }) => theme.sm} {
    position: relative;
    margin: 0 auto;
    padding-top: 30%;
    top: 0;
    right: 0;
  }
`

const Text = styled.span`
  display: block;
  margin-bottom: 40px;
  padding: 4px;
  line-height: 1.5;
  text-align: left;
  font-size: 14px;
  font-family: Gothic720BT-LightB;
  color: #999999;
`

const ContentList = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 200px;
  grid-gap: 20px;
  ${({ theme }) => theme.md} {
    grid-template-columns: 1fr 150px 150px 150px;
  }
  ${({ theme }) => theme.sm} {
    grid-template-columns: 200px;
    justify-content: center;
  }
`

const KYCModal = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="kyc">
      <TextContainer>
        <Header>KYC Model</Header>
        <ContentList>
          <div>
          </div>
          <div>
            <Image src={line1} layout="responsive"></Image>
            <Text>The verifier communicates directly with the identity issuer to obtain the authentication result</Text>
          </div>
          <div>
            <Image src={line2} layout="responsive"></Image>
            <Text>The prover generates a proof of KYC Verification Passed and sends it to the verifier</Text>
          </div>
          <div>
            <Image src={line3} layout="responsive"></Image>
            <Text>The verifier  verifies the legitimacy of the proof and performs subsequent business logic processing based on the verification result</Text>
          </div>
        </ContentList>
      </TextContainer>
    </Container>
  </>
})

export default KYCModal