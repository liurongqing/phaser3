import * as React from 'react'
import CMarkdown from '@/commons/component/CMarkdown'
import md from './home.md'

export default () => {
  return (
    <>
      <CMarkdown source={md} />
    </>
  )
}
