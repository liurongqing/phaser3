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

```js
Phaser.Input.MOUSE_DOWN // 0
Phaser.Input.MOUSE_MOVE // 1
Phaser.Input.MOUSE_UP // 2
Phaser.Input.TOUCH_START // 3
Phaser.Input.TOUCH_MOVE // 4
Phaser.Input.TOUCH_END // 5
Phaser.Input.POINTER_LOCK_CHANGE // 6
Phaser.Input.TOUCH_CANCEL // 7
Phaser.Input.MOUSE_WHEEL // 8
```

### Events

```js
Phaser.Input.Events.BOOT // 'boot'
Phaser.Input.Events.DESTROY // 'destroy'
Phaser.Input.Events.DRAG_END // 'dragend'
Phaser.Input.Events.DRAG_ENTER // 'dragenter'
Phaser.Input.Events.DRAG // 'drag'
Phaser.Input.Events.DRAG_LEAVE // 'dragleave'
Phaser.Input.Events.DRAG_OVER // 'dragover'
Phaser.Input.Events.DRAG_START // 'dragstart'
Phaser.Input.Events.DROP // 'drop'
Phaser.Input.Events.GAME_OUT // 'gameout'
Phaser.Input.Events.GAME_OVER // 'gameover'

Phaser.Input.Events.GAMEOBJECT_DOWN // 'gameobjectdown'
Phaser.Input.Events.GAMEOBJECT_DRAG_END // 'dragend'
Phaser.Input.Events.GAMEOBJECT_DRAG_ENTER // 'dragenter'
Phaser.Input.Events.GAMEOBJECT_DRAG // 'drag'
Phaser.Input.Events.GAMEOBJECT_DRAG_LEAVE // 'dragleave'
Phaser.Input.Events.GAMEOBJECT_DRAG_OVER // 'dragover'
Phaser.Input.Events.GAMEOBJECT_DRAG_START // 'dragstart'
Phaser.Input.Events.GAMEOBJECT_DROP // 'drop'
Phaser.Input.Events.GAMEOBJECT_MOVE // 'gameobjectmove'
Phaser.Input.Events.GAMEOBJECT_OUT // 'gameobjectout'
Phaser.Input.Events.GAMEOBJECT_OVER // 'gameobjectover'
Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN // 'pointerdown'
Phaser.Input.Events.GAMEOBJECT_POINTER_MOVE // 'pointermove'
Phaser.Input.Events.GAMEOBJECT_POINTER_OUT // 'pointerout'
Phaser.Input.Events.GAMEOBJECT_POINTER_OVER // 'pointerover'
Phaser.Input.Events.GAMEOBJECT_POINTER_UP // 'pointerup'
Phaser.Input.Events.GAMEOBJECT_POINTER_WHEEL // 'wheel'
Phaser.Input.Events.GAMEOBJECT_UP // 'gameobjectup'
Phaser.Input.Events.GAMEOBJECT_WHEEL // 'gameobjectwheel'

Phaser.Input.Events.MANAGER_BOOT // 'boot'
Phaser.Input.Events.MANAGER_PROCESS // 'process'
Phaser.Input.Events.MANAGER_UPDATE // 'update'
Phaser.Input.Events.POINTER_DOWN // 'pointerdown'
Phaser.Input.Events.POINTER_DOWN_OUTSIDE // 'pointerdownoutside'
Phaser.Input.Events.POINTER_MOVE // 'pointermove'
Phaser.Input.Events.POINTER_OUT // 'pointerout'
Phaser.Input.Events.POINTER_OVER // 'pointerover'
Phaser.Input.Events.POINTER_UP // 'pointerup'
Phaser.Input.Events.POINTER_UP_OUTSIDE // 'pointerupoutside'
Phaser.Input.Events.POINTER_WHEEL // 'wheel'
Phaser.Input.Events.POINTERLOCK_CHANGE // 'pointerlockchange'
Phaser.Input.Events.PRE_UPDATE // 'preupdate'
Phaser.Input.Events.SHUTDOWN // 'shutdown'
Phaser.Input.Events.START // 'start'
Phaser.Input.Events.UPDATE // 'update'
```

### Gamepad

```js
Phaser.Input.Gamepad.Configs.DUALSHOCK_4
Phaser.Input.Gamepad.Configs.SNES_USB
Phaser.Input.Gamepad.Configs.XBOX_360
Phaser.Input.Gamepad.Events.BUTTON_DOWN // down
Phaser.Input.Gamepad.Events.BUTTON_UP // up
Phaser.Input.Gamepad.Events.CONNECTED // connected
Phaser.Input.Gamepad.Events.DISCONNECTED // disconnected
Phaser.Input.Gamepad.Events.GAMEPAD_BUTTON_DOWN // down
Phaser.Input.Gamepad.Events.GAMEPAD_BUTTON_UP // up
```

### Keyboard

```js
Phaser.Input.Keyboard.ANY_KEY_DOWN // keydown
Phaser.Input.Keyboard.ANY_KEY_UP // keyup
Phaser.Input.Keyboard.COMBO_MATCH // keycombomatch
Phaser.Input.Keyboard.DOWN // down
Phaser.Input.Keyboard.KEY_DOWN // keydown-
Phaser.Input.Keyboard.KEY_UP // keyup-
Phaser.Input.Keyboard.UP // up
```

#### KeyCodes

```js
Phaser.Input.Keyboard.KeyCodes.BACKSPACE // 8
Phaser.Input.Keyboard.KeyCodes.TAB // 9
Phaser.Input.Keyboard.KeyCodes.ENTER // 13
Phaser.Input.Keyboard.KeyCodes.SHIFT // 16
Phaser.Input.Keyboard.KeyCodes.CTRL // 17
Phaser.Input.Keyboard.KeyCodes.ALT // 18
Phaser.Input.Keyboard.KeyCodes.PAUSE // 19
Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK // 20
Phaser.Input.Keyboard.KeyCodes.ESC // 27
Phaser.Input.Keyboard.KeyCodes.SPACE // 32
Phaser.Input.Keyboard.KeyCodes.PAGE_UP // 33
Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN // 34
Phaser.Input.Keyboard.KeyCodes.END // 35
Phaser.Input.Keyboard.KeyCodes.HOME // 36
Phaser.Input.Keyboard.KeyCodes.LEFT // 37
Phaser.Input.Keyboard.KeyCodes.UP // 38
Phaser.Input.Keyboard.KeyCodes.RIGHT // 39
Phaser.Input.Keyboard.KeyCodes.DOWN // 40
Phaser.Input.Keyboard.KeyCodes.PRINT_SCREEN // 42
Phaser.Input.Keyboard.KeyCodes.INSERT // 45
Phaser.Input.Keyboard.KeyCodes.DELETE // 46
Phaser.Input.Keyboard.KeyCodes.ZERO // 48
Phaser.Input.Keyboard.KeyCodes.ONE // 49
Phaser.Input.Keyboard.KeyCodes.TWO // 50
Phaser.Input.Keyboard.KeyCodes.THREE // 51
Phaser.Input.Keyboard.KeyCodes.FOUR // 52
Phaser.Input.Keyboard.KeyCodes.FIVE // 53
Phaser.Input.Keyboard.KeyCodes.SIX // 54
Phaser.Input.Keyboard.KeyCodes.SEVEN // 55
Phaser.Input.Keyboard.KeyCodes.EIGHT // 56
Phaser.Input.Keyboard.KeyCodes.NINE // 57
Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO // 96
Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE // 97
Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO // 98
Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE // 99
Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR // 100
Phaser.Input.Keyboard.KeyCodes.NUMPAD_FIVE // 101
Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX // 102
Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN // 103
Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT // 104
Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE // 105
Phaser.Input.Keyboard.KeyCodes.A // 65
Phaser.Input.Keyboard.KeyCodes.B // 66
Phaser.Input.Keyboard.KeyCodes.C // 67
Phaser.Input.Keyboard.KeyCodes.D // 68
Phaser.Input.Keyboard.KeyCodes.E // 69
Phaser.Input.Keyboard.KeyCodes.F // 70
Phaser.Input.Keyboard.KeyCodes.G // 71
Phaser.Input.Keyboard.KeyCodes.H // 72
Phaser.Input.Keyboard.KeyCodes.I // 73
Phaser.Input.Keyboard.KeyCodes.J // 74
Phaser.Input.Keyboard.KeyCodes.K // 75
Phaser.Input.Keyboard.KeyCodes.L // 76
Phaser.Input.Keyboard.KeyCodes.M // 77
Phaser.Input.Keyboard.KeyCodes.N // 78
Phaser.Input.Keyboard.KeyCodes.O // 79
Phaser.Input.Keyboard.KeyCodes.P // 80
Phaser.Input.Keyboard.KeyCodes.Q // 81
Phaser.Input.Keyboard.KeyCodes.R // 82
Phaser.Input.Keyboard.KeyCodes.S // 83
Phaser.Input.Keyboard.KeyCodes.T // 84
Phaser.Input.Keyboard.KeyCodes.U // 85
Phaser.Input.Keyboard.KeyCodes.V // 86
Phaser.Input.Keyboard.KeyCodes.W // 87
Phaser.Input.Keyboard.KeyCodes.X // 88
Phaser.Input.Keyboard.KeyCodes.Y // 89
Phaser.Input.Keyboard.KeyCodes.Z // 90
Phaser.Input.Keyboard.KeyCodes.F1 // 112
Phaser.Input.Keyboard.KeyCodes.F2 // 113
Phaser.Input.Keyboard.KeyCodes.F3 // 114
Phaser.Input.Keyboard.KeyCodes.F4 // 115
Phaser.Input.Keyboard.KeyCodes.F5 // 116
Phaser.Input.Keyboard.KeyCodes.F6 // 117
Phaser.Input.Keyboard.KeyCodes.F7 // 118
Phaser.Input.Keyboard.KeyCodes.F8 // 119
Phaser.Input.Keyboard.KeyCodes.F9 // 120
Phaser.Input.Keyboard.KeyCodes.F10 // 121
Phaser.Input.Keyboard.KeyCodes.F11 // 122
Phaser.Input.Keyboard.KeyCodes.F12 // 123
Phaser.Input.Keyboard.KeyCodes.SEMICOLON // 186
Phaser.Input.Keyboard.KeyCodes.PLUS // 187
Phaser.Input.Keyboard.KeyCodes.COMMA // 188
Phaser.Input.Keyboard.KeyCodes.MINUS // 189
Phaser.Input.Keyboard.KeyCodes.PERIOD // 190
Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH // 191
Phaser.Input.Keyboard.KeyCodes.BACK_SLASH // 220
Phaser.Input.Keyboard.KeyCodes.QUOTES // 222
Phaser.Input.Keyboard.KeyCodes.BACKTICK // 192
Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET // 219
Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET // 221
Phaser.Input.Keyboard.KeyCodes.SEMICOLON_FIREFOX // 59
Phaser.Input.Keyboard.KeyCodes.COLON // 58
Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX_WINDOWS // 60
Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX // 62
Phaser.Input.Keyboard.KeyCodes.BRACKET_RIGHT_FIREFOX // 174
Phaser.Input.Keyboard.KeyCodes.BRACKET_LEFT_FIREFOX // 175
```

## Phaser.Loader

```js
Phaser.Loader.LOADER_IDLE // 0
Phaser.Loader.LOADER_LOADING // 1
Phaser.Loader.LOADER_PROCESSING // 2
Phaser.Loader.LOADER_COMPLETE // 3
Phaser.Loader.LOADER_SHUTDOWN // 4
Phaser.Loader.LOADER_DESTROYED // 5
Phaser.Loader.FILE_PENDING // 10
Phaser.Loader.FILE_LOADING // 11
Phaser.Loader.FILE_LOADED // 12
Phaser.Loader.FILE_FAILED // 13
Phaser.Loader.FILE_PROCESSING // 14
Phaser.Loader.FILE_ERRORED // 16
Phaser.Loader.FILE_COMPLETE // 17
Phaser.Loader.FILE_DESTROYED // 18
Phaser.Loader.FILE_POPULATED // 19
```

## Phaser.Math

```js
Phaser.Math.PI2 // Math.PI * 2
Phaser.Math.TAU // Math.PI * 0.5
Phaser.Math.EPSILON // 1.0e-6
Phaser.Math.DEG_TO_RAD // Math.PI / 180
Phaser.Math.RAD_TO_DEG // 180 / Math.PI
Phaser.Math.RND // null
Phaser.Math.MIN_SAFE_INTEGER // 最小安全整数
Phaser.Math.MAX_SAFE_INTEGER // 最大安全整数
```

## Phaser.Physics

> 太多了，后面慢慢加

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
