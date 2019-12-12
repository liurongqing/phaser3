import * as React from 'react'
import { Table, Checkbox } from 'antd'

import { API } from '@/constants'
import { fetchList } from '@/services'
import { oc } from '@/utils'

const { useEffect, useState } = React
export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getList()
  }, [])

  function onChange(event: any, _id: any) {
    // console.log(event.target.checked, _id)
    const newData = data.map(v => {
      if (v._id === _id) {
        v.page.checked = event.target.checked
      }
      return v
    })
    setData(newData)
  }

  function onChangeFeature(event: any, _id: any, value: any) {
    console.log(event.target.checked, _id, value)
    const newData = data.map(v => {
      if (v._id === _id) {
        v.feature = oc(v)
          .feature([])
          .map((fv: any) => {
            if (fv.value === value) {
              fv.checked = event.target.checked
            }
            console.log(fv)
            return fv
          })
      }
      return v
    })
    setData(newData)
  }

  function getList() {
    fetchList({
      data: {},
      url: API.SYSTEM_PERMISSIONS
    }).then(response => {
      if (response) {
        console.log(response)
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
  return (
    <Table
      pagination={false}
      rowKey="_id"
      columns={[
        {
          title: '页面权限',
          dataIndex: 'page',
          key: 'page',
          render: (item: any, row: any) => {
            return (
              <Checkbox
                checked={item.checked}
                onChange={(event: any) => {
                  onChange(event, row._id)
                }}
              >
                {oc(item).title('')}
              </Checkbox>
            )
          }
        },
        {
          title: '功能权限',
          key: 'feature',
          dataIndex: 'feature',
          render: (item: any, row: any) => {
            return (
              <>
                {item.map((v: any, index: any) => (
                  <Checkbox
                    checked={v.checked}
                    onChange={(event: any) => {
                      onChangeFeature(event, row._id, v.value)
                    }}
                    key={index}
                  >
                    {oc(v).title('')}
                  </Checkbox>
                ))}
              </>
            )
          }
        }
      ]}
      dataSource={data}
    ></Table>
  )
}
