/**
 * 处理 url 参数
 * #### Example
 * ```typescript
 * import { params } from "@/utils"
 * const oParams = params()
 * oParams.has('version') === true // true
 * oParams.get('version') === 'v1' // true
 * oParams.getAll('version') // ['v1']
 * oParams.append('version', 'v2')
 * oParams.toString() // 'version=v1&version=v2'
 * oParams.set('version', 'v3') // 'version=v3'
 * oParams.delete('version') // ''
 * ```
 * @category Utils
 */
export const params: any = (url: any = location.search) => {
  return new URLSearchParams(url)
}
