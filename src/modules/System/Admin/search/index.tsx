import * as React from 'react'
import { Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import CForm from '@/commons/component/CForm'
import getFields from './fields'

interface SearchProps extends FormComponentProps {
  getList: any
}

const Search = ({
  form: { getFieldDecorator, getFieldsValue, resetFields },
  getList
}) => {
  function onSearch() {
    const formData = getFieldsValue()
    getList(formData)
  }

  function onReset() {
    resetFields()
  }

  return (
    <div>
      <CForm
        data={getFields(onSearch, onReset)}
        getFieldDecorator={getFieldDecorator}
      />
    </div>
  )
}

export default Form.create<SearchProps>({ name: 'system_admin_search' })(Search)
