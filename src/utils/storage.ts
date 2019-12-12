/**
 * author: liurongqing
 * locationStorage 与 sessionStorage 封装
 * #### Example
 * ```typescript
 *
 * ```
 */

import { isJsonString } from './isJsonString'

const getStorage = isLocalStorage => {
  return isLocalStorage ? localStorage : sessionStorage
}

export const storage = {
  getItem: (name, isLocalStorage = true) => {
    const result = getStorage(isLocalStorage).getItem(name)
    return isJsonString(result) ? JSON.parse(result) : result
  },
  setItem: (name, value, isLocalStorage = true) => {
    getStorage(isLocalStorage).setItem(
      name,
      typeof value === 'object' ? JSON.stringify(value) : value
    )
  },
  removeItem: (name, isLocalStorage = true) => {
    getStorage(isLocalStorage).removeItem(name)
  },
  clear: (isLocalStorage = true) => {
    getStorage(isLocalStorage).clear()
  }
}
