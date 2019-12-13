import * as React from 'react'
import { Menu } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { tree } from '@/utils'
import { routesData } from '@/router'

const { SubMenu } = Menu
const { useEffect, useState, useMemo } = React

const MenuContext = ({ location }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(tree({ data: routesData }))
  }, [])

  const currentKeys = location.pathname.match(/\/\w+/g)
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

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[currentKeys.join('')]}
      defaultOpenKeys={currentKeys}
      style={{ height: 'calc(100vh - 48px)' }}
    >
      {CMenu}
    </Menu>
  )
}

export default withRouter(MenuContext)
