const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const env = process.env.NODE_ENV || 'production'
const isProduction = env === 'production'

let data = require('./dll/data')
data = data.map(v => v.name)

/**
 * 文件处理
 */
const files = fs.readdirSync(path.resolve(`./build/dll/res/${env}`))

/**
 * dll 引用处理
 */
const arrManifest = files.filter(function(v) {
  return /\.json$/.test(v)
})
let arrAssets = files.filter(function(v) {
  return /\.js$/.test(v)
})

// 处理引用顺序
let t
arrAssets = data.map(v => {
  t = arrAssets.find(av => av.indexOf(v) > -1)
  if (t) {
    v = t
  }
  return v
})

let manifests = []
arrManifest.map(function(v) {
  manifests.push(
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(`./build/dll/res/${env}/${v}`))
    })
  )
})

const config = {
  context: path.resolve('./src'),
  entry: './app.tsx',
  output: {
    publicPath: isProduction ? '/phaser3' : '/',
    path: path.resolve('./docs'),
    filename: 'js/app.[hash:8].js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    ...manifests,
    new CopyPlugin([
      {
        from: `../build/dll/res/${env}/*.js`,
        to: './js/',
        flatten: true
      }
    ]),
    new CopyPlugin([
      {
        from: '../public/**',
        to: './',
        flatten: true
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      venders: arrAssets,
      _root: isProduction ? '/phaser3/' : '/'
    }),
    new webpack.DefinePlugin({
      WEBPACK_PRODUCTION: JSON.stringify(isProduction)
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('./src')
    }
  }
}

if (isProduction) {
  config.plugins.unshift(new CleanWebpackPlugin())
}
module.exports = config
