import { request } from '../utils'
import { API, REQUEST } from '../constants'

/**
 * @ignore
 */
export function fetchList(data: any) {
  return request({
    url: API.GAME,
    data
  })
}

/**
 * @ignore
 */
export function fetchSave(data: any) {
  return request({
    url: API.GAME,
    method: REQUEST.METHODS.POST,
    data
  })
}

/**
 * @ignore
 */
export function fetchDelete(data: any) {
  return request({
    url: API.GAME,
    method: REQUEST.METHODS.DELETE,
    data
  })
}
