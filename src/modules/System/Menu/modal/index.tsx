import * as React from 'react'
import { Modal, Form, message, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import CForm from '@/commons/component/CForm'
import { filterObjectProps } from '@/utils'
import getFields from './fields'

const { useEffect } = React

interface ActionModalProps extends FormComponentProps {
  visible: any
  setVisible: any
  onSave: any
  hiddenList: any
  initData: any
  setHiddenList: any
  dataList: any
}

const ActionModal = ({
  form: {
    getFieldDecorator,
    getFieldValue,
    validateFields,
    setFieldsValue,
    resetFields
  },
  visible,
  setVisible,
  onSave,
  hiddenList,
  setHiddenList,
  dataList,
  initData = null
}) => {
  function onOk() {
    validateFields((errors: any, values: any) => {
      if (!errors) {
        if (values._id) {
          values = filterObjectProps(values, [
            '_id',
            'parentId',
            'link',
            'icon',
            'text',
            'status'
          ])
          values.status = +values.status
        }
        onSave(values)
      }
    })
  }
  function onAfterClose() {
    resetFields()
    setHiddenList([])
  }

  useEffect(() => {
    if (initData) {
      setTimeout(() => {
        // 宏任务用于未创建表单字段就操作的报错操作
        setFieldsValue(initData)
      })
    }
  }, [initData])

  return (
    <Modal
      title={getFieldValue('_id') ? '修改菜单信息' : '添加菜单'}
      visible={visible}
      onOk={onOk}
      afterClose={onAfterClose}
      onCancel={() => {
        setVisible(false)
      }}
    >
      <CForm
        data={getFields({ hiddenList, dataList })}
        getFieldDecorator={getFieldDecorator}
      />
    </Modal>
  )
}

export default Form.create<ActionModalProps>({ name: 'system_admin_modal' })(
  ActionModal
)