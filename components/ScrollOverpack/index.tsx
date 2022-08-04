import useMatchBreakpoints from "hooks/useMatchBreakpoints";
import { OverPack } from "rc-scroll-anim"
import { ReactNode } from "react";
import styled from "styled-components";

const MobileOverBack = styled.div``

const ScrollOverpack = (props: { children: ReactNode }) => {
  const { isMobile } = useMatchBreakpoints()

  return isMobile ? <MobileOverBack >{props.children}</MobileOverBack> : <OverPack >{props.children}</OverPack>
}

export default ScrollOverpack;