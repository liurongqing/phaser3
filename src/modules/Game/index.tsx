import * as React from 'react'
import * as moment from 'moment'
import { tree } from '@/utils'
import {
  Table,
  Button,
  Input,
  Pagination,
  Modal,
  Form,
  Switch,
  Popconfirm,
  TreeSelect,
  message
} from 'antd'

import { PAGINATION, LAYOUT } from '@/constants'
import { fetchList, fetchSave, fetchDelete } from '@/services/game'
import { fetchList as fetchTypeList } from '@/services/gameType'

const { useState, useEffect } = React
const constModalTitle = ['添加游戏', '修改游戏']

const Activity = (props: any) => {
  const [dataList, setDataList] = useState([])

  const [modalTitle, setModalTitle] = useState(constModalTitle[0])

  const [modalState, setModalState] = useState(false)

  const [treeDataType, setTreeDataType] = useState([])

  const [pagination, setPagination] = useState({ ...PAGINATION })

  const {
    getFieldDecorator,
    validateFields,
    resetFields,
    setFieldsValue
  } = props.form
  const columns = [
    {
      title: '游戏名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '游戏类型',
      dataIndex: 'typeId',
      key: 'typeId'
    },
    {
      title: '创建时间',
      key: 'createdAt',
      render: (row: any) => <>{new Date(row.createdAt).toLocaleString()}</>
    },
    {
      title: '更新时间',
      key: 'updatedAt',
      render: (row: any) => <>{new Date(row.updatedAt).toLocaleString()}</>
    },
    {
      title: '状态',
      key: 'status',
      render: (row: any) => <>{row.status === 1 ? '开启' : '关闭'}</>
    },
    {
      title: '操作',
      key: 'action',
      render: (row: any) => (
        <div>
          <Button
            size="small"
            onClick={() => {
              editModal(row)
            }}
          >
            修改
          </Button>
          <Popconfirm
            title="确定要删除？"
            okText="是"
            cancelText="否"
            onConfirm={() => {
              del(row._id)
            }}
          >
            <Button size="small" type="danger">
              删除
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ]

  useEffect(getList, [pagination.current, pagination.pageSize])
  useEffect(getTypeList, [])

  function getTypeList() {
    fetchTypeList().then(response => {
      const data: any = response.data.list || []
      setTreeDataType(tree({ data, columns: { _id: 'value', name: 'title' } }))
    })
  }

  function getList() {
    fetchList({
      page: pagination.current,
      pageSize: pagination.pageSize
    }).then((response: any) => {
      setDataList(response.data.list)
      setPagination(state => ({ ...state, total: response.data.total }))
    })
  }

  function del(_id: String) {
    fetchDelete({
      _id
    }).then((response: any) => {
      if (response.code === 0) {
        message.success('删除成功！')
        getList()
      }
    })
  }

  function add() {
    validateFields((err: any, values: any) => {
      if (!err) {
        const data = {
          _id: values._id,
          name: values.name,
          typeId: values.typeId,
          status: +values.status
        }
        fetchSave(data).then((response: any) => {
          if (response.code === 0) {
            message.success('操作成功！')
            setModalState(false)
            getList()
          }
        })
      }
    })
  }

  function editModal(row: any) {
    setModalTitle(constModalTitle[1])
    setModalState(true)
    setFieldsValue({
      name: row.name,
      typeId: row.typeId,
      status: !!row.status,
      _id: row._id
    })
  }

  function modalClosed() {
    resetFields()
    setModalTitle(constModalTitle[0])
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Input.Search
          style={{ width: 300, marginBottom: 20 }}
          placeholder="输入名称"
          onSearch={value => console.log(value)}
          enterButton
        />
        <Button type="primary" icon="plus" onClick={() => setModalState(true)}>
          添加游戏
        </Button>
      </div>
      <Table pagination={false} dataSource={dataList} columns={columns} />
      <Pagination
        className="pagination"
        showTotal={total => `共 ${total} 条数据`}
        showSizeChanger
        showQuickJumper
        onChange={page => {
          setPagination(state => ({ ...state, page }))
        }}
        onShowSizeChange={(page, pageSize) => {
          setPagination(state => ({ ...state, page, pageSize }))
        }}
        total={pagination.total}
      />
      <Modal
        title={modalTitle}
        centered
        visible={modalState}
        onOk={() => add()}
        onCancel={() => setModalState(false)}
        afterClose={modalClosed}
      >
        <Form {...LAYOUT}>
          <Form.Item>
            {getFieldDecorator('_id', {
              initialValue: undefined
            })}
          </Form.Item>
          <Form.Item label="游戏名称">
            {getFieldDecorator('name', {
              initialValue: ''
            })(<Input placeholder="请输入名称" />)}
          </Form.Item>
          <Form.Item label="游戏分类">
            {getFieldDecorator('typeId', {
              initialValue: ''
            })(
              <TreeSelect
                style={{ width: 300 }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeDataType}
                treeDefaultExpandAll
              />
            )}
          </Form.Item>

          <Form.Item label="启用">
            {getFieldDecorator('status', {
              valuePropName: 'checked',
              initialValue: true
            })(<Switch />)}
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Form.create()(Activity)
