未完善

## 动画参数

```js
// atlas、spritesheet、png 都可以做成动画
const config = {
  key: 'k', // 动画名称
  frames: scene.anims.generateFrameNames('atlas'), // 帧
  repeat: 6 // 循环次数
}
```

## 创建动画

```js
scene.anims.create(config) // 创建动画
```

## 动画属性

```js
scene.anims.isPaused // 是否暂停动画
scene.anims.currentAnim.frames // 数组下的 索引:index 进度:progress
```

## 动画方法

```js
scene.play('k') // 播放动画
scene.anims.load('walk') // 精灵加载动画
scene.anims.play('walk') // 播放动画
scene.anims.pause() // 暂停动画
scene.anims.resume() // 继续动画
scene.anims.restart() // 重新动画
scene.anims.setRepeat(7) // 循环7次
const k = scene.anims.get('k') // 获取动画
k.addFrame(scene.anims.generateFrameNames()) // 原动画再加动画
```

## 监听动画的添加

```js
scene.anims.on(Phaser.Animations.Events.ADD_ANIMATION, function() {}, scene) // 监听动画添加
```
