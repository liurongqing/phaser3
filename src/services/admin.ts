import { request } from '@/utils'
import { API, REQUEST } from '@/constants'

export function fetchList(data: any) {
  return request({
    url: API.SYSTEM_ADMIN,
    method: REQUEST.METHODS.GET,
    data
  })
}

export function fetchSave(data: any) {
  return request({
    url: API.SYSTEM_ADMIN,
    method: REQUEST.METHODS.POST,
    data
  })
}

export function fetchDelete(data: any) {
  return request({
    url: API.SYSTEM_ADMIN,
    method: REQUEST.METHODS.DELETE,
    data
  })
}
