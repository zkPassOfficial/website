import styled from "styled-components"
import Image from "next/image"
import { CSSProperties } from "react"

import github from "public/images/github.png"
import medium from "public/images/medium.png"
import twitter from "public/images/twitter.png"


const SocialMediaContainer = styled.div`
  position: fixed;
  right: 100px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  ${({ theme }) => theme.sm} {
    position: sticky;
    left: 0;
    bottom: 130px;
    display: block;
    text-align: center;
  }
`

const SocialIcon = styled.a`
  position: relative;
  display: inline-block;
  margin: 18px auto;
  width: 25px;
  height: 25px;
  ${({ theme }) => theme.sm} {
    margin: 18px 20px;
    width: 20px;
    height: 20px;
  }
`

export default function SocialMedia(style?: CSSProperties) {
  return <SocialMediaContainer style={style}>
    <SocialIcon href="https://medium.com/zkpass" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={medium} />
    </SocialIcon>
    <SocialIcon href="https://twitter.com/zkPass" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={twitter} />
    </SocialIcon>
    <SocialIcon href="https://github.com/zkPassOfficial" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={github} />
    </SocialIcon>
  </SocialMediaContainer>
}