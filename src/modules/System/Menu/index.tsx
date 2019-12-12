import * as React from 'react'
import { message } from 'antd'

import { fetchList, fetchSave, fetchDelete } from '@/services'
import { API } from '@/constants'
import { filterObjectProps, tree } from '@/utils'

import Search from './search'
import Action from './action'
import Table from './table'
import Modal from './modal'

const { useState, useEffect, useMemo, useCallback } = React

export default () => {
  const [visible, setVisible] = useState(false)
  const [oldData, setOldData] = useState([])
  const [data, setData] = useState([])
  const [modalInitData, setModalInitData] = useState(null) // modal 中 form 初始化数据
  const [fieldsHiddenList, setFieldsHiddenList] = useState([])
  const [fieldsDataList, setFieldsDataList] = useState({})

  useEffect(() => {
    getList()
  }, [])

  function getList(searchParams: any = {}) {
    fetchList({
      data: {
        ...searchParams
      },
      url: API.SYSTEM_MENU
    }).then(response => {
      if (response) {
        setOldData(response.data.list)

        setData(
          tree({
            data: response.data.list
          })
        )

        const treeData = tree({
          data: response.data.list,
          columns: { _id: 'value', text: 'title' },
          fields: ['value', 'title']
        })
        // console.log(treeData)
        setFieldsDataList({
          parentId: [{ value: '0', title: '顶级菜单' }].concat(treeData)
        })
      }
    })
  }

  // 打开操作框
  function openModal(row?: any) {
    setVisible(true)
    if (row._id) {
      row.status = !!row.status
      setModalInitData(
        filterObjectProps(row, [
          '_id',
          'parentId',
          'text',
          'link',
          'icon',
          'status',
          'sort'
        ])
      )
      // setFieldsHiddenList(['password', 'username'])
    }
  }

  function onSave(data: any) {
    fetchSave({
      data,
      url: API.SYSTEM_MENU
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
      url: API.SYSTEM_MENU
    }).then(response => {
      if (response) {
        message.success('删除成功')
        getList()
      }
    })
  }

  function handleChangeSort(value: any, _id: any, save: any) {
    const newData = oldData.map(v => {
      if (v._id === _id) {
        v.sort = +value
      }
      return v
    })

    setOldData(newData)
    setData(tree({ data: newData }))

    save &&
      onSave({
        _id,
        sort: +value
      })
  }

  const ActionMemo = useMemo(() => <Action onAdd={openModal} />, [])

  const SearchMemo = useMemo(() => <Search getList={getList} />, [])

  const TableMemo = useMemo(
    () => (
      <Table
        tableProps={{ rowKey: '_id' }}
        dataSource={data}
        onDel={onDel}
        openModal={openModal}
        onSave={onSave}
        handleChangeSort={handleChangeSort}
      />
    ),
    [data]
  )

  return (
    <>
      {SearchMemo}
      {ActionMemo}
      {TableMemo}
      <Modal
        visible={visible}
        setVisible={setVisible}
        onSave={onSave}
        dataList={fieldsDataList}
        hiddenList={fieldsHiddenList}
        setHiddenList={setFieldsHiddenList}
        initData={modalInitData}
      />
    </>
  )
}
