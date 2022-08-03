import styled from "styled-components";
import { Colors } from "theme/constants"

export enum TextType {
  DEFAULT = "normal",
  ITALIC = "italic"
}

export const Text = styled.span<{ type?: TextType, size?: string, fontWeigh?: string, color?: string }>`
  display: inline-block;
  font-weight: ${p => p.fontWeigh || 'normal'};
  font-style: ${p => p.type || TextType.DEFAULT};
  font-size: ${p => p.size || 'inherit'};
  line-height: 1.5;
  transition: all .2s linear;
  &:hover {
    transform: scale(1.05); 
  }
`

export const LinearGradientText = styled(Text)`
  background: linear-gradient(to right, ${Colors.start}, ${Colors.end});
  -webkit-background-clip: text;
  color: transparent;
`