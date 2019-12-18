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

> 暂无

## Phaser.BlendModes

## Phaser.Cache

## Phaser.Cameras

## Phaser.Core

## Phaser.Create

```js
Phaser.Create.Palettes.ARNE16() // 调色板
Phaser.Create.Palettes.C64() // 调色板
Phaser.Create.Palettes.CGA() // 调色板
Phaser.Create.Palettes.JMP() // 调色板
Phaser.Create.Palettes.MSX() // 调色板
```

## Phaser.Curves

> 暂无

## Phaser.Data

> 暂无

## Phaser.Device

> 暂无

## Phaser.Display

### Align

> 对齐

#### In

> 在一个对象内

```js
Phaser.Display.Align.In.BottomLeft(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.BottomRight(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopLeft(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopRight(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.LeftCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.RightCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.BottomCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.Center(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.QuickSet(childObject, parentObject, ALIGN_CONST [,offsetX] [,offsetY])
```

### To

> 在一个对象外侧

```js
Phaser.Display.Align.In.BottomCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.BottomLeft(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.BottomRight(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.LeftCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.LeftTop(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.LeftBottom(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.RightCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.RightTop(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.RightBottom(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopCenter(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopLeft(childObject, parentObject [,offsetX] [,offsetY])
Phaser.Display.Align.In.TopRight(childObject, parentObject [,offsetX] [,offsetY])
```

### Bounds

> 界限

```js
Phaser.Display.Bounds.CenterOn(gameObject, x, y)
Phaser.Display.Bounds.GetBottom(gameObject)
Phaser.Display.Bounds.GetCenterY(gameObject)
Phaser.Display.Bounds.GetLeft(gameObject)
Phaser.Display.Bounds.GetRight(gameObject)
Phaser.Display.Bounds.GetOffsetX(gameObject)
Phaser.Display.Bounds.GetOffsetY(gameObject)
Phaser.Display.Bounds.GetTop(gameObject)

Phaser.Display.Bounds.SetCenterX(gameObject, x)
Phaser.Display.Bounds.SetCenterY(gameObject, y)
Phaser.Display.Bounds.SetLeft(gameObject, value)
Phaser.Display.Bounds.SetRight(gameObject, value)
Phaser.Display.Bounds.SetTop(gameObject, value)
```

### Canvas

```js
Phaser.Display.Canvas.TouchAction(canvas [,value])
Phaser.Display.Canvas.UserSelect(canvas [,value])
```

#### CanvasInterpolation

```js
Phaser.Display.Canvas.CanvasInterpolation.setBicubic(canvas)
Phaser.Display.Canvas.CanvasInterpolation.setCrisp(canvas)
```

#### CanvasPool

```js
Phaser.Display.Canvas.CanvasPool.create(parent [,width] [,height] [,canvasType] [,selfParent])
Phaser.Display.Canvas.CanvasPool.create2D(parent [,width] [,height])
Phaser.Display.Canvas.CanvasPool.createWebGL(parent [,width] [,height])
Phaser.Display.Canvas.CanvasPool.disableSmoothing()
Phaser.Display.Canvas.CanvasPool.enableSmoothing()
Phaser.Display.Canvas.CanvasPool.first([canvasType])
Phaser.Display.Canvas.CanvasPool.free()
Phaser.Display.Canvas.CanvasPool.remove(parent)
Phaser.Display.Canvas.CanvasPool.total()
```

#### Smoothing

```js
Phaser.Display.Canvas.Smoothing.disable(context)
Phaser.Display.Canvas.Smoothing.enable(context)
Phaser.Display.Canvas.Smoothing.getPrefix(context)
Phaser.Display.Canvas.Smoothing.isEnabled(context)
```

### Color

```js
Phaser.Display.Color.ColorToRGBA(color)
Phaser.Display.Color.ComponentToHex(color)
Phaser.Display.Color.GetColor(red, green, blue)
Phaser.Display.Color.GetColor32(red, green, blue, alpha)
Phaser.Display.Color.HexStringToColor(hex)
Phaser.Display.Color.HSLToColor(h, s, l)
Phaser.Display.Color.HSVColorWheel([s] [,v])
Phaser.Display.Color.HSVToRGB(h, s, l [,out])
Phaser.Display.Color.HueToComponent(p, q, t)
Phaser.Display.Color.IntegerToColor(input)
Phaser.Display.Color.IntegerToRGB(input)
Phaser.Display.Color.ObjectToColor(input)
Phaser.Display.Color.RandomRGB([min] [,max])
Phaser.Display.Color.RGBStringToColor(rgb)
Phaser.Display.Color.RGBToHSV(r, g, b [,out])
Phaser.Display.Color.RGBToString(r, g, b [,a] [,prefix])
Phaser.Display.Color.ValueToColor(input)
```

## Phaser.DOM

```js
Phaser.DOM.AddToDOM(element [,parent])
Phaser.DOM.DOMContentLoaded(callback)
Phaser.DOM.GetInnerHeight(iOS)
Phaser.DOM.GetScreenOrientation(width, height)
Phaser.DOM.GetTarget(element)
Phaser.DOM.ParseXML(data)
Phaser.DOM.RemoveFromDOM(element)
```

## Phaser.Events

> 暂无

## Phaser.GameObjects

```js
Phaser.GameObjects.BuildGameObject(scene, gameObject, config)
Phaser.GameObjects.BuildGameObjectAnimation(sprite, config)
```

## Phaser.Geom

### Circle

```js
Phaser.Geom.Circle.Area(circle) // 圆面积
Phaser.Geom.Circle.Circumference(circle) // 圆周长
Phaser.Geom.Circle.CircumferencePoint(circle, Phasr.Math.PI2, point) // 在圆上的点，可以是矩形、圆形
Phaser.Geom.Circle.Clone(source) // 克隆一个圆
Phaser.Geom.Circle.Contains(circle, x, y) // 点是否在圆中
Phaser.Geom.Circle.ContainsPoint(circle, point) // 点是否在圆中
Phaser.Geom.Circle.ContainsRect(circle, rect) // 矩形是否在圆中
Phaser.Geom.Circle.CopyFrom(source, dest) // 小圆填充到大圆中
Phaser.Geom.Circle.Equals(circle1, circle2) // 比较两圆大小是否相等
Phaser.Geom.Circle.GetBounds(circle [,out]) // 获取圆的外层矩形对象
Phaser.Geom.Circle.GetPoint(circle, position [,out]) // 根据弧度获取圆上的点
Phaser.Geom.Circle.GetPoints(circle, quantity [,stepRate] [,output])
Phaser.Geom.Circle.Offset(circle, xOffset, yOffset) // 同 OffsetPoint
Phaser.Geom.Circle.OffsetPoint(circle, point) // 圆相对点的纵横偏移
Phaser.Geom.Circle.Random(circle [,out])
```

### Ellipse

```js
Phaser.Geom.Ellipse.Area(ellipse) // 圆面积
Phaser.Geom.Ellipse.Circumference(ellipse) // 圆周长
Phaser.Geom.Ellipse.CircumferencePoint(ellipse, Phasr.Math.PI2, point) // 在圆上的点，可以是矩形、圆形
Phaser.Geom.Ellipse.Clone(source) // 克隆一个圆
Phaser.Geom.Ellipse.Contains(ellipse, x, y) // 点是否在圆中
Phaser.Geom.Ellipse.ContainsPoint(ellipse, point) // 点是否在圆中
Phaser.Geom.Ellipse.ContainsRect(ellipse, rect) // 矩形是否在圆中
Phaser.Geom.Ellipse.CopyFrom(source, dest) // 小圆填充到大圆中
Phaser.Geom.Ellipse.Equals(ellipse1, ellipse2) // 比较两圆大小是否相等
Phaser.Geom.Ellipse.GetBounds(ellipse [,out]) // 获取圆的外层矩形对象
Phaser.Geom.Ellipse.GetPoint(ellipse, position [,out]) // 根据弧度获取圆上的点
Phaser.Geom.Ellipse.GetPoints(ellipse, quantity [,stepRate] [,output])
Phaser.Geom.Ellipse.Offset(ellipse, xOffset, yOffset) // 同 OffsetPoint
Phaser.Geom.Ellipse.OffsetPoint(ellipse, point) // 圆相对点的纵横偏移
Phaser.Geom.Ellipse.Random(ellipse [,out])
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
