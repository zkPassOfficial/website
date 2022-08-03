import Image from 'next/image'
import styled from 'styled-components'
import logo from 'public/images/logo.png'

const LogoContainer = styled.div`
  position: relative;
  width: 140px;
  margin-right: 16px;
`

const Logo = () => {
  return <LogoContainer>
    <Image src={logo}  width={213} height={46}></Image>
  </LogoContainer>
}
export default Logo;