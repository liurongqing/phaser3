/**
 * 链式取值
 * #### Example
 * ```typescript
 * import { oc } from "@/utils"
 * const o = { a: 1 }
 * oc(o).a(0)
 * ```
 * @category Utils
 */

export const oc = (obj: any, path = []) => {
  return new Proxy(() => {}, {
    get(target, property) {
      return oc(obj, path.concat(property))
    },
    apply(target, self, args) {
      let val = obj
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined) break
        val = val[path[i]]
      }
      if (val === null || val === undefined) {
        val = args[0]
      }
      return val
    }
  })
}
