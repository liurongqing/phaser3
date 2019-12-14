## 设置数据（精灵）

```js
sprite.setDataEnabled() // 开启数据功能
sprite.data.set('data', 10) // 设置数据
sprite.data.get('data') // 读取数据
sprite.data.values.data = 20 // 更改数据
sprite.data.query(/^10/) // 查询数据
```

## 设置数据（场景）

```js
scene.setDataEnabled() // 开启数据功能
scene.data.set('data', 10) // 设置数据
scene.data.get('data') // 读取数据
scene.data.values.data = 20 // 更改数据
scene.data.query(/^10/) // 查询数据
```

## 设置多个字段

```js
sprite.setData({ name: 'gem', level: 2 }) // 设置多个数据
sprite.setData('name', 'gem') // 设置单个数据
sprite.getData('name') // 获取数据
```

## 新数据添加监听

```js
sprite.on('changedata-data', (gameObject, value) => {}) // 监听 data 字段变化
sprite.on('changedata', (gameObject, key, value) => {}) // 监听数据变化
sprite.on('setdata', (gameObject, key, value) => {}) // 监听新字段设置
```
