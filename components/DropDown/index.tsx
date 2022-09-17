import { ReactNode } from 'react'
import styled from "styled-components";

const DropItemContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 150px;
  text-align: left;
  background-color: rgba(0,0,0,0.8);
  overflow: hidden;
  transition: all .3s ease;
  max-height: 0;
  opacity: 0;
`

export const DropItem = styled.div`
  position: relative;
  display: block;
  padding: 4px 0 4px 24px;
  margin: 5px 0;
  color: #FFFFFF;
  &::before{
    position: absolute;
    left: 12px;
    top: 12px;
    content: '';
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background:#FFFFFF;
  }
`

const Container = styled.div`
  position: relative;
  display: inline-block;
  max-height: 100px;
  transition: all 0.5s ease;
  :hover ${DropItemContainer}{
    max-height: 150px;
    opacity: 1;
  }
`

export const DropDown = (props: { children: ReactNode, text?: string }) => (
  <Container>
    {props.text}
    <DropItemContainer>
      {props.children}
    </DropItemContainer>
  </Container>
)

