import * as React from 'react'
import { Layout, Icon, BackTop } from 'antd'

import CRouter from '@/commons/component/CRouter'
import MenuContext from './MenuContext'
import AnchorLayout from './AnchorLayout'

const { useState } = React
const { Content, Header, Sider } = Layout

export default ({ routes, location, history }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Header>
        <div className="phaser3-logo">
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          />{' '}
          Phaser3 笔记
        </div>
      </Header>
      <Layout>
        <Sider
          trigger={null}
          breakpoint="lg"
          width="256"
          collapsedWidth={0}
          collapsed={collapsed}
          onCollapse={collapsed => {
            setCollapsed(collapsed)
          }}
        >
          <MenuContext />
        </Sider>
        <Content className="phaser3-content markdown-body">
          <BackTop
            target={() =>
              window.document.querySelector('.phaser3-content') as HTMLElement
            }
          />
          <CRouter routes={routes} />
        </Content>
        <Sider collapsed={collapsed} collapsedWidth={0}>
          <AnchorLayout />
        </Sider>
      </Layout>
    </Layout>
  )
}
