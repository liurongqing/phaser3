import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CRouter from '@/commons/component/CRouter'

// 组件路由
import Layout from './layouts/BasicLayout'
import Home from './modules/Home'
import Actions from './modules/Actions/Actions'
import Animation from './modules/Animation/Animation'

/**
 * 以下为单页路由
 */
import pageMap from './pages/Map'
import NotFound from './pages/404'

export const routesData = [
  {
    id: 1,
    parentId: 0,
    text: 'Home',
    path: '/home',
    component: Home
  },
  {
    id: 2,
    parentId: 0,
    text: 'Actions',
    path: '/actions',
    hidden: true
  },
  {
    id: 3,
    parentId: 2,
    text: 'Actions Actions',
    path: '/actions/actions',
    component: Actions
  },
  {
    id: 4,
    parentId: 0,
    text: 'Animation',
    path: '/animation',
    hidden: true
  },
  {
    id: 5,
    parentId: 4,
    text: 'Animation',
    path: '/animation/animation',
    component: Animation
  }
]

const routes = [
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
    path: '/',
    exact: false,
    component: Layout,
    routes: [
      ...routesData.filter(v => !v.hidden),
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
