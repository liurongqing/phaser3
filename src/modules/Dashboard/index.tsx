import * as React from 'react'
import { Icon, Row, Col, Card, Statistic } from 'antd'
import * as ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

import homeMd from '@/markdown/home.md'

const { useState, useRef, useEffect } = React

export default () => {
  const HeadingBlock = ({ level, children }) => {
    return React.createElement(
      `h${level}`,
      {
        id: children[0].props.value
      },
      children
    )
  }

  const CodeBlock = ({ language, value }) => {
    const codeEl = useRef(null)
    useEffect(() => {
      hljs.highlightBlock(codeEl.current)
    }, [])
    return (
      <pre>
        <code ref={codeEl} className={`language-${language}`}>
          {value}
        </code>
      </pre>
    )
  }

  return (
    <>
      <ReactMarkdown
        source={homeMd}
        escapeHtml={false}
        renderers={{
          heading: HeadingBlock,
          code: CodeBlock
        }}
      />
    </>
  )
}
