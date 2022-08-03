import { ReactNode } from 'react'
import styled from "styled-components";
import { FontSize } from 'theme/constants';

export const Button = styled.button`
  display: inline-block;
  border: 0;
  text-align: center;
  padding: 5px 25px;
  min-width: 90px;
  height: 40px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  ${({ theme }) => theme.md} {
    height: 30px;
    font-size: ${FontSize.xm};
    min-width: 60px;
  }
`

export const PrimaryButton = styled(Button)`
  background: linear-gradient(93.3deg, #3B09B9 0%, #9F3FFF 100%);
  box-shadow: 0px 12px 24px rgba(149, 57, 248, 0.1);
  color: #FFFFFF;
`

const GhostsContainer = styled(Button)`
  position: relative;
  background: linear-gradient(93.3deg, #3B09B9 0%, #9F3FFF 100%);
  box-shadow: 0px 12px 24px rgba(149, 57, 248, 0.1);
  padding: 1px;
`
const GhostsContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: #090830;
`

export const GhostsButton = (props: { children: ReactNode, onClick?: () => void }) => (
  <GhostsContainer onClick={props.onClick}>
    <GhostsContent>
      {props.children}
    </GhostsContent>
  </GhostsContainer>
)

