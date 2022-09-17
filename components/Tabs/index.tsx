import { ReactNode, Children, cloneElement } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from "styled-components"

interface TabsProps {
  defaultTab?: string | number;
  children?: ReactNode
}

const TabsContainer = styled.div<{ tab?: string | number }>``

const TabHeader = styled.div`
  display: block;
  ${({ theme }) => theme.md} {
    display: flex;
    justify-content: center;
  }
`
const Tab = styled.div<{ active: boolean }>`
  display: inline-block;
  margin-right: 18px;
  padding-bottom: 5px;
  cursor: pointer;
  color: ${(p) => p.active ? '#FFFFFF' : '#999999'};
  border-bottom: ${(p) => p.active ? '2px solid #FFFFFF' : 'none'};
`
const TabPaneContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
`

const TabPane = styled.div<{ tab: string | number }>`
  width: 100%;
  display: none;
`

const Tabs = ({ defaultTab, children }: TabsProps) => {

  const tabs = Children.toArray(children)?.map(child => {
    return child.props.tab
  })

  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const tabPanes = Children.map(children, (child) => {
    if (!child) {
      return child
    }

    if (child.props.tab === activeTab) {
      return cloneElement(child, { style: { display: 'block' } })
    } else {
      return cloneElement(child, { style: { display: 'none' } })
    }
  })

  useEffect(() => {
    console.log('defaultTab', defaultTab)
    setActiveTab(defaultTab)
  }, [defaultTab])

  return <TabsContainer>
    <TabHeader>
      {tabs.map((tab, index) => {
        return <Tab key={index} active={activeTab == tab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
      })}
    </TabHeader>
    <TabPaneContainer>
      {tabPanes}
    </TabPaneContainer>
  </TabsContainer>
}

Tabs.TabPane = TabPane;

export default Tabs;