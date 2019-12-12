import * as React from 'react'
import { Form, Input, InputNumber, Select, Switch, TreeSelect } from 'antd'

import { LAYOUT } from '@/constants'
import { oc } from '@/utils'

const { Option } = Select
const { TextArea } = Input

export default ({ data, getFieldDecorator }) => {
  // console.log('渲染多少次')
  data.id && getFieldDecorator(data.id)
  const types = {
    input: (item: any) => <Input {...item.props} />,
    inputNumber: (item: any) => <InputNumber {...item.props} />,
    inputPassword: (item: any) => <Input.Password {...item.props} />,
    textarea: (item: any) => <TextArea />,
    select: (item: any) => (
      <Select optionFilterProp="children" {...item.props}>
        {setOption(item.dataList)}
      </Select>
    ),
    switch: (item: any) => {
      return <Switch {...item.props} />
    },
    custom: (item: any) => item.component(),
    dateMonth: () => {},
    dateRange: () => {},
    treeSelect: (item: any) => {
      return <TreeSelect treeData={item.dataList} {...item.props} />
    }
  }

  function setOption(
    data = [],
    { title = 'title', value = 'value', key = value } = {}
  ) {
    return data.map((opt: any) => (
      <Option title={opt[title]} key={opt[key]} value={opt[value]}>
        {opt[title]}
      </Option>
    ))
  }

  return (
    <Form {...data.props}>
      {data.data.map((v: any, index: Number) => {
        // console.log(v.name, v.options)
        return (
          <Form.Item key={String(index)} label={v.title}>
            {v.type === 'custom'
              ? oc(types)[v.type](types.input)(v)
              : getFieldDecorator(v.name, { ...v.options })(
                  oc(types)[v.type](types.input)(v)
                )}
          </Form.Item>
        )
      })}
    </Form>
  )
}
