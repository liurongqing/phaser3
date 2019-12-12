const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  //   plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    port: 9099,
    historyApiFallback: true,
    contentBase: './dist',
    proxy: [
      {
        context: ['/admin', '/auth'],
        target: 'http://localhost:9001',
        changeOrigin: true
      }
    ]
  }
})
