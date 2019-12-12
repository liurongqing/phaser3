import * as React from 'react'
import { Pagination } from 'antd'

import { PAGINATION } from '@/constants'

const { useState, useEffect } = React

export default ({ current, pageSize, total }) => {
  const [pagination, setPagination] = useState({ ...PAGINATION })

  useEffect(() => {
    // setPagination({ ...pagination, total, current, pageSize })
  }, [current, pageSize, total])

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
