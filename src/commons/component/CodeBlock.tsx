// CodeBlock
import * as React from 'react'
import * as hljs from 'highlight.js'
const { useRef, useEffect } = React

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
