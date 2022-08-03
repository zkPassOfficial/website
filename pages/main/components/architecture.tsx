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
  background-image: url('./images/architecture/banner1.png'), url('./images/architecture/banner2.png');
  background-size: auto 60%, auto 60%;
  background-position: 40% center, 80% center;
  background-repeat: no-repeat, no-repeat;
  background-color: #0F0F0F;
  ${({ theme }) => theme.md} {
    height: auto;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
  }
`

const Header = styled.div`
  font-size: 50px;
  color: #FFFFFF;
  text-align: right;
`

const TextContainer = styled.div`
  position: absolute;
  top: 70%;
  right: 17.5%;
  width: 65%;
`

const Architecture = forwardRef((props, ref) => {
  return <>
    <Container ref={ref} id="architecture">
      <TextContainer>
        <Header>The Overall</Header>
        <Header>System Architecture</Header>
      </TextContainer>
    </Container>
  </>
})

export default Architecture