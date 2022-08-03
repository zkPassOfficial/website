import { ReactNode, CSSProperties } from 'react'
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const MaskLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 12px;
    background: #FFFFFF;
    width: 25px;
    height: 2px;
    border-radius: 5px;
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const ContentContainer = styled.div`
  position: relative;
  background-color: #000000;
`

const Modal = (props: { children: ReactNode, closeable?: boolean, close?: () => void, style?: CSSProperties }) => {
  const { children, closeable, close, style={width: '600px', height: '399px'} } = props

  return < Container >
    <MaskLayer onClick={closeable ? close : () => { }}></MaskLayer>
    <ContentContainer style={style}>
      {closeable && <CloseIcon onClick={close}></CloseIcon>}
      {children}
    </ContentContainer>
  </Container >
}

export default Modal
