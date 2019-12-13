import * as React from 'react'
import { Icon, Row, Col, Card, Statistic } from 'antd'
import * as ReactMarkdown from 'react-markdown'
import homeMd from '@/markdown/home.md'

const { useState } = React
export default () => {
  const HeadingBlock = ({ level, children }) => {
    console.log('level', level)
    return React.createElement(
      `h${level}`,
      {
        id: children[0].props.value
      },
      children
    )
  }

  return (
    <>
      <ReactMarkdown
        source={homeMd}
        escapeHtml={false}
        renderers={{
          heading: HeadingBlock
        }}
      />
    </>
  )
}
