// CodeBlock
import * as React from 'react'
import * as hljs from 'highlight.js'
const { useRef, useEffect } = React
import { Typography } from 'antd'

const { Paragraph } = Typography

export default ({ language, value }) => {
  const codeEl = useRef(null)
  useEffect(() => {
    hljs.highlightBlock(codeEl.current)
  }, [])
  return (
    <pre>
      <Paragraph copyable={{ text: value }}></Paragraph>
      <code ref={codeEl} className={`language-${language}`}>
        {value}
      </code>
    </pre>
  )
}
