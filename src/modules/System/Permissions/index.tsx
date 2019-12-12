import * as React from 'react'
import { message } from 'antd'

import { fetchList, fetchSave } from '@/services'
import { API } from '@/constants'

import Table from './table'

const { useState, useEffect, useMemo, useCallback } = React

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getList()
  }, [])

  function getList() {
    fetchList({
      data: {},
      url: API.SYSTEM_PERMISSIONS
    }).then(response => {
      if (response) {
        let dataList = response.data.list

        dataList = dataList.map((v: any) => {
          try {
            v.page = JSON.parse(v.page)
            v.feature = JSON.parse(v.feature)
          } catch (e) {
            // 不做处理
          }
          return v
        })
        setData(dataList)
      }
    })
  }

  function onSave(data: any) {
    fetchSave({
      data,
      url: API.SYSTEM_PERMISSIONS
    }).then(response => {
      if (response) {
        message.success('操作成功')
        getList()
      }
    })
  }

  const TableMemo = useMemo(
    () => (
      <Table
        tableProps={{ rowKey: (row: any, index: any) => index }}
        dataSource={data}
        onSave={onSave}
      />
    ),
    [data]
  )

  return <>{TableMemo}</>
}
