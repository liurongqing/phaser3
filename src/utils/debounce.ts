/**
 * 防抖函数
 * 在一定的时间间隔内只执行最后一次
 * #### Example
 * ```typescript
 * import { debounce } from "@/utils"
 * const debounceFunc = debounce(()=>console.log('防抖'), 1000)
 * document.addEventListener('scroll', debounceFunc)
 * ```
 *
 * @category Utils
 */

export const debounce = (fn: Function, wait = 50, immediate?: boolean) => {
  let timer = null
  return (...args: any) => {
    timer && clearTimeout(timer)
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
