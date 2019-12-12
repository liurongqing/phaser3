import * as React from 'react'
import { Button, Popconfirm } from 'antd'
import * as moment from 'moment'

export default ({ onDel, openModal }) => {
  return [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '角色权限',
      dataIndex: 'permissions',
      key: 'permissions'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (item: any) => moment(item).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (item: any) => moment(item).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      render: (row: any) => {
        return (
          <>
            <Button
              onClick={() => {
                openModal(row)
              }}
              size="small"
              type="link"
            >
              编辑
            </Button>

            <Button size="small" type="link">
              <Popconfirm
                title="确定要删除吗?"
                onConfirm={() => {
                  onDel(row._id)
                }}
              >
                <a href="#">删除</a>
              </Popconfirm>
            </Button>
          </>
        )
      }
    }
  ]
}
