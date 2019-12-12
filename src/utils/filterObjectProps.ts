import { clone } from '@/utils'
/**
 * 过滤提取对象中想要的字段
 * #### Example
 * ```typescript
 * import { filterObjectProps } from "@/utils"
 * const data = { id: 1, age: 21, name: 'lisi'}
 * const filterData = filterObjectProps(data, ['age', 'name']) // { age: 21, name: 'lisi' }
 * ```
 * @category Utils
 */
export const filterObjectProps = (obj = {}, props = []) => {
  const data = {}
  obj = clone(obj) // 克隆是为了防止多级 copy 浅引用
  props.forEach(v => {
    data[v] = obj[v]
  })
  return data
}
