import * as React from 'react'
import CMarkdown from '@/commons/component/CMarkdown'
import md from './index.md'

export default () => {
  return (
    <>
      <CMarkdown source={md} />
    </>
  )
}
