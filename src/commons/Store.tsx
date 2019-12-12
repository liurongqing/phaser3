/**
 * ```typescript
 * import { Store } from '@/commons/components/Store'
 * const { useContext } = React
 * 
 * export default () => {
 *   const { state, dispatch }: any = useContext(Store)
 *   dispatch({
 *      type: 'SET_STATUS',
 *      data: {
 *        status: 2
 *      }
 *   })
 *    console.log(state)
 * }
 * ```
 */
import * as React from 'react'
import { oc } from '@/utils'

const { createContext, useReducer } = React

export const Store = createContext('global')

const initialState = {
  status: 1
}

const reducer = (state: Object, action: any) => {
  const data = {
    SET_STATUS: { ...state, status: action.data.status }
  }
  return oc(data)[action.type](state)
}

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value: any = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
