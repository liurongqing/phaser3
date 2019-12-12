import * as React from 'react'
import { Button } from 'antd'

export default (onSearch: any, onReset: any) => ({
  props: {
    layout: 'inline'
  },
  data: [
    {
      type: 'input',
      title: '菜单名称',
      name: 'text',
      options: {
        initialValue: '',
        rules: []
      },
      props: {
        placeholder: '请输入菜单名称'
      }
    },
    {
      type: 'custom',
      props: {},
      component: () => (
        <>
          <Button type="primary" onClick={onSearch}>
            搜索
          </Button>
          <Button onClick={onReset}>重置</Button>
        </>
      )
    }
  ]
})
