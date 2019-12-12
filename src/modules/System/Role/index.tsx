import * as React from 'react'
import { message } from 'antd'

import { PAGINATION } from '@/constants'
import { fetchList, fetchSave, fetchDelete } from '@/services'
import { API } from '@/constants'
import { filterObjectProps } from '@/utils'
import CPagination from '@/commons/component/CPagination'

import Search from './search'
import Action from './action'
import Table from './table'
import Modal from './modal'

const { useState, useEffect, useMemo, useCallback } = React

export default () => {
  const [pagination, setPagination] = useState({ ...PAGINATION, pageSize: 10 })
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  const [modalInitData, setModalInitData] = useState(null) // modal 中 form 初始化数据
  const [fieldsHiddenList, setFieldsHiddenList] = useState([])

  useEffect(() => {
    getList()
  }, [pagination.current, pagination.pageSize])

  function getList(searchParams: any = {}) {
    fetchList({
      data: {
        ...searchParams,
        current: pagination.current,
        pageSize: pagination.pageSize
      },
      url: API.SYSTEM_ROLE
    }).then(response => {
      if (response) {
        setData(response.data.list)
        setPagination({ ...pagination, total: response.data.total })
      }
    })
  }

  // 打开操作框
  function openModal(row?: any) {
    setVisible(true)
    if (row._id) {
      setModalInitData(filterObjectProps(row, ['_id', 'name']))
      // setFieldsHiddenList(['password', 'username'])
    }
  }

  function onSave(data: any) {
    fetchSave({
      data,
      url: API.SYSTEM_ROLE
    }).then(response => {
      if (response) {
        message.success('操作成功')
        getList()
        setVisible(false)
      }
    })
  }

  function onDel(_id: any) {
    fetchDelete({
      data: { _id },
      url: API.SYSTEM_ROLE
    }).then(response => {
      if (response) {
        message.success('删除成功')
        getList()
      }
    })
  }

  const ActionMemo = useMemo(() => <Action onAdd={openModal} />, [])

  const SearchMemo = useMemo(() => <Search getList={getList} />, [])

  const CPaginationMemo = useMemo(
    () => <CPagination pagination={pagination} setPagination={setPagination} />,
    [pagination]
  )

  const TableMemo = useMemo(
    () => (
      <Table
        tableProps={{ rowKey: '_id' }}
        dataSource={data}
        onDel={onDel}
        openModal={openModal}
      />
    ),
    [data]
  )

  return (
    <>
      {SearchMemo}
      {ActionMemo}
      {TableMemo}
      {CPaginationMemo}
      <Modal
        visible={visible}
        setVisible={setVisible}
        onSave={onSave}
        hiddenList={fieldsHiddenList}
        setHiddenList={setFieldsHiddenList}
        initData={modalInitData}
      />
    </>
  )
}
