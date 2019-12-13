import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import CodeBlock from '@/commons/component/CodeBlock'
import HeadingBlock from '@/commons/component/HeadingBlock'

export default ({ source }) => (
  <ReactMarkdown
    source={source}
    escapeHtml={false}
    renderers={{
      heading: HeadingBlock,
      code: CodeBlock
    }}
  />
)
