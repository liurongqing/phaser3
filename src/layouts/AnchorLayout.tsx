import * as React from 'react'
import { Layout, Anchor } from 'antd'
import { Store } from '@/commons/Store'

const { Link } = Anchor
const { useContext, useMemo } = React

export default () => {
  const { state }: any = useContext(Store)
  const { anchors } = state
  const CAnchor = useMemo(() => {
    return layoutAnchor(anchors)
  }, [anchors])

  function layoutAnchor(data: any) {
    return data.map((v: any) => {
      return v.children ? (
        <Link key={v.title} href={v.href} title={v.title}>
          {layoutAnchor(v.children)}
        </Link>
      ) : (
        <Link key={v.title} href={v.href} title={v.title} />
      )
    })
  }

  return (
    <Anchor
      affix={false}
      style={{ height: 'calc(100vh - 48px)', paddingTop: 30 }}
      showInkInFixed={true}
      getContainer={() =>
        window.document.querySelector('.phaser3-content') as HTMLElement
      }
    >
      {CAnchor}
    </Anchor>
  )
}
