import * as React from 'react'
import { Button } from 'antd'

export default ({ onAdd }) => (
  <div className="action-box">
    <Button type="primary" onClick={onAdd}>
      添加菜单
    </Button>
  </div>
)
