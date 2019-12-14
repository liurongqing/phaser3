import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import './app.css'
import './github-markdown.css'
import 'highlight.js/styles/github.css'

import { ConfigProvider } from 'antd'
import { StoreProvider } from '@/commons/Store'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Router from './router'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </ConfigProvider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
