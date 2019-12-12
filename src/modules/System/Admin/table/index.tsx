import * as React from 'react'
import { Table } from 'antd'

import getColumns from './columns'

export default ({ dataSource, tableProps, onDel, openModal, dataList }) => (
  <Table
    {...tableProps}
    pagination={false}
    dataSource={dataSource}
    columns={getColumns({ onDel, openModal, dataList })}
  />
)
