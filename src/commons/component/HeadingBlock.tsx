// HeadingBlock
import * as React from 'react'

export default ({ level, children }) => {
  return React.createElement(
    `h${level}`,
    {
      id: children[0].props.value
    },
    children
  )
}
