/**
 * 节流函数
 * 在一定的时间间隔内只能执行一次
 * #### Example
 * ```typescript
 * import { throttle } from "@/utils"
 * const throttleFunc = throttle(()=>{console.log('节流函数')}, 1000)
 * document.addEventListener('scroll', throttleFunc)
 * ```
 * @category Utils
 */

export const throttle = (fn: Function, wait = 1000) => {
  let previous = 0
  return (...args: any) => {
    let now = Date.now()
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}
