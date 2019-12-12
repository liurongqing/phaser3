import { request } from '@/utils'
import { API, REQUEST } from '@/constants'

/**
 * @ignore
 */
export function fetchLogin(data: any) {
  return request({
    url: API.LOGIN,
    method: REQUEST.METHODS.POST,
    data
  })
}

/**
 * @ignore
 */
export function fetchLogout(data: any) {
  return request({
    url: API.LOGOUT,
    method: REQUEST.METHODS.POST,
    data
  })
}
