/**
 * 将有 ref 属性（即有依赖的）放在最后编译
 */
module.exports = [
  {
    name: 'react',
    libs: ['react', 'react-dom', 'react-router-dom']
  },
  {
    name: 'lib',
    libs: ['moment']
  },
  {
    name: 'antd',
    libs: ['antd'],
    ref: ['react', 'lib']
  }
]
