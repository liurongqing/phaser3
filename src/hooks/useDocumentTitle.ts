/**
 * ```typescript
 * import { useDocumentTitle } from '@/hooks'
 * useDocumentTitle('首页')
 * ```
 */
import * as React from 'react'

const { useEffect } = React

export default (title: string, initTitle = '标题') => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = initTitle
    }
  }, [title])
}
