import styled from "styled-components"
import { forwardRef, useState, useEffect } from "react"
import Image from "next/image"
import QueueAnim from "rc-queue-anim"

import token from 'public/images/resources/token.png'


const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  ${({ theme }) => theme.md} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  padding: 32px;
  ${({ theme }) => theme.md} {
    width: 300px;
  }
`

const Title = styled.div`
  font-size: 35px;
  color: #FFFFFF;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    text-align: center;
    font-size: 25px;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 150px 100px 1fr;
  align-items: center;
  border-top: 1px solid #FFFFFF6F;
  padding: 4px 16px;
  color: #FFFFFF;
  &:last-child {
    border-bottom: 1px solid #FFFFFF6F;
  }
  ${({ theme }) => theme.md} {
    grid-template-columns: 80px 75px 1fr;
    grid-gap: 8px;
  }
`

const TableCell = styled.div`
  font-family: 'Gothic720BT-LightB';
  font-size: 12px;
  ${({ theme }) => theme.md} {
    font-size: 10px;
  }
`

const Tokenomic = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)

  const tokenInfo = [
    ['Allocation', 'Percentage', 'Vesting Schedule'],
    ['Initial Investors', '28%', 'TGE 3-month cliff,then 1 year Vesting with Daily Unlock'],
    ['Early Incentive', '25%', '5 years vesting in 30%,25%,20%,15%,10% per year.'],
    ['Liquidity Pool', '15%', '9 years linear vesting.'],
    ['Team Members & Advisors ', '10%', '1 year cliff and 2 years linear vesting.'],
    ['Community Reserve Fund', '10%', '4 years linear vesting.'],
    ['zkPass Foundation', '12%', '4 years linear vesting.']
  ]

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])

  return <>
    <Container>
      <ImageContainer>
        <Image src={token} alt="Token" width={100} height={100} layout="responsive" objectFit="contain" />
      </ImageContainer>
      <div style={{ minHeight: '240px' }}>
        <Title>Vesting Plan</Title>
        <QueueAnim type="right" interval={200} delay={300}>
          {show && tokenInfo.map((item, index) => {
            return <TableRow key={`row-${index}`}>
              <TableCell>{item[0]}</TableCell>
              <TableCell>{item[1]}</TableCell>
              <TableCell>{item[2]}</TableCell>
            </TableRow>
          })}
        </QueueAnim>
      </div>
    </Container>
  </>
})

export default Tokenomic;