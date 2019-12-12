import * as React from 'react'
import { Pagination } from 'antd'

export default ({ pagination, setPagination }) => {
  return (
    <Pagination
      className="pagination"
      {...pagination}
      onChange={current => {
        setPagination({ ...pagination, current })
      }}
      onShowSizeChange={(current, pageSize) => {
        setPagination({ ...pagination, current, pageSize })
      }}
    />
  )
}
