import * as React from 'react'
import { Table, Checkbox } from 'antd'

import { LAYOUT } from '@/constants'
import PermissionsTable from './PermissionsTable'

export default ({ hiddenList = [] }) => {
  let data: any = {
    id: '_id',
    props: {
      ...LAYOUT.formItemLayout
    },
    data: [
      {
        type: 'input',
        title: '角色名称',
        name: 'name',
        options: {
          initialValue: '',
          rules: [{ required: true, message: '角色名不可为空' }]
        },
        props: {
          placeholder: '请输入角色名称'
        }
      },
      {
        type: 'switch',
        title: '角色状态',
        name: 'status',
        options: {
          initialValue: true,
          valuePropName: 'checked',
          rules: []
        },
        props: {
          checkedChildren: '激活',
          unCheckedChildren: '停用'
        }
      },
      {
        type: 'custom',
        title: '角色权限',
        name: 'name',
        component: () => <PermissionsTable />,
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请输入角色名称'
        }
      },
      {
        type: 'select',
        title: '授权管理员',
        name: 'auth',
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请选择授权管理员'
        }
      }
    ]
  }
  if (hiddenList.length > 0) {
    data.data = data.data.filter((v: any) => !hiddenList.includes(v.name))
  }
  return data
}
