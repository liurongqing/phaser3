import * as React from 'react'
import { Button, Popconfirm, Tag } from 'antd'
import * as moment from 'moment'
import { oc } from '@/utils'

export default ({ onDel, openModal, dataList }) => {
  return [
    {
      title: '帐号',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname'
    },
    {
      title: '所属角色',
      dataIndex: 'role',
      key: 'role',
      render: (item: any) =>
        item.map((v: any, index: number) => (
          <Tag key={index}>
            {oc(
              oc(dataList)
                .role([])
                .find((dv: any) => dv.value === v)
            ).title('')}
          </Tag>
        ))
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (item: any) => moment(item).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '最后登录时间',
      dataIndex: 'lastLoginAt',
      key: 'lastLoginAt'
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
              修改
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
