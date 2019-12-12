import * as React from 'react'
import { Checkbox, Tag } from 'antd'
import FeatureAction from './FeatureAction'

export default ({ onSave }) => {
  return [
    {
      title: '页面权限',
      dataIndex: 'page',
      key: 'page',
      width: 200,
      render: (item: any) => item.title
    },
    {
      title: '功能权限',
      dataIndex: 'feature',
      key: 'feature',
      render: (item: any, row: any) => (
        <FeatureAction onSave={onSave} row={row} item={item} />
      )
    }
  ]
}
