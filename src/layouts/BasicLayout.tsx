import * as React from 'react'
import { Layout } from 'antd'

import CRouter from '@/commons/component/CRouter'

import MenuContext from './MenuContext'
import Header from './Header'
import Footer from './Footer'

const { useState } = React
const { Content } = Layout

export default ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <MenuContext collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ marginLeft: collapsed ? 80 : 256, minHeight: '100vh' }}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="basic-layout-content">
          <CRouter routes={routes} />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
