import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import CodeBlock from '@/commons/component/CodeBlock'
import HeadingBlock from '@/commons/component/HeadingBlock'
import { Store } from '@/commons/Store'
const { useEffect, useContext } = React

export default ({ source }) => {
  const { dispatch }: any = useContext(Store)
  useEffect(() => {
    dispatch({
      type: 'SET_ANCHORS',
      data: {
        anchors: []
      }
    })
  }, [])

  return (
    <ReactMarkdown
      source={source}
      renderers={{
        heading: HeadingBlock,
        code: CodeBlock
      }}
    />
  )
}
