import * as React from 'react'
import { Layout, Anchor } from 'antd'
const { Link } = Anchor

export default () => {
  return (
    <Anchor
      affix={false}
      style={{ height: 'calc(100vh - 48px)', paddingTop: 30 }}
      showInkInFixed={true}
      getContainer={() =>
        window.document.querySelector('.phaser3-content') as HTMLElement
      }
    >
      <Link href="#aaa" title="aaa" />
      <Link href="#bbb" title="bbb" />
      <Link href="#ccc" title="ccc" />
      <Link href="#ddd" title="ddd">
        <Link href="#eee" title="eee" />
        <Link href="#fff" title="fff" />
      </Link>
    </Anchor>
  )
}
