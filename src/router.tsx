import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CRouter from '@/commons/component/CRouter'

// 组件路由
import Layout from './layouts/BasicLayout'

import Dashboard from './modules/Dashboard'
import SystemAdmin from './modules/System/Admin'
import SystemMenu from './modules/System/Menu/index'
import SystemRole from './modules/System/Role/index'
import SystemPermissions from './modules/System/Permissions/index'

/**
 * 以下为单页路由
 */
import pageMap from './pages/Map'
import NotFound from './pages/404'
import Forbidden from './pages/403'
import Login from './pages/login'

const pageRoutes = [
  {
    path: '/',
    exact: true,
    component: pageMap
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/403',
    exact: true,
    component: Forbidden,
    routes: []
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    routes: []
  }
]

const routes = [
  ...pageRoutes,
  {
    path: '/',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard
      },
      { path: '/system/admin', exact: true, component: SystemAdmin },
      { path: '/system/role', exact: true, component: SystemRole },
      { path: '/system/menu', exact: true, component: SystemMenu },
      {
        path: '/system/permissions',
        exact: true,
        component: SystemPermissions
      },
      {
        redirect: true,
        from: '*',
        to: '/404'
      }
    ]
  }
]

export default () => {
  return (
    <Router basename={WEBPACK_PRODUCTION ? '/phaser3' : '/'}>
      <CRouter routes={routes} />
    </Router>
  )
}
