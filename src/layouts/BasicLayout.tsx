import * as React from 'react'
import { Layout } from 'antd'

import CRouter from '@/commons/component/CRouter'
import MenuContext from './MenuContext'
import AnchorLayout from './AnchorLayout'

const { useState } = React
const { Content, Header, Sider } = Layout

export default ({ routes, location, history }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      {/* <Header>123123</Header> */}
      <Layout>
        <Sider
          trigger={null}
          breakpoint="lg"
          width="256"
          collapsed={collapsed}
          onCollapse={collapsed => {
            setCollapsed(collapsed)
          }}
        >
          <MenuContext />
        </Sider>
        <Content className="phaser3-content">
          <CRouter routes={routes} />
        </Content>
        <Sider collapsed={collapsed}>
          <AnchorLayout />
        </Sider>
      </Layout>

      {/* <Layout style={{ marginLeft: collapsed ? 80 : 256, minHeight: '100vh' }}>
        <Header1 collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="basic-layout-content">
          <CRouter routes={routes} />
        </Content>
        <Footer />
      </Layout> */}
    </Layout>
  )
}
