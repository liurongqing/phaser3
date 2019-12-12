import * as React from 'react'
import { Menu, Badge, Dropdown, Avatar, Icon } from 'antd'

export default () => {
  const menu = (
    <Menu>
      <Menu.Item className="right-content-menu-item">
        <Icon type="logout" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="right-content-box">
      <div className="right-content-item">
        <Badge count={11} className="right-content-badge">
          <Icon type="bell" />
        </Badge>
      </div>

      <Dropdown overlay={menu}>
        <div className="right-content-item">
          <Avatar size="small" alt="avatar" />
          <span className="right-content-item-name">刘荣清</span>
        </div>
      </Dropdown>
    </div>
  )
}
