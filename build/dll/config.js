const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const data = require('./data')

function getSingleConfig(item, index, env) {
  let config = {
    context: path.resolve('./src'),
    mode: env,
    entry: {
      [item.name]: item.libs
    },
    output: {
      path: path.resolve(`./build/dll/res/${env}`),
      filename: '[name].[hash:8].js',
      library: '[name]'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(`./build/dll/res/${env}`, '[name].mainfest.json'),
        name: '[name]'
      })
    ]
  }

  if (item.ref) {
    item.ref.forEach(v => {
      config.plugins.push(
        new webpack.DllReferencePlugin({
          manifest: require(path.resolve(
            `./build/dll/res/${env}/${v}.mainfest.json`
          ))
        })
      )
    })
  }

  if (env === 'production') {
    config.optimization = {
      minimizer: [
        new UglifyJSPlugin({
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            compress: true,
            ie8: false,
            ecma: 5,
            output: { comments: false },
            warnings: false
          },
          warningsFilter: () => false
        })
      ]
    }
  }
  if (index === 0) {
    // 添加清除组件
    config.plugins.unshift(new CleanWebpackPlugin())
  }
  return config
}

module.exports = data.map((v, index) => {
  return {
    init: env => {
      return getSingleConfig(v, index, env)
    }
  }
})
