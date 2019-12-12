/**
 * 去重函数
 * #### Example
 * ```typescript
 * import { unique } from "@/utils"
 * const a = unique([1, 2, 2, 3]) // [1, 2, 3]
 * const o = unique([{ age: 1 }, { age: 1 }, { age: 2 }], 'age') // [{ age: 1 }, { age: 2 }]
 * ```
 * @category Utils
 */

export const unique = (arr: any[], prop?: any) => {
  return arr.filter((v, index) => {
    return prop
      ? arr.findIndex(fv => fv[prop] === v[prop]) === index
      : arr.indexOf(v) === index
  })
}
