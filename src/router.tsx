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
import NotFound from './pages/404'
import Forbidden from './pages/403'
import Login from './pages/login'

const pageRoutes = [
  {
    redirect: true,
    from: '/',
    to: '/dashboard'
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
      { path: '/system/admin', component: SystemAdmin },
      { path: '/system/role', component: SystemRole },
      { path: '/system/menu', component: SystemMenu },
      { path: '/system/permissions', component: SystemPermissions },
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
    <Router basename="/phaser3">
      <CRouter routes={routes} />
    </Router>
  )
}
