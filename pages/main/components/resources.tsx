import styled from "styled-components"
import { forwardRef, RefObject, useEffect, useState } from "react"
import ScrollOverpack from "components/ScrollOverpack"

import Roadmap from "./roadmap"
import Tokenomic from "./tokenomic"

import Tabs from "components/Tabs"

const { TabPane } = Tabs

const Container = styled.div<{ ref?: RefObject<string> }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 860px;
  margin: 0 auto;
  background-color: #0F0F0F;
  padding-top: 150px;
  ${({ theme }) => theme.md} {
    height: auto;
  }
  ${({ theme }) => theme.sm} {
    position: relative;
  }
`

const Header = styled.div`
  font-size: 40px;
  color: #FFFFFF;
  margin-bottom: 20px;
  ${({ theme }) => theme.sm} {
    text-align: center;
  }
`

const Resources = forwardRef((props: { defaultTab: string }, ref) => {
  const [defaultTab, setActiveTab] = useState(props.defaultTab);
  console.log('defaultTab', props.defaultTab)
  
  useEffect(() => {
    console.log('defaultTab', props.defaultTab)
    setActiveTab(props.defaultTab)
  }, [props.defaultTab])

  return <>
    <Container ref={ref} id="resources">
      <ScrollOverpack appear={false}>
        <Header>Resources</Header>
        <Tabs defaultTab={props.defaultTab}>
          <TabPane tab="Roadmap">
            <Roadmap />
          </TabPane>
          <TabPane tab="Tokenomic">
            <Tokenomic />
          </TabPane>
        </Tabs>
      </ScrollOverpack>
    </Container>
  </>
})

export default Resources