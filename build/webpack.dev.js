const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9099,
    historyApiFallback: true,
    contentBase: './docs',
    proxy: [
      {
        context: ['/admin', '/auth'],
        target: 'http://localhost:9001',
        changeOrigin: true
      }
    ]
  }
})
