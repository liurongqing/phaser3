import * as React from 'react'
import * as moment from 'moment'
import {
  Table,
  Button,
  Input,
  Pagination,
  Modal,
  Form,
  Switch,
  Popconfirm,
  message,
  DatePicker
} from 'antd'

import { PAGINATION, LAYOUT } from '@/constants'
import { fetchList, fetchSave, fetchDelete } from '@/services/activity'

const { useState, useEffect } = React
const { RangePicker } = DatePicker

const Activity = (props: any) => {
  const [dataList, setDataList] = useState([])

  const [modalTitle, setModalTitle] = useState('添加活动')

  const [modalState, setModalState] = useState(false)

  const [pagination, setPagination] = useState({ ...PAGINATION })

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
      title: '开始与结束时间',
      key: 'time',
      render: (row: any) => (
        <>
          {new Date(row.startAt).toLocaleString()}
          <br />
          {new Date(row.endAt).toLocaleString()}
        </>
      )
    },
    {
      title: '关联游戏',
      dataIndex: 'game',
      key: 'game'
    },
    {
      title: '创建时间',
      key: 'createdAt',
      render: (row: any) => <>{new Date(row.createdAt).toLocaleString()}</>
    },
    {
      title: '状态',
      key: 'status',
      render: (row: any) => <>{row.status === 1 ? '开启' : '关闭'}</>
    },
    {
      title: '操作',
      key: 'address2',
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

  useEffect(getList, [pagination.page, pagination.pageSize])

  function getList() {
    fetchList({
      page: pagination.page,
      pageSize: pagination.pageSize
    }).then((response: any) => {
        setDataList(response.data.list);
        setPagination(state => ({ ...state, total: response.data.total}));
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
    validateFields((err, values) => {
      if (!err) {
        const data = {
          _id: values._id,
          name: values.name,
          startAt: values.time[0].utc(),
          endAt: values.time[1].utc(),
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
    setModalTitle('修改活动')
    console.log(!!row.status)
    setModalState(true)
    setFieldsValue({
      name: row.name,
      time: [moment(row.startAt), moment(row.endAt)],
      status: !!row.status,
      _id: row._id
    })
  }

  function modalClosed() {
    resetFields()
    setModalTitle('添加活动')
  }

  // 禁用日期
  function handleDisabledDate(time: any) {
    return time < moment().subtract(1, 'days')
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
          添加活动
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
          <Form.Item label="名称">
            {getFieldDecorator('name', {
              initialValue: ''
            })(<Input placeholder="请输入名称"/>)}
          </Form.Item>
          <Form.Item label="活动时间">
            {getFieldDecorator('time', {
              initialValue: []
            })(
              <RangePicker
                disabledDate={handleDisabledDate}
                showTime={{
                  format: 'HH:mm',
                  defaultValue: [
                    moment('00:00', 'HH:mm'),
                    moment('00:00', 'HH:mm')
                  ]
                }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
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
