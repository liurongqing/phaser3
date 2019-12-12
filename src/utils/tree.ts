import { clone, filterObjectProps } from '@/utils'
import { unique } from './unique'
/**
 * 遍历成树结构
 * #### Example
 * ```typescript
 * import { tree } from "@/utils"
 * const data = [
 *  { id: 1, age: 10, name: 'lisi', parentId: 0 },
 *  { id: 2, age: 20, name: 'lisi20', parentId: 0},
 *  { id: 3, age: 30, name: 'lisi30', parentId: 2}
 * ]
 * const treeData = tree(
 * {
 *  data: data,
 *  parents: { value: '0', field: 'parentId' },
 *  columns: { id: ['value','key'] },
 *  fields: ['id', 'value']
 * }
 * )
 * ```
 * @category Utils
 * @param data 需要处理的数组对象
 * @param parents 一级的父值与字段名如： `{ value: 0, field: 'parentId' }`
 * @param columns 需要的新字段，从老字段中取, 如：想要个title值，从value中取：`{ value: 'title' }`
 * @param fields 只取部分字段如： `['id', 'name']`
 */
export const tree = ({
  data = [],
  parents = { value: '0', field: 'parentId' },
  columns = null,
  fields = null
} = {}) => {
  const newData = clone(data)
  const getTree = (data: any, pid: any) => {
    let tree = []
    for (let i = 0; i < data.length; i++) {
      if (data[i][parents.field] === pid) {
        data[i].children = getTree(data, data[i]._id)
        if (data[i].children.length == 0) {
          delete data[i].children
        }
        if (columns) {
          for (let j in columns) {
            if (Array.isArray(columns[j]) && columns[j].length > 0) {
              columns[j].forEach((v: any) => {
                data[i][v] = data[i][j]
              })
            } else {
              data[i][columns[j]] = data[i][j]
            }
          }
        }

        tree.push(
          fields
            ? filterObjectProps(data[i], unique(fields.concat('children')))
            : data[i]
        )
      }
    }
    return tree
  }
  return getTree(newData, parents.value)
}
