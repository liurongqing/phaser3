import * as React from 'react'
import { Menu } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { tree } from '@/utils'
import { routesData } from '@/router'

const { SubMenu } = Menu
const { useEffect, useState, useMemo } = React

let globalOpenKeys: any

const MenuContext = ({ location }) => {
  const [data, setData] = useState([])
  const [, forceUpdate] = useState()
  const pathname = location.pathname.match(/\/\w+/g)
  let currentOpenKeys = globalOpenKeys || pathname
  globalOpenKeys = null
  useEffect(() => {
    setData(tree({ data: routesData }))
  }, [])

  const CMenu = useMemo(() => {
    return getItem(data)
  }, [data])

  function getItem(data: any) {
    return data.map((v: any) => {
      return v.children ? (
        <SubMenu
          key={v.path}
          title={
            <span>
              <span>{v.text}</span>
            </span>
          }
        >
          {getItem(v.children)}
        </SubMenu>
      ) : (
        <Menu.Item key={v.path}>
          <Link to={v.path}>
            <span>{v.text}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  function onOpenChange(openKeys: any) {
    // console.log('openKeys', openKeys)
    // 只有一个值的情况下
    globalOpenKeys = [openKeys.pop()]
    forceUpdate({})
  }

  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname.join('')]}
        openKeys={currentOpenKeys}
        onOpenChange={onOpenChange}
        // defaultSelectedKeys={[currentKeys.join('')]}
        // defaultOpenKeys={currentKeys}
        style={{ height: 'calc(100vh - 48px)', overflow: 'auto' }}
      >
        {CMenu}
      </Menu>
    </>
  )
}

export default withRouter(MenuContext)
