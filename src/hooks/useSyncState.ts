/**
 * 使用同步 state
 * #### Example
 * ```typescript
 * import { useSyncState } from '@/hooks'
 * export default () => {
 *   const [status, setStatus] = useSyncState(1)
 *   status.current // 1
 *   setStatus(2)
 *   status.current // 2
 * }
 * ```
 * 
 * @category useHooks
 */
import * as React from 'react'

const { useRef } = React

/**
 * 使用同步 state
 * #### Example
 * ```typescript
 * import { useSyncState } from '@/hooks'
 * export default () => {
 *   const [status, setStatus] = useSyncState(1)
 *   status.current // 1
 *   setStatus(2)
 *   status.current // 2
 * }
 * ```
 * 
 * @category useHooks
 */
export const useSyncState = (initValue: any) => {
  const ref = useRef(null)
  ref.current = initValue

  function setValue(value?: any) {
    ref.current = value
  }

  return [ref, setValue]
}
