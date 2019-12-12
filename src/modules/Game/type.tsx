import * as React from 'react'
import * as moment from 'moment'
import { tree } from '@/utils'
import {
  Table,
  Button,
  Input,
  Modal,
  Form,
  Popconfirm,
  message,
  TreeSelect
} from 'antd'

const { confirm } = Modal

import { LAYOUT } from '@/constants'
import { fetchList, fetchSave, fetchDelete } from '@/services/gameType'

const { useState, useEffect } = React
const constModalTitle = ['添加游戏类型', '修改游戏类型']

const Activity = (props: any) => {
  const [dataList, setDataList] = useState([])

  const [treeDataType, setTreeDataType] = useState([])

  const [modalTitle, setModalTitle] = useState(constModalTitle[0])

  const [modalState, setModalState] = useState(false)

  const {
    getFieldDecorator,
    validateFields,
    resetFields,
    setFieldsValue
  } = props.form
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
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
      title: '操作',
      key: 'per',
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
              del(row)
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

  useEffect(getList, [])

  /**
   * 以下为增删改操作
   */

  function getList() {
    fetchList().then((response: any) => {
      const data = response.data.list || []
      // 添加一级菜单， 结构化数据
      setTreeDataType([
        {
          title: '新建一级分类',
          value: '0'
        },
        ...tree({ data, columns: { _id: 'value', name: 'title' } })
      ])
      setDataList(tree({ data, columns: { _id: 'key' } }))
    })
  }

  function del(row: any) {
    if (row.children) {
      confirm({
        title: '该类型下有子类型，确定要全部删除？',
        onOk() {
          fetchDel(row._id)
        },
        onCancel() {}
      })
    } else {
      fetchDel(row._id)
    }
  }

  function fetchDel(_id: String) {
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
          parentId: values.parentId
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

  /**
   * 弹层相关操作
   */

  function editModal(row: any) {
    setModalTitle(constModalTitle[1])
    setModalState(true)
    setFieldsValue({
      name: row.name,
      parentId: row.parentId,
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
        <Button
          style={{ marginBottom: 20 }}
          type="primary"
          icon="plus"
          onClick={() => setModalState(true)}
        >
          {modalTitle}
        </Button>
      </div>
      <Table pagination={false} dataSource={dataList} columns={columns} />
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

          <Form.Item label="所属分类">
            {getFieldDecorator('parentId', {
              initialValue: '0'
            })(
              <TreeSelect
                style={{ width: 300 }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeDataType}
                treeDefaultExpandAll
              />
            )}
          </Form.Item>

          <Form.Item label="类型名称">
            {getFieldDecorator('name', {
              initialValue: ''
            })(<Input placeholder="请输入名称" />)}
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Form.create()(Activity)
