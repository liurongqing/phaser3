import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CRouter from '@/commons/component/CRouter'

// 组件路由
import Layout from './layouts/BasicLayout'
import Home from './modules/Home'
import Actions from './modules/Actions'
import Animation from './modules/Animation'
import Audio from './modules/Audio'
import Cache from './modules/Cache'
import Camera from './modules/Camera'
import Components from './modules/Components'

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
    component: Actions
  },
  {
    id: 3,
    parentId: 0,
    text: 'Animation',
    path: '/animation',
    component: Animation
  },
  {
    id: 4,
    parentId: 0,
    text: 'Audio',
    path: '/audio',
    component: Audio
  },
  {
    id: 5,
    parentId: 0,
    text: 'Cache',
    path: '/cache',
    component: Cache
  },
  {
    id: 6,
    parentId: 0,
    text: 'Camera',
    path: '/camera',
    component: Camera
  },
  {
    id: 7,
    parentId: 0,
    text: 'Components',
    path: '/components',
    component: Components
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
      ...routesData.filter((v: any) => !v.hidden),
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
