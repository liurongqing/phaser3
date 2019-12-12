import * as React from 'react'

import { Tag, Icon, Input, Tooltip, message } from 'antd'

const { useState } = React
const { Group: InputGroup } = Input

export default ({ row, item, onSave }) => {
  const [inputVisible, setInputVisible] = useState(false)
  const [nameKey, setNameKey] = useState('')
  const [nameValue, setNameValue] = useState('')

  function onConfirm() {
    // 都存在时操作
    if (nameKey.trim() && nameValue.trim()) {
      if (item.some((v: any) => v.value === nameKey.trim())) {
        message.warning('当前页面key值不能一样')
        return
      }
      onSave({
        _id: row._id,
        feature: JSON.stringify(
          item.concat({
            value: nameKey.trim(),
            title: nameValue.trim()
          })
        )
      })
      setNameKey('')
      setNameValue('')
      setInputVisible(false)
    }

    // 都不存在时操作
    if (!nameKey.trim() && !nameValue.trim()) {
      setInputVisible(false)
    }
  }
  function onClose(value: any) {
    item = item.filter((v: any) => v.value !== value)
    onSave({
      _id: row._id,
      feature: JSON.stringify(item)
    })
  }

  return (
    <>
      {inputVisible}
      {item.map((v: any, index: any) => (
        <Tooltip title={v.value} key={index}>
          <Tag color="#108ee9">
            {v.title}
            <Icon
              type="close"
              onClick={() => {
                onClose(v.value)
              }}
            />
          </Tag>
        </Tooltip>
      ))}
      {inputVisible ? (
        <>
          <InputGroup
            compact
            style={{ display: 'inline-block', width: 'auto' }}
          >
            <Input
              placeholder="key"
              style={{ width: 50 }}
              size="small"
              value={nameKey}
              onChange={e => {
                setNameKey(e.target.value)
              }}
              onBlur={onConfirm}
              onPressEnter={onConfirm}
            />
            <Input
              placeholder="value"
              style={{ width: 100 }}
              size="small"
              value={nameValue}
              onChange={e => {
                setNameValue(e.target.value)
              }}
              onBlur={onConfirm}
              onPressEnter={onConfirm}
            />
          </InputGroup>
        </>
      ) : (
        <Tag
          style={{ background: '#fff', borderStyle: 'dashed' }}
          onClick={() => {
            setInputVisible(true)
          }}
        >
          <Icon type="plus" /> 添加
        </Tag>
      )}
    </>
  )
}
