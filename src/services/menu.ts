import { request } from '../utils'
import { API, REQUEST } from '../constants'

/**
 * @ignore
 */
export function fetchList() {
  return request({
    url: API.MENU,
    method: REQUEST.METHODS.GET
  })
}

/**
 * @ignore
 */
export function fetchSave(data: any) {
  return request({
    url: API.MENU,
    method: REQUEST.METHODS.POST,
    data
  })
}

/**
 * @ignore
 */
export function fetchDelete(data: any) {
  return request({
    url: API.MENU,
    method: REQUEST.METHODS.DELETE,
    data
  })
}
