import { useRef, useState } from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player'

import Image from "next/image"
import Link from "next/link"


import useMatchBreakpoints from "hooks/useMatchBreakpoints"

import Dot from "components/Dot"
import SocialMedia from "components/SocialMedia"
import { DropDown, DropItem } from "components/DropDown"
import Logo from "../Logo"
import { Text } from "../Text"
import Modal from "../Modal"
import comingsoon from "public/images/comingsoon.jpg"

const Position = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all .3s ease-in-out;
  padding: 40px 100px;
  ${({ theme }) => theme.lg} {
    padding: 40px;
  }
  ${({ theme }) => theme.md} {
    font-size: 14px;
  }
`

const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 180px 1fr 200px;
  align-items: center;
  justify-content: start;
  ${({ theme }) => theme.md} {
    margin: 0 auto;
  }
`

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
`

const MenuItem = styled.a<{ active?: boolean }>`
  display: inline-block;
  height: 100%;
  padding: 0 8px;
  margin: 0 8px;
  text-align: center;
  color: ${(p) => p.active ? '#FFFFFF' : '#999999'};
  cursor: pointer;
  font-size: 14px;
  ${({ theme }) => theme.md} {
    display: flex;
    background: #00000089;
    border-bottom: 1px solid #ffffff30;
    height: 40px;
    text-align: left;
    align-items: center;
  }
  &:hover {
    color: #FFFFFF;
  }
`

const MobileNavigation = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 160px 1fr 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; 
  background: #00000089;
  z-index: 999;
  transition: all .3s ease-in-out;
`

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
`

const MobileMenuIcon = styled.div`
  position: relative;
  width: 35px;
  height: 4px;
  border-radius: 5px;
  background: #FFFFFF;
  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -10px;
    background: #FFFFFF;
    width: 35px;
    height: 4px;
    border-radius: 5px;
  }
  &::after {
    top: 10px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
`

const LaunchApp = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  font-size: 14px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
`

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  color: #FFFFFF;
  padding-top: 20px;
`

const ContactItem = styled.div`
  display: block;
  padding: 10px;
  font-size: 14px;
`

const RemindingText = styled.div`
  font-family: 'Gothic720BT-LightB';
  font-size: 12px;
`

const CustomerLink = styled.a`
`

interface MenuItem {
  id: string;
  content: string;
}

interface NavigationProps {
  indexPage: number
}

const Navigation = ({ indexPage }: NavigationProps) => {

  const navBar = useRef(0)
  const mobileBar = useRef(1)

  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)

  const { isMobile } = useMatchBreakpoints()

  const ids = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'zkPass',
    label: 'ZKPASS'
  }, {
    key: 'kyc',
    label: 'KYC Model'
  }, {
    key: 'architecture',
    label: 'Architecture'
  }, {
    key: 'protocol',
    label: 'Protocol'
  }, {
    key: 'whyzkpass',
    label: 'Why ZkPass'
  }, {
    key: 'roadmap',
    label: 'Resourses'
  }]

  const handleClick = (type?: string) => {
    if (type === 'open') {
      mobileBar.current.style.maxHeight = "500px"
    } else {
      mobileBar.current.style.maxHeight = "0"
    }
  }

  const getContactList = () => {
    return <ContactContainer>
      <ContactItem>Email: info@zkpass.org</ContactItem>
      <ContactItem>Telegram: @zkPass</ContactItem>
      <ContactItem>Discord ID: Tinley#0908</ContactItem>
      <ContactItem>
        <RemindingText>
          Please do not hesitate to contact us for any collaboration and business requirements.
        </RemindingText>
      </ContactItem>
    </ContactContainer>
  }


  if (isMobile) {
    return <>
      <MobileNavigation ref={navBar}>
        <Logo />
        <div></div>
        <MobileMenuIcon onClick={() => handleClick('open')} />
        <MobileMenuContainer ref={mobileBar} onClick={() => handleClick()}>
          <MenuItem >
            <Link href="/home" scroll={false}> HOME </Link>
          </MenuItem>
          <MenuItem onClick={() => { handleClick(); setIsOpen(true) }}  >
            <Text dangerouslySetInnerHTML={{ __html: 'GET STARTED' }}></Text>
          </MenuItem>
          <MenuItem>
            <CustomerLink href="https://docsend.com/view/x8aeie95qugdgpxn" target="_blank">TECH WHITEPAPER</CustomerLink>
          </MenuItem>
          <MenuItem>
            <CustomerLink href="https://docsend.com/view/ythgh83fq5dqpffq" target="_blank">TECH ONE PAGE</CustomerLink>
          </MenuItem>
          <MenuItem>
            <CustomerLink href="https://docsend.com/view/s/ebnbkz6i77bz37ka" target="_blank">DATA ROOM</CustomerLink>
          </MenuItem>
          <MenuItem>
            <Link href="/roadmap" scroll={false}> ROADMAP </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/tokenomic" scroll={false}> TOKENOMIC </Link>
          </MenuItem>
          <MenuItem>
            <CustomerLink href=" https://github.com/zkPassOfficial/Meet-the-team" target="_blank">TEAM</CustomerLink>
          </MenuItem>
          <MenuItem onClick={() => { handleClick(); setIsContactOpen(true) }} >
            <Text dangerouslySetInnerHTML={{ __html: 'CONTACT' }}></Text>
          </MenuItem>
          <MenuItem onClick={() => { handleClick(); setIsOpen(true) }}  >
            <Text dangerouslySetInnerHTML={{ __html: 'LAUNCH APP' }}></Text>
          </MenuItem>
        </MobileMenuContainer>
      </MobileNavigation>
      {
        isOpen && <Modal closeable close={() => setIsOpen(false)} style={{ width: '300px', height: "200px" }}>
          <Image src={comingsoon} layout="responsive"></Image>
        </Modal>
      }
      {
        isContactOpen && <Modal closeable close={() => setIsContactOpen(false)} style={{ width: '300px', height: "200px" }}>
          {getContactList()}
        </Modal>
      }
    </>
  }

  return <>
    <Position>
      <Box>
        <Logo />
        <MenuContainer>
          <MenuItem active={indexPage === 0} >
            <Link href="/home" scroll={false}> HOME </Link>
          </MenuItem>
          <MenuItem onClick={() => setIsOpen(true)} >
            <Text dangerouslySetInnerHTML={{ __html: 'GET STARTED' }}></Text>
          </MenuItem>
          <MenuItem active={indexPage === 6} >
            <DropDown text="RESOURSES">
              <DropItem><CustomerLink href="https://docsend.com/view/x8aeie95qugdgpxn" target="_blank">Tech WhitePaper</CustomerLink></DropItem>
              <DropItem><CustomerLink href="https://docsend.com/view/ythgh83fq5dqpffq" target="_blank">Tech One Page</CustomerLink></DropItem>
              <DropItem><CustomerLink href="https://docsend.com/view/s/ebnbkz6i77bz37ka" target="_blank">Data Room</CustomerLink></DropItem>
              <DropItem>
                <Link href="/roadmap" scroll={false}>Roadmap</Link>
              </DropItem>
              <DropItem>
                <Link href="/tokenomic" scroll={false}>
                  Tokenomic
                </Link>
              </DropItem>
            </DropDown>
          </MenuItem>
          <MenuItem >
            <CustomerLink href="https://github.com/zkPassOfficial/Meet-the-team" target="_blank">TEAM</CustomerLink>
          </MenuItem>
          <MenuItem onClick={() => setIsContactOpen(true)} >
            CONTACT
          </MenuItem>
        </MenuContainer>
        <ButtonContainer>
        <CustomerLink href="https://demovideo.zkpass.org" target="_blank"><LaunchApp>{'LAUNCH DEMO >>'}</LaunchApp></CustomerLink>
        </ButtonContainer>
      </Box>
    </Position>
    <Dot ids={ids} current={indexPage}></Dot>
    <SocialMedia></SocialMedia>
    {
      isContactOpen && <Modal closeable close={() => setIsContactOpen(false)}>
        {getContactList()}
      </Modal>
    }
    {
      isOpen && <Modal closeable close={() => setIsOpen(false)}>
        <Image src={comingsoon} layout="responsive"></Image>
      </Modal>
    }
    {
      playVideo && <Modal closeable close={() => setPlayVideo(false)}>
        <ReactPlayer url={require("public/files/demo.mp4")} playing/>
      </Modal>
    }
  </>
}

export default Navigation;