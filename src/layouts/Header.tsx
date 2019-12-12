import * as React from 'react'
import { Layout, Icon } from 'antd'
import RightContent from './RightContent'

const { Header } = Layout

export default (props: any) => {
  const { collapsed, setCollapsed } = props

  return (
    <Header className="header-box">
      <Icon
        className="header-trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      />

      <RightContent />
    </Header>
  )
}
