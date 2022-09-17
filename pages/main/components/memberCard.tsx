import styled from "styled-components"
import Image, { StaticImageData } from "next/image"

interface MemberProps {
  avatar: StaticImageData
  name: string
  role: string
  introduction: string
  index?: number
}

const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px 1fr;
  grid-gap: 32px;
  padding: 16px;
  margin: 32px;
  border-radius: 8px;
  background: #202020;
`

const Avatar = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 6px 6px 12px #000000;
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const Name = styled.span`
  display: inline-block;
  padding: 8px 4px 8px 0;
  color: #FFFFFF;
  font-weight: bold;
`

const Role = styled.span`
  display: inline-block;
  padding: 8px 0 8px 4px;
  color: #979797;
  font-family: Gothic720BT-LightB;
`

const Introduction = styled.div`
  color: #979797;
  font-family: Gothic720BT-LightB;
  font-size: 14px;
`

const MemberCard = ({ avatar, name, role, introduction }: MemberProps) => {
  return <CardContainer>
    <Avatar>
      <Image src={avatar} alt={name} layout="fill" objectFit="contain" />
    </Avatar>
    <div>
      <Row>
        <Name>{name}</Name>
        <Role>{`/ ${role}`}</Role>
      </Row>
      <Introduction>
        {introduction}
      </Introduction>
    </div>
  </CardContainer>
}

export default MemberCard