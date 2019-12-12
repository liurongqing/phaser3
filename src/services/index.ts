import { request } from '@/utils'
import { REQUEST } from '@/constants'

// 列表
export function fetchList({ data, url }) {
  return request({
    url,
    method: REQUEST.METHODS.GET,
    data
  })
}

// 保存与修改
export function fetchSave({ data, url }) {
  return request({
    url,
    method: REQUEST.METHODS.POST,
    data
  })
}

// 删除
export function fetchDelete({ data, url }) {
  return request({
    url,
    method: REQUEST.METHODS.DELETE,
    data
  })
}
