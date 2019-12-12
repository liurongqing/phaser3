import * as React from 'react'
import { Table } from 'antd'

import getColumns from './columns'

export default ({ dataSource, tableProps, onSave }) => (
  <Table
    {...tableProps}
    pagination={false}
    dataSource={dataSource}
    columns={getColumns({ onSave })}
  />
)
