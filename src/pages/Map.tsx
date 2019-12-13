import * as React from 'react'
import { params } from '@/utils'

const { useEffect } = React

export default ({ location, history }) => {
  console.log('2...')
  useEffect(() => {
    const redirect = params(location.search).get('redirect')
    if (redirect) {
      history.push(decodeURIComponent(redirect).replace('/phaser3/', ''))
    } else {
      history.push('/dashboard')
    }
  }, [])
  return <></>
}
