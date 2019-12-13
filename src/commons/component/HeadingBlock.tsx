// HeadingBlock
import * as React from 'react'
import { Store } from '@/commons/Store'
import { debounce } from '@/utils'
const { useState, useEffect, useContext } = React

let data = []
const debounceSetData = debounce((dispatch: any) => {
  dispatch({
    type: 'SET_ANCHORS',
    data: {
      anchors: data
    }
  })
  data = []
}, 500)

export default ({ level, children }) => {
  const { dispatch }: any = useContext(Store)

  useEffect(() => {
    let singleData = {
      href: `#${children[0].props.value}`,
      title: children[0].props.value
    }
    data.push(singleData)
    debounceSetData(dispatch)
  }, [])

  console.log(data)
  return React.createElement(
    `h${level}`,
    {
      id: children[0].props.value
    },
    children
  )
}
