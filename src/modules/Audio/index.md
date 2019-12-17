## 音频配置

```js
const config = {
  audio: {
    disableWebAudio: true, // 默认是WebAudio，禁用则为HTML Audio
    noAudio: true // 不使用 Audio
  }
}
```

## 加载音频

```js
scene.load.audio('audio', ['audio.ogg', 'audio.mp3'], { instances: 2 })
scene.load.audioSprite('audio', 'audio.json', ['audio.ogg', 'audio.mp3'])
```

## 添加音频

```js
const audio = scene.sound.add('audio', { loop: true }) // 获取音频
const audios = scene.cache.json.get('audio').spritemap // 获取所有音频
const audio = scene.sound.playAudioSprite('audio', 'name') // 获取片段音频
```

## 音频属性设置（精灵）

```js
audio.rate = 1.5 // 加快速率
audio.detune = 600 // 音色偏移
audio.rate = 1 // 减慢速率
audio.detune = 0 // 音色偏移
audio.mute = true // 静音
audio.volume = 0.5 // 音量
audio.seek = 0 // 跳跃到新位置
```

## 音频属性设置（场景）

```js
scene.sound.rate = 1.5 // 加快速率
scene.sound.detune = 600 // 音色偏移
scene.sound.rate = 1 // 减慢速率
scene.sound.detune = 0 // 音色偏移
scene.sound.mute = true // 静音
scene.sound.volume = 0.5 // 音量
scene.sound.seek = 0 // 跳跃到新位置
```

## 音频方法调用（精灵）

```js
audio.play() // 播放
audio.pause() // 暂停
audio.resume() // 继续
audio.stop() // 停止
```

## 音频方法调用（场景）

```js
scene.sound.pauseAll() // 全部暂停
scene.sound.resumeAll() // 全部恢复
scene.sound.stopAll() // 全部停止
```

## 音频监听（精灵）

```js
audio.addMarker({
  name: 'loop',
  start: 0,
  duration: 7.68,
  config: { loop: true }
}) // 添加标识
audio.play('loop', { delay: 0 }) // 循环延迟时间，播放
audio.once('looped', function(sound) {}) // 监听循环结束时
audio.once('complete', function(sound) {}) // 原 ended 改为 complete 音频播放结束回调
```

## 音频监听（场景）

```js
scene.sound.once('mute', function(soundManager, value) {}) // 监听静音
scene.sound.once('volume', function(soundManager, value) {}) // 监听音量
scene.sound.once('pauseall', function(soundManager, value) {}) // 监听全部暂停
scene.sound.once('resumeall', function(soundManager, value) {}) // 监听全部恢复
scene.sound.once('stopall', function(soundManager, value) {}) // 监听全部停止
scene.sound.once('unlocked', function(soundManager) {}) // 监听解锁
```
