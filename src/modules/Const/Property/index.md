## Phaser

```js
Phaser.AUTO // 0 设置渲染类型
Phaser.CANVAS // 1 canvas 渲染
Phaser.WEBGL // 2 webgl 渲染
Phaser.HEADLESS // 3 无头渲染
Phaser.CSSBlendModes // 混合模式为 css 混合模式
Phaser.NONE // 4 方向常量
Phaser.UP // 5 方向常量
Phaser.DOWN // 6 方向常量
Phaser.LEFT // 7 方向常量
Phaser.RIGHT // 8 方向常量
Phaser.FOREVER // -1 永远不断
Phaser.VERSION // 版本号
```

## Phaser.Actions

> 暂无

## Phaser.Animations

```js
Phaser.Animations.Events.ADD_ANIMATION // add 添加动画回调
Phaser.Animations.Events.ANIMATION_COMPLETE // complete 动画结束回调
Phaser.Animations.Events.ANIMATION_REPEAT // repeat 循环动画回调
Phaser.Animations.Events.ANIMATION_RESTART // restart 重新开始动画回调
Phaser.Animations.Events.ANIMATION_START // start 动画开始时回调
Phaser.Animations.Events.PAUSE_ALL // pauseall 暂停所有动画时回调
Phaser.Animations.Events.RESUME_ALL // resumeall 恢复所有动画时回调
Phaser.Animations.Events.REMOVE_ANIMATION // remove 动画移除时回调

Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE // animationcomplete 精灵播放完动画回调
Phaser.Animations.Events.SPRITE_ANIMATION_REPEAT // animationrepeat 精灵重复播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_RESTART // animationrestart 精灵重新播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_START // animationstart 精灵播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_UPDATE // animationupdate 精灵更新回调

Phaser.Animations.Events.SPRITE_ANIMATION_KEY_COMPLETE // animationcomplete- 特定精灵播放完动画回调
Phaser.Animations.Events.SPRITE_ANIMATION_KEY_REPEAT // animationrepeat- 特定精灵重复播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_KEY_RESTART // animationrestart- 特定精灵重新播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_KEY_START // animationstart- 特定精灵播放回调
Phaser.Animations.Events.SPRITE_ANIMATION_KEY_UPDATE // animationupdate- 特定精灵更新回调
```

## Phaser.BlendModes

```js
Phaser.BlendModes.SKIP_CHECK // -1 跳过混合模式
Phaser.BlendModes.NORMAL // 0 正常混合模式 canvas webgl
Phaser.BlendModes.ADD // 1 添加混合模式 canvas webgl
Phaser.BlendModes.MULTIPLY // 2 复制混合模式 canvas webgl
Phaser.BlendModes.SCREEN // 3 屏幕混合模式 canvas webgl
Phaser.BlendModes.OVERLAY // 4 叠加混合模式 canvas
Phaser.BlendModes.DARKEN // 5 高暗混合模式 canvas
Phaser.BlendModes.LIGHTEN // 6 调亮混合模式 canvas
Phaser.BlendModes.COLOR_DODGE // 7 颜色减淡混合模式 canvas
Phaser.BlendModes.COLOR_BURN // 8 颜色加深混合模式 canvas
Phaser.BlendModes.HARD_LIGHT // 9 硬光混合模式 canvas
Phaser.BlendModes.SOFT_LIGHT // 10 柔光混合模式 canvas
Phaser.BlendModes.DIFFERENCE // 11 不同的混合模式 canvas
Phaser.BlendModes.EXCLUSION // 12 排除混合模式 canvas
Phaser.BlendModes.HUE // 13 色调混合模式 canvas
Phaser.BlendModes.SATURATION // 14 饱和混合模式 canvas
Phaser.BlendModes.COLOR // 15 颜色混合模式 canvas
Phaser.BlendModes.LUMINOSITY // 16 亮度混合模式 canvas
Phaser.BlendModes.ERASE // 17 Alpha 擦除混合模式 canvas webgl
Phaser.BlendModes.SOURCE_IN // 18 源混合模式 canvas
Phaser.BlendModes.SOURCE_OUT // 19 源输出混合模式 canvas
Phaser.BlendModes.SOURCE_ATOP // 20 源输出混合模式 canvas
Phaser.BlendModes.DESTINATION_OVER // 21 目标-结束混合模式 canvas
Phaser.BlendModes.DESTINATION_IN // 22 目的地-在混合模式 canvas
Phaser.BlendModes.DESTINATION_OUT // 23 目标输出混合模式 canvas
Phaser.BlendModes.DESTINATION_ATOP // 24 目标输出混合模式 canvas
Phaser.BlendModes.LIGHTER // 25 调亮混合模式 canvas
Phaser.BlendModes.COPY // 26 复制混合模式 canvas
Phaser.BlendModes.XOR // 27 Xor 混合模式 canvas
```

## Phaser.Cache

```js
Phaser.Cache.Events.ADD // add
Phaser.Cache.Events.REMOVE // remove
```

## Phaser.Cameras

```js
Phaser.Cameras.Scene2D.Events.DESTROY // cameradestroy 销毁时
Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE // camerafadeincomplete fadein
Phaser.Cameras.Scene2D.Events.FADE_IN_START // camerafadeinstart   fadeinstart
Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE // camerafadeoutcomplete fadeout
Phaser.Cameras.Scene2D.Events.FADE_OUT_START // camerafadeoutstart fadeoutstart
Phaser.Cameras.Scene2D.Events.FLASH_COMPLETE // cameraflashcomplete flash
Phaser.Cameras.Scene2D.Events.FLASH_START // cameraflashstart flashstart
Phaser.Cameras.Scene2D.Events.PAN_COMPLETE // camerapancomplete
Phaser.Cameras.Scene2D.Events.PAN_START // camerapanstart
Phaser.Cameras.Scene2D.Events.POST_RENDER // postrender
Phaser.Cameras.Scene2D.Events.PRE_RENDER // prerender
Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE // camerashakecomplete
Phaser.Cameras.Scene2D.Events.SHAKE_START // camerashakestart
Phaser.Cameras.Scene2D.Events.ZOOM_COMPLETE // camerazoomcomplete
Phaser.Cameras.Scene2D.Events.ZOOM_START // camerazoomstart
```

## Phaser.Core

```js
Phaser.Core.Events.BLUR // blur
Phaser.Core.Events.BOOT // boot
Phaser.Core.Events.CONTEXT_LOST // contextlost
Phaser.Core.Events.CONTEXT_RESTORED // contextrestored
Phaser.Core.Events.DESTROY // destroy
Phaser.Core.Events.FOCUS // focus
Phaser.Core.Events.HIDDEN // hidden
Phaser.Core.Events.PAUSE // pause
Phaser.Core.Events.POST_RENDER // postrender
Phaser.Core.Events.POST_STEP // poststep
Phaser.Core.Events.PRE_RENDER // prerender
Phaser.Core.Events.PRE_STEP // prestep
Phaser.Core.Events.READY // ready
Phaser.Core.Events.RESUME // resume
Phaser.Core.Events.STEP // step
Phaser.Core.Events.VISIBLE // visible
```

## Phaser.Create

> 暂无

## Phaser.Curves

> 暂无

## Phaser.Data

```js
Phaser.Data.Events.CHANGE_DATA // changedata
Phaser.Data.Events.CHANGE_DATA_KEY // changedata-
Phaser.Data.Events.REMOVE_DATA // removedata
Phaser.Data.Events.SET_DATA // setdata
```

## Phaser.Device

```js
Phaser.Device.Audio
Phaser.Device.Browser
Phaser.Device.CanvasFeatures
Phaser.Device.Features
Phaser.Device.Fullscreen
Phaser.Device.Input
Phaser.Device.OS
Phaser.Device.Video
```

## Phaser.Display

### Align

```js
Phaser.Display.Align.TOP_LEFT // 0
Phaser.Display.Align.TOP_CENTER // 1
Phaser.Display.Align.TOP_RIGHT // 2
Phaser.Display.Align.LEFT_TOP // 3
Phaser.Display.Align.LEFT_CENTER // 4
Phaser.Display.Align.LEFT_BOTTOM // 5
Phaser.Display.Align.CENTER // 6
Phaser.Display.Align.RIGHT_TOP // 7
Phaser.Display.Align.RIGHT_CENTER // 8
Phaser.Display.Align.RIGHT_BOTTOM // 9
Phaser.Display.Align.BOTTOM_LEFT // 10
Phaser.Display.Align.BOTTOM_CENTER // 11
Phaser.Display.Align.BOTTOM_RIGHT // 12
```

### Bounds

### Canvas

### Color

### Masks

## Phaser.DOM

## Phaser.Events

## Phaser.GameObjects

### BitmapText

```js
Phaser.GameObjects.BitmapText.ALIGN_LEFT // 0
Phaser.GameObjects.BitmapText.ALIGN_CENTER // 1
Phaser.GameObjects.BitmapText.ALIGN_RIGHT // 2
Phaser.GameObjects.BitmapText.ParseFromAtlas // function
Phaser.GameObjects.BitmapText.ParseXMLBitmapFont // function
```

### Events

```js
Phaser.GameObjects.Events.DESTROY // destroy
Phaser.GameObjects.Events.VIDEO_COMPLETE // complete
Phaser.GameObjects.Events.VIDEO_CREATED // created
Phaser.GameObjects.Events.VIDEO_ERROR // error
Phaser.GameObjects.Events.VIDEO_LOOP // loop
Phaser.GameObjects.Events.VIDEO_PLAY // play
Phaser.GameObjects.Events.VIDEO_SEEKED // seeked
Phaser.GameObjects.Events.VIDEO_SEEKING // seeking
Phaser.GameObjects.Events.VIDEO_STOP // stop
Phaser.GameObjects.Events.VIDEO_TIMEOUT // timeout
Phaser.GameObjects.Events.VIDEO_UNLOCKED // unlocked
```

### RetroFont

```js
Phaser.GameObjects.RetroFont.TEXT_SET1
Phaser.GameObjects.RetroFont.TEXT_SET2
Phaser.GameObjects.RetroFont.TEXT_SET3
Phaser.GameObjects.RetroFont.TEXT_SET4
Phaser.GameObjects.RetroFont.TEXT_SET5
Phaser.GameObjects.RetroFont.TEXT_SET6
Phaser.GameObjects.RetroFont.TEXT_SET7
Phaser.GameObjects.RetroFont.TEXT_SET8
Phaser.GameObjects.RetroFont.TEXT_SET9
Phaser.GameObjects.RetroFont.TEXT_SET10
Phaser.GameObjects.RetroFont.TEXT_SET11
```

## Phaser.Geom

```js
Phaser.Geom.CIRCLE // 0
Phaser.Geom.ELLIPSE // 1
Phaser.Geom.LINE // 2
Phaser.Geom.POINT // 3
Phaser.Geom.POLYGON // 4
Phaser.Geom.RECTANGLE // 5
Phaser.Geom.TRIANGLE // 6
```

## Phaser.Input

## Phaser.Loader

## Phaser.Math

```js
Phaser.Math.PI2 // 2π
```

## Phaser.Physics

## Phaser.Plugins

## Phaser.Renderer

## Phaser.Scale

## Phaser.ScaleModes

## Phaser.Scenes

## Phaser.Sound

## Phaser.Structs

## Phaser.Textures

## Phaser.Tilemaps

## Phaser.Time

## Phaser.Tweens

## Phaser.Types

## Phaser.Utils
