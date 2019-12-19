import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CRouter from '@/commons/component/CRouter'

/**
 * 以下为单页路由
 */
import pageMap from './pages/Map'
import NotFound from './pages/404'

// 组件路由
import Layout from './layouts/BasicLayout'
import Home from './modules/Home'
import Actions from './modules/Actions'
import Animation from './modules/Animation'
import Audio from './modules/Audio'
import Cache from './modules/Cache'
import Camera from './modules/Camera'
import ComponentsData from './modules/Components/Data/index'
import DepthSorting from './modules/DepthSorting'
import Display from './modules/Display'
import Events from './modules/Events'
import GameConfig from './modules/GameConfig'
import GameObjects from './modules/GameObjects'
import GeomCircle from './modules/Geom/Circle'
import GeomEllipse from './modules/Geom/Ellipse'
import GeomIntersects from './modules/Geom/Intersects'
import GeomLine from './modules/Geom/Line'
import GeomPointer from './modules/Geom/Pointer'
import GeomPolygon from './modules/Geom/Polygon'
import GeomRectangle from './modules/Geom/Rectangle'
import GeomTriangle from './modules/Geom/Triangle'
import Input from './modules/Input'
import LoaderWebfont from './modules/Loader/Webfont'
// import Loader from './modules/Loader'
import Path from './modules/Path'
import Physics from './modules/Physics'
import Plugins from './modules/Plugins'
import Pools from './modules/Pools'
import Scalemanager from './modules/Scalemanager'
import Scenes from './modules/Scenes'
import Snapshot from './modules/Snapshot'
import Spine from './modules/Spine'
import Textures from './modules/Textures'
import Time from './modules/Time'
import Timestep from './modules/Timestep'
import Transform from './modules/Transform'
import Tweens from './modules/Tweens'
import Utils from './modules/Utils'
import ConstProperty from './modules/Const/Property'
import ConstStaticMethod from './modules/Const/StaticMethod'

export const routesData = [
  {
    id: 10,
    parentId: 0,
    text: 'Home',
    path: '/home',
    icon: 'home',
    component: Home
  },
  {
    id: 20,
    parentId: 0,
    text: 'Actions',
    path: '/actions',
    component: Actions
  },
  {
    id: 30,
    parentId: 0,
    text: 'Animation',
    path: '/animation',
    component: Animation
  },
  {
    id: 40,
    parentId: 0,
    text: 'Audio',
    path: '/audio',
    component: Audio
  },
  {
    id: 50,
    parentId: 0,
    text: 'Cache',
    path: '/cache',
    component: Cache
  },
  {
    id: 60,
    parentId: 0,
    text: 'Camera',
    path: '/camera',
    component: Camera
  },
  {
    id: 70,
    parentId: 0,
    text: 'Components',
    exact: true,
    path: '/components'
  },
  {
    id: 71,
    parentId: 70,
    text: 'Data',
    path: '/components/data',
    component: ComponentsData
  },
  {
    id: 80,
    parentId: 0,
    text: 'DepthSorting',
    path: '/depthsorting',
    component: DepthSorting
  },
  {
    id: 90,
    parentId: 0,
    text: 'Display',
    path: '/display',
    component: Display
  },
  {
    id: 100,
    parentId: 0,
    text: 'Events',
    path: '/events',
    component: Events
  },
  {
    id: 110,
    parentId: 0,
    text: 'GameConfig',
    path: '/gameconfig',
    component: GameConfig
  },
  {
    id: 120,
    parentId: 0,
    text: 'GameObjects',
    path: '/gameobjects',
    component: GameObjects
  },
  {
    id: 130,
    parentId: 0,
    text: 'Geom',
    exact: true,
    path: '/geom'
  },
  {
    id: 131,
    parentId: 130,
    text: 'Circle',
    path: '/geom/circle',
    component: GeomCircle
  },
  {
    id: 132,
    parentId: 130,
    text: 'Ellipse',
    path: '/geom/ellipse',
    component: GeomEllipse
  },
  {
    id: 133,
    parentId: 130,
    text: 'Intersects',
    path: '/geom/intersects',
    component: GeomIntersects
  },
  {
    id: 134,
    parentId: 130,
    text: 'Line',
    path: '/geom/line',
    component: GeomLine
  },
  {
    id: 135,
    parentId: 130,
    text: 'Point',
    path: '/geom/point',
    component: GeomPointer
  },
  {
    id: 136,
    parentId: 130,
    text: 'Polygon',
    path: '/geom/polygon',
    component: GeomPolygon
  },
  {
    id: 137,
    parentId: 130,
    text: 'Rectangle',
    path: '/geom/rectangle',
    component: GeomRectangle
  },
  {
    id: 138,
    parentId: 130,
    text: 'Triangle',
    path: '/geom/triangle',
    component: GeomTriangle
  },
  {
    id: 140,
    parentId: 0,
    text: 'Input',
    path: '/input',
    component: Input
  },
  {
    id: 150,
    parentId: 0,
    text: 'Loader',
    exact: true,
    path: '/loader'
  },
  {
    id: 151,
    parentId: 150,
    text: 'Webfont',
    path: '/loader/webfont',
    component: LoaderWebfont
  },
  {
    id: 160,
    parentId: 0,
    text: 'Path',
    path: '/path',
    component: Path
  },
  {
    id: 170,
    parentId: 0,
    text: 'Physics',
    path: '/physics',
    component: Physics
  },
  {
    id: 180,
    parentId: 0,
    text: 'Plugins',
    path: '/plugins',
    component: Plugins
  },
  {
    id: 190,
    parentId: 0,
    text: 'Pools',
    path: '/pools',
    component: Pools
  },
  {
    id: 200,
    parentId: 0,
    text: 'Scalemanager',
    path: '/scalemanager',
    component: Scalemanager
  },
  {
    id: 210,
    parentId: 0,
    text: 'Scenes',
    path: '/scenes',
    component: Scenes
  },
  {
    id: 220,
    parentId: 0,
    text: 'Snapshot',
    path: '/snapshot',
    component: Snapshot
  },
  {
    id: 230,
    parentId: 0,
    text: 'Spine',
    path: '/spine',
    component: Spine
  },
  {
    id: 240,
    parentId: 0,
    text: 'Textures',
    path: '/textures',
    component: Textures
  },
  {
    id: 250,
    parentId: 0,
    text: 'Time',
    path: '/time',
    component: Time
  },
  {
    id: 260,
    parentId: 0,
    text: 'Timestep',
    path: '/timestep',
    component: Timestep
  },
  {
    id: 270,
    parentId: 0,
    text: 'Transform',
    path: '/transform',
    component: Transform
  },
  {
    id: 280,
    parentId: 0,
    text: 'Tweens',
    path: '/tweens',
    component: Tweens
  },
  {
    id: 290,
    parentId: 0,
    text: 'Utils',
    path: '/utils',
    component: Utils
  },
  {
    id: 300,
    parentId: 0,
    text: 'Const',
    exact: true,
    path: '/const'
  },
  {
    id: 301,
    parentId: 300,
    text: 'Property',
    path: '/const/property',
    component: ConstProperty
  },
  {
    id: 302,
    parentId: 300,
    text: 'Static Method',
    path: '/const/staticmethod',
    component: ConstStaticMethod
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
