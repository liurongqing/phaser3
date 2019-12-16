// CodeBlock
import * as React from 'react'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import { Typography } from 'antd'

const { useRef, useEffect } = React
const { Paragraph } = Typography
hljs.registerLanguage('javascript', javascript)

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
