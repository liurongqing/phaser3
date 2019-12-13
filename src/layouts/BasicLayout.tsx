import * as React from 'react'
import { Layout, Anchor } from 'antd'

import CRouter from '@/commons/component/CRouter'
import { params } from '@/utils'

import MenuContext from './MenuContext'
import Header1 from './Header'
import Footer from './Footer'

const { useEffect, useState } = React
const { Content, Header, Sider } = Layout
const { Link } = Anchor

export default ({ routes, location, history }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Header>123123</Header>
      <Layout>
        <Sider
          trigger={null}
          breakpoint="lg"
          collapsible
          width="256"
          collapsed={collapsed}
          onCollapse={collapsed => {
            setCollapsed(collapsed)
          }}
        >
          <MenuContext />
        </Sider>
        <Content>
          <CRouter routes={routes} />
        </Content>
        <Sider>
          <Anchor style={{ height: 'calc(100vh - 64px)' }}>
            <Link href="#components-anchor-demo-basic" title="Basic demo" />
            <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link
              href="#components-anchor-demo-basic"
              title="Basic dBasicBasicBasicemo with Target"
              target="_blank"
            />
            <Link href="#API" title="API">
              <Link href="#Anchor-Props" title="Anchor Props" />
              <Link href="#Link-Props" title="Link Props" />
            </Link>
          </Anchor>
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
