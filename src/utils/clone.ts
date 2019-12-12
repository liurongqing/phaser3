/**
 * 深度克隆
 * #### Example
 * ```typescript
 * import { clone } from "@/utils"
 * const data = [{ a: 1, b: 2 }]
 * const cloneData = clone(data)
 * ```
 * @category Utils
 */
export const clone = (data: any) => JSON.parse(JSON.stringify(data))
