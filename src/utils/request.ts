import { message } from 'antd'
import { REQUEST } from '@/constants'
import { params, oc } from '@/utils'

const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  if (response.status >= 500) {
    return Promise.reject({
      msg: `服务器忙，状态：${response.status}`
    })
  }

  throw new Error('checkstatus error：' + response)
}

const checkCode = (response: any) => {
  if (response.code !== 0) {
    // 没登录, TODO: 跳转闪一下， 需要优化
    if (response.code === 1) {
      window.location.href = '/login?redirect=' + location.pathname
    }
    // if(response.code === 6000){
    //   response.msg = '数据库操作错误: ' + response.log
    // }
    return Promise.reject(response)
  }
  return response
}

/**
 * 封装 fetch 请求
 * #### Example
 * ```typescript
 * import { request } from '@/utils'
 * request({
 *   url: '/api/getList',
 *   method: 'POST',
 *   data: { page: 1 }
 * })
 * ```
 * @category Utils
 */
export const request = async ({ url, method, data }: any) => {
  const controller = new AbortController()
  const { signal } = controller
  const options: any = {
    signal
  }
  if (method && method !== 'GET') {
    // 非 GET 请求
    options.method = method
    options.headers = {
      'content-type': REQUEST.CONTENT_TYPE.JSON
    }
    if (options.headers['content-type'] === REQUEST.CONTENT_TYPE.JSON) {
      options.body = JSON.stringify(data) // json解析方式
    }
    if (options.headers['content-type'] === REQUEST.CONTENT_TYPE.FORM) {
      options.body = String(params(data)) // form解析方式
    }
  } else {
    // GET 请求
    if (data) {
      const oParams = params(data)
      // console.log(encodeURIComponent(oParams) + '')
      url += (url.indexOf('?') === -1 ? '?' : '&') + oParams
    }
  }

  // 请求发出 5 秒后终止请求
  setTimeout(() => controller.abort(), REQUEST.TIMEOUT)

  return fetch(url, options)
    .then(checkStatus)
    .then(response => response.json())
    .then(checkCode)
    .catch(err => {
      console.error('err %o， err.log %o', err, oc(err).log(''))
      if (err.name === 'AbortError') {
        message.error('请求超时', 2.5)
        return null
      }
      err.msg ? message.error(err.msg, 2.5) : message.error('服务器繁忙', 2.5)
      return null
    })
}
