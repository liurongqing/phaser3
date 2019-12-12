import * as React from 'react'
import { Button, Popconfirm, Switch } from 'antd'
import * as moment from 'moment'
import { Input, Icon } from 'antd'

export default ({ onDel, openModal, onSave, handleChangeSort }) => {
  return [
    {
      title: '菜单名称',
      dataIndex: 'text',
      key: 'text'
    },
    {
      title: '链接',
      dataIndex: 'link',
      key: 'link'
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
      render: (item: any) => {
        return item && <Icon type={item} />
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (item: any, row: any) => (
        <Switch
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked={!!item}
          onChange={checked => {
            onSave({
              _id: row._id,
              status: +checked
            })
          }}
        />
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (item: any) => moment(item).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (item: any) => moment(item).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      render: (item: any, row: any) => {
        return (
          <Input
            style={{ width: 60 }}
            value={item || 0}
            onChange={e => {
              handleChangeSort(e.target.value, row._id)
            }}
            onBlur={e => {
              handleChangeSort(e.target.value, row._id, true)
            }}
            onPressEnter={(e: any) => {
              handleChangeSort(e.target.value, row._id, true)
            }}
          />
        )
      }
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
