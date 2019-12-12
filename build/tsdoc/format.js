const tsdoc = require('@microsoft/tsdoc')
const { DocNode, DocExcerpt } = tsdoc
const os = require('os')

function renderDocNode(docNode) {
  let result = ''
  if (docNode) {
    if (docNode instanceof DocExcerpt) {
      result += docNode.content.toString()
    }
    for (const childNode of docNode.getChildNodes()) {
      result += renderDocNode(childNode)
    }
  }
  return result
}

function renderDocNodes(docNodes) {
  let result = ''
  for (const docNode of docNodes) {
    result += renderDocNode(docNode)
  }
  return result
}

exports.Formatter = {
  renderDocNode,
  renderDocNodes
}
