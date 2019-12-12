const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const dllConfig = require('./dll/config')
const data = require('./dll/data')

const env = process.env.NODE_ENV || 'production'
const dll_uuid = data.map(v => v.libs.join('|')).join('|')

const pw = config =>
  new Promise(resolve => {
    let module_name = Object.keys(config.entry)
    console.log('\033[40;37m' + `${module_name} 模块，开始打包... ...`)
    webpack(config, err => {
      if (err) throw err
      console.log('\033[40;36m' + `${module_name} 模块，打包成功`)
      resolve()
    })
  })

function init() {
  const lock_path = path.resolve(`./build/dll/${env}.lock`)
  fs.readFile(lock_path, function(err, data) {
    // 文件不存在或文件有变动，则创建并运行
    if (err || data.toString() !== dll_uuid) {
      fs.writeFile(lock_path, dll_uuid, function(err) {
        if (err) {
          return console.error(err)
        }
        run()
      })
    }
  })
}

init()

async function run() {
  console.log('\033[40;37m 打包 dll 文件， 开始...')
  for (let i = 0; i < dllConfig.length; i++) {
    await pw(dllConfig[i].init(env))
  }
  console.log('\033[40;37m 打包 dll 文件， 结束...')
}
