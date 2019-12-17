## 配置

```js
const config = {
  type: Phaser.AUTO, // 渲染方式 Phaser.CANVAS Phaser.WEBGL Phaser.HEADLESS
  parent: 'app', // 父容器
  canvas: myCanvas, // 自定义
  context: myContext, // 自定义
  seed: [(Date.now() * Math.random()).toString()], // 随机种子
  title: 'test', // 控制台中内容
  url: 'https://www.hemmao.com', // 控制台中的内容
  version: '1.0.1',
  banner: false, // 隐藏
  pixelArt: true, // 像素模式， 像素更清晰
  roundPixels: true, // 取整
  transparent: true, // 透明
  banner: {
    // 控制台中内容
    text: '#ffffff',
    background: ['#fff200', '#38f0e8'],
    hidePhaser: true
  }
}
```

## 获取配置信息

```js
game.config.gameTitle // 获取控制台标题
game.config.gameURL // 获取控制台URL
```

## 创建游戏

```js
new Phaser.Game(config) // 创建游戏
new Phaser.Game(config2) // 创建多个游戏实例
```

## 销毁游戏

```js
scene.sys.game.destroy(true) // 销毁游戏
```
