## Phaser

## Phaser.Actions

```js
Phaser.Actions.Angle(items, value [,step] [,index] [,direction]) // 批量操作角度
Phaser.Actions.Call(items, callback, context) // 遍历回调
Phaser.Actions.GetFirst(items, compare [,index]) // 查找第一个符合属性值为 compare 属性的对象
Phaser.Actions.GetLast(items, compare [,index]) //  查找最后一个符合属性值为 compare 属性的对象
Phaser.Actions.GridAlign(items, options) // 对数组元素排列
Phaser.Actions.IncAlpha(items, value [,step] [,index] [,direction]) // 设置透明度
Phaser.Actions.IncXY(items, x [,y] [,stepX] [,stepY] [,index] [,direction]) // 批量设置 x、y 坐标
Phaser.Actions.IncX(items, value [,step] [,index] [,direction]) // 批量设置 x 坐标
Phaser.Actions.IncY(items, value [,step] [,index] [,direction]) // 批量设置 y 坐标
Phaser.Actions.PlaceOnCircle(items, circle [,startAngle] [,endAngle]) // 在圆轨迹上置放精灵
Phaser.Actions.PlaceOnEllipse(items, ellipse [,startAngle] [,endAngle]) // 在椭圆轨迹上置放精灵
Phaser.Actions.PlaceOnLine(items, line) // 在线轨迹上置放精灵
Phaser.Actions.PlaceOnRrectangle(items, rect [,shift]) // 在矩形轨迹置放精灵
Phaser.Actions.PlaceOnTriangle(items, triangle [,stepRate]) // 在三角形轨迹置放精灵
Phaser.Actions.PlayAnimation(items, key [,startFrame]) // 播放动画
Phaser.Actions.PropertyValueInc(items, key, value [,step] [,index] [,direction])// 递增属性值
Phaser.Actions.PropertyValueSet(items, key, value [,step] [,index] [,direction]) // 设置属性值
Phaser.Actions.RandomCircle(items, circle) // 精灵随机置放在圆圈内
Phaser.Actions.RandomEllipse(items, ellipse) // 精灵随机置放在椭圆内
Phaser.Actions.RandomLine(items, line) // 精灵随机置放在线上
Phaser.Actions.RandomRectangle(items, rect) // 精灵随机置放在矩形中
Phaser.Actions.RandomTriangle(items, triangle) // 精灵随机置放在三角形中
Phaser.Actions.Rotate(items, value [,step] [,index] [,direction]) // 精灵自旋转
Phaser.Actions.RotateAround(items, point, angle) // 精灵在圆圈内绕圆心旋转
Phaser.Actions.RotateAroundDistance(items, point, angle, distance) // 精灵在圆圈轨迹上绕圆心旋转
Phaser.Actions.ScaleXY(items, scaleX [,scaleY] [,stepX] [,stepY] [,index] [,direction])// 缩放
Phaser.Actions.ScaleX(items, value [,step] [,index] [,direction]) // 横向缩放精灵
Phaser.Actions.ScaleY(items, value [,step] [,index] [,direction]) // 纵向缩放精灵
Phaser.Actions.SetAlpha(items, value [,step] [,index] [,direction]) // 设置透明度
Phaser.Actions.SetBlendMode(items, value [,index] [,direction]) // 设置混合模式
Phaser.Actions.SetDepth(items, value [,step] [,index] [,direction]) // 设置层级
Phaser.Actions.SetHitArea(items, hitArea, hitAreaCallback) // 输入指定区域触发
Phaser.Actions.SetOrigin(items, originX [,originY] [,stepX] [,stepY] [,index] [,direction])
Phaser.Actions.SetRotation(items, value [,step] [,index] [,direction]) // 设置旋转
Phaser.Actions.SetScale(items, scaleX [,scaleY] [,stepX] [,stepY] [,index] [,direction])
Phaser.Actions.SetScaleX(items, value [,step] [,index] [,direction])
Phaser.Actions.SetScaleY(items, value [,step] [,index] [,direction])
Phaser.Actions.SetScrollFactor(items, scrollFactorX [,scrollFactorY] [,stepX] [,stepY] [,index] [,direction])
Phaser.Actions.SetScrollFactorX(items, value [,step] [,index] [,direction])
Phaser.Actions.SetScrollFactorY(items, value [,step] [,index] [,direction])
Phaser.Actions.SetTint(items, topLeft [,topRight] [,bottomLeft] [,bottomRight]) // 色彩
Phaser.Actions.SetVisible(items, value [,index] [,direction]) // 隐藏显示
Phaser.Actions.SetXY(items, x [,y] [,stepX] [,stepY] [,index] [,direction])
Phaser.Actions.SetX(items, value [,step] [,index] [,direction])
Phaser.Actions.SetY(items, value [,step] [,index] [,direction])
Phaser.Actions.ShiftPosition(items, x, y [,direction] [,output]) // 变换位置
Phaser.Actions.Shuffle(items) // 洗牌
Phaser.Actions.SmootherStep(items, property, min, max [,inc]) // 平滑过渡设置值
Phaser.Actions.SmoothStep(items, property, min, max [,inc]) // 平滑过度设置值
Phaser.Actions.Spread(items, property, min, max [,inc]) // 传播过渡2个值
Phaser.Actions.ToggleVisible(items) // 切换显示状态
Phaser.Actions.WrapInRectangle(items, rect [,padding]) // 在矩形内
```

## Phaser.Animations

### Phaser.Animation
### Phaser.AnimationFrame
### Phaser.AnimationManager

### Phaser.Animations.Events

```js

```

## Phaser.BlendModes

## Phaser.Cache

## Phaser.Cameras

## Phaser.Core

## Phaser.Create

## Phaser.Curves

## Phaser.Data

## Phaser.Device

## Phaser.Display

## Phaser.DOM

## Phaser.Events

## Phaser.GameObjects

## Phaser.Geom

```js
Phaser.Geom.Circle.Clone(circle) // 克隆一个圆
Phaser.Geom.Circle.ContainsPoint(circle, point) // 点是否在圆中
Phaser.Geom.Circle.ContainsRect(circle, rect) // 矩形是否在圆中
Phaser.Geom.Circle.CopyFrom(bigCircle, smallCircle) // 小圆填充到大圆中
Phaser.Geom.Circle.Equals(circle1, circle2) // 比较两圆大小是否相等
Phaser.Geom.Circle.OffsetPoint(circle, point) // 圆相对点的纵横偏移
Phaser.Geom.Circle.Offset(circle, xOffset, yOffset) // 同 OffsetPoint
Phaser.Geom.Circle.GetBounds(circle) // 获取圆的外层矩形对象
Phaser.Geom.Circle.CircumferencePoint(circle, Phasr.Math.PI2, point) // 在圆上的点，可以是矩形、圆形
```

## Phaser.Input

## Phaser.Loader

## Phaser.Math

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
