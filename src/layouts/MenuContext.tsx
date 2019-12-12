import * as React from 'react'
import { Menu, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { API } from '@/constants'
import { fetchList } from '@/services'
import { tree } from '@/utils'

const { SubMenu } = Menu
const { useEffect, useState, useMemo } = React

const MenuContext = (props: any) => {
  const { location } = props
  const [data, setData] = useState([])
  const currentKeys = location.pathname.match(/\/\w+/g)

  useEffect(() => {
    setData([
      {
        parentId: '0',
        status: 1,
        sort: 0,
        _id: '5d7ef3ea16a64651c9dbe84e',
        text: 'Dashboard2',
        link: '/dashboard',
        icon: 'dashboard',
        createdAt: '2019-09-16T02:31:06.838Z',
        updatedAt: '2019-09-16T09:37:27.079Z'
      },
      {
        parentId: '0',
        status: 1,
        sort: 1,
        _id: '5d7ef3b616a64651c9dbe84c',
        text: '系统管理',
        link: '/system',
        icon: 'setting',
        createdAt: '2019-09-16T02:30:14.870Z',
        updatedAt: '2019-09-18T02:36:32.991Z',
        children: [
          {
            parentId: '5d7ef3b616a64651c9dbe84c',
            status: 1,
            sort: 1,
            _id: '5d7f0fbf2979f260aa811029',
            text: '管理员管理',
            link: '/system/admin',
            createdAt: '2019-09-16T04:29:51.900Z',
            updatedAt: '2019-09-16T09:38:42.329Z'
          },
          {
            parentId: '5d7ef3b616a64651c9dbe84c',
            status: 1,
            sort: 2,
            _id: '5d7f0fd32979f260aa81102a',
            text: '角色管理',
            link: '/system/role',
            createdAt: '2019-09-16T04:30:11.891Z',
            updatedAt: '2019-09-16T09:38:48.359Z'
          },
          {
            parentId: '5d7ef3b616a64651c9dbe84c',
            status: 1,
            sort: 3,
            _id: '5d7f0ff32979f260aa81102b',
            text: '菜单管理',
            link: '/system/menu',
            createdAt: '2019-09-16T04:30:43.110Z',
            updatedAt: '2019-09-16T09:38:46.781Z'
          },
          {
            parentId: '5d7ef3b616a64651c9dbe84c',
            status: 1,
            sort: 100,
            _id: '5d7f3b3fbf6d6574c647822c',
            text: '权限管理',
            link: '/system/permissions',
            createdAt: '2019-09-16T07:35:27.418Z',
            updatedAt: '2019-09-16T09:38:47.470Z'
          }
        ]
      }
    ])
  }, [])

  const CMenu = useMemo(() => {
    return getItem(data)
  }, [data])

  function getItem(data: any) {
    return data.map((v: any) => {
      return v.children ? (
        <SubMenu
          key={v.link}
          title={
            <span>
              {v.icon && <Icon type={v.icon} />}
              <span>{v.text}</span>
            </span>
          }
        >
          {getItem(v.children)}
        </SubMenu>
      ) : (
        <Menu.Item key={v.link}>
          <Link to={v.link}>
            {v.icon && <Icon type={v.icon} />}
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
      style={{ height: 'calc(100vh - 64px)' }}
    >
      {CMenu}
    </Menu>
  )
}

export default withRouter(MenuContext)
