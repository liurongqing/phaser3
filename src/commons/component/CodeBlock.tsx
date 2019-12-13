// CodeBlock
import * as React from 'react'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
const { useRef, useEffect } = React
hljs.registerLanguage('javascript', javascript)

export default ({ language, value }) => {
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
