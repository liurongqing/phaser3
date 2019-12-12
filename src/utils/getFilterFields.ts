/**
 *
 * @param data {a: 1}
 * @param type
 */
import { filterObjectProps } from './filterObjectProps'

export const getFilterFields = (data: any, type: any, replace: boolean) => {
  let tempData: any = filterObjectProps(
    data,
    Object.keys(data).filter(v => v.indexOf(type) === 0)
  )
  if (!replace) {
    return tempData
  }

  let newData = {}
  for (let i in tempData) {
    newData[i.replace(type, '')] = tempData[i]
  }
  return newData
}
