import * as React from 'react'
import { Button } from 'antd'

export default (onSearch: any, onReset: any) => ({
  props: {
    layout: 'inline'
  },
  data: [
    {
      type: 'input',
      title: '名称',
      name: 'name',
      options: {
        initialValue: '',
        rules: []
      },
      props: {
        placeholder: '请输入名称'
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
