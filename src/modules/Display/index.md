## 简介

> 相对定位、透明度设置、混合模式、颜色处理、遮罩层、色彩设置

## Align

> 精灵相对定位

1. 正中间

   ```js
   Phaser.Display.Align.In.Center(child, parent)
   ```

1. 上中间

   ```js
   Phaser.Display.Align.In.TopCenter(child, parent)
   ```

1. 下中间

   ```js
   Phaser.Display.Align.In.BottomCenter(child, parent)
   ```

1. 左中间

   ```js
   Phaser.Display.Align.In.LeftCenter(child, parent)
   ```

1. 右中间

   ```js
   Phaser.Display.Align.In.RightCenter(child, parent)
   ```

1. 左上角

   ```js
   Phaser.Display.Align.In.TopLeft(child, parent)
   ```

1. 右上角

   ```js
   Phaser.Display.Align.In.TopRight(child, parent)
   ```

1. 左下角

   ```js
   Phaser.Display.Align.In.BottomLeft(child, parent)
   ```

1. 右下角

   ```js
   Phaser.Display.Align.In.BottomRight(child, parent)
   ```

## Alpha

> 设置精灵透明度

1. 整体设置

   ```js
   image.setAlpha(0.2)
   ```

1. 不同位置（方法）

   ```js
   // top left, top right, bottom left, bottom right
   image.setAlpha(0, 0, 1, 1)
   ```

1. 不同位置（属性）

   ```js
   image.alphaTopLeft = 0
   image.alphaTopRight = 0
   image.alphaBottomLeft = 0
   image.alphaBottomRight = 0
   ```

1. 清除透明度

   ```js
   image.clearAlpha()
   ```

1. 透明度动画

   ```js
   scene.tweens.add({
     targets: image, // 精灵
     alphaTopLeft: {
       value: 1, // 透明度
       duration: 5000, // 持续 5000ms
       ease: 'Power1', // 动画曲线
       delay: 1000 // 延迟 1000ms
     }
   })
   ```

## Blend Modes

1. 基本

   ```js
   const renderer = scene.sys.game.renderer
   const modeIndex = renderer.addBlendMode([gl.ZERO, gl.SRC_COLOR], gl.FUNC_ADD)
   image.setBlendMode(modeIndex)
   ```

## Color

1. 内置方法

   ```js
   const color = new Phaser.Display.Color(150, 0, 0)
   color.brighten(10) // 亮度
   color.darken(10) // 变暗
   color.lighten(10) // 减轻颜色
   ```

1. 颜色转换

   ```js
   // Hex 格式转 Color 对象
   Phaser.Display.Color.HexStringToColor('#ff0000')

   // RGB 格式转 Color 对象
   Phaser.Display.Color.RGBStringToColor('rgba(255, 0, 0, 1)')

   // Value
   Phaser.Display.Color.ValueToColor(0xff0000)
   Phaser.Display.Color.ValueToColor('#ff0000')
   Phaser.Display.Color.ValueToColor('#f00')
   Phaser.Display.Color.ValueToColor('rgba(255, 0, 0, 1)')
   ```

1. 随机颜色

   ```js
   color.random(50)
   color.randomGray(50) // 随机灰色
   ```

1. HSV 颜色

   ```js
   Phaser.Display.Color.HSVColorWheel()
   ```

## Masks

1. 创建 mask 方式： `createBitmapMask()`

   ```js
   const mask = image.createBitmapMask()
   ```

1. 创建 mask 方式： `createGeometryMask()`

   ```js
   const shape = scene.make.graphics()
   const mask = shape.createGeometryMask()
   ```

1. 创建 mask 方式：`Phaser.Display.Masks.BitmapMask()`

   ```js
   const sprite = scene.make.sprite({
     x: 100,
     y: 100,
     key: 'sp',
     add: false
   })
   new Phaser.Display.Masks.BitmapMask(this, sprite)
   ```

1. 使用 mask

   ```js
   graphics.mask = mask
   graphics.setMask(mask)
   sprite.setMask(mask)
   particles.setMask(mask)
   ```

## Tint

1. 整体设置

   ```js
   image.setTint(0xff0000)
   ```

1. 不同位置

   ```js
   // top left, top right, bottom left, bottom right
   image.setTint(0xff0000, 0xffff00, 0x00ffff0, 0xff00ff)
   ```

1. 完全填充

   ```js
   image.setTintFill(0xff0000) // 给精灵填充颜色，精灵只剩下一个形状
   ```

1. 清除

   ```js
   image.clearTint()
   ```
