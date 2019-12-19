import * as React from 'react'
import { Row, Col, Button } from 'antd'
import CMarkdown from '@/commons/component/CMarkdown'
import { routesData } from '@/router'
import md from './index.md'

const { useEffect, useState } = React
export default ({ history }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(routesData.filter(v => v.parentId === 0))
  }, [])
  function goto(row: any) {
    let path: string
    const children = routesData.find(v => v.parentId === row.id)
    if (children) {
      path += children.path
    } else {
      path += row.path
    }
    history.push(path)
  }
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
        {data.map(v => (
          <Col xs={12} sm={8} xl={6} xxl={4} key={v.id}>
            <Button
              block
              icon={v.icon}
              onClick={() => {
                goto(v)
              }}
            >
              {v.text}
            </Button>
          </Col>
        ))}
      </Row>

      <CMarkdown source={md} />
    </>
  )
}
