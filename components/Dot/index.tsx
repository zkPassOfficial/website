import styled from "styled-components"
import { CSSProperties } from "react"
import Link from "next/link"


const DotContainer = styled.div`
  position: fixed;
  left: 100px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  ${({ theme }) => theme.md} {
    display: none;
  }
`

const DefaultDot = styled.a`
  position: relative;
  display: inline-block;
  margin: 8px auto;
  width: 125px;
  height: 15px;
  font-size: 12px;
  font-family: 'Gothic720BT-LightB';
  transition: all .3s ease-in-out;
  color: #99999900;
  &::before{
    content: "";
    position: absolute;
    top: 2px;
    left: -14px;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFFFFF;
  }
  :hover {
    color: #999999;
    &::before{
      width: 10px;
      height: 10px;
      left: -16px;
    }
  }
`
const ActiveDot = styled(DefaultDot)`
  color: #999999;
  &::before{
    width: 10px;
    height: 10px;
    left: -16px;
  }
`

export default function Dot(props: { style?: CSSProperties, ids?: Array<{ key: string, label: string }>, current?: number }) {
  const { style, ids = [], current } = props
  return <DotContainer style={style}>
    {ids?.map((item, index) => {
      if (index === current) {
        return <ActiveDot key={index} >{item.label}</ActiveDot>
      }
      return <Link href={item.key} scroll={false}>
        <DefaultDot key={index}>
          {item.label}
        </DefaultDot>
      </Link>

    })}
  </DotContainer>
}