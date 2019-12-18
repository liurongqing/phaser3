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
Phaser.Geom.Ellipse.Area(ellipse) // 面积
Phaser.Geom.Ellipse.Circumference(ellipse) // 周长
Phaser.Geom.Ellipse.CircumferencePoint(ellipse, Phasr.Math.PI2, point) // 在上面的点，可以是矩形、圆形
Phaser.Geom.Ellipse.Clone(source) // 克隆
Phaser.Geom.Ellipse.Contains(ellipse, x, y) // 点是否在其中
Phaser.Geom.Ellipse.ContainsPoint(ellipse, point) // 点是否在其中
Phaser.Geom.Ellipse.ContainsRect(ellipse, rect) // 矩形是否在其中
Phaser.Geom.Ellipse.CopyFrom(source, dest)
Phaser.Geom.Ellipse.Equals(ellipse1, ellipse2) // 比较两个大小是否相等
Phaser.Geom.Ellipse.GetBounds(ellipse [,out]) // 获取外层矩形对象
Phaser.Geom.Ellipse.GetPoint(ellipse, position [,out]) // 根据弧度获取上面的点
Phaser.Geom.Ellipse.GetPoints(ellipse, quantity [,stepRate] [,output])
Phaser.Geom.Ellipse.Offset(ellipse, xOffset, yOffset) // 同 OffsetPoint
Phaser.Geom.Ellipse.OffsetPoint(ellipse, point) // 相对点的纵横偏移
Phaser.Geom.Ellipse.Random(ellipse [,out])
```

### Line

```js
Phaser.Geom.Line.Angle(line) // 角度
Phaser.Geom.Line.BresenhamPoints(line [,stepRate] [,results]) // 线上的所有点
Phaser.Geom.Line.CenterOn(line, x, y) // 线的中点在指定点
Phaser.Geom.Line.Clone(source) // 克隆
Phaser.Geom.Line.CopyFrom(source, dest)
Phaser.Geom.Line.Equals(line1, line2) // 比较两个大小是否相等
Phaser.Geom.Line.Extend(line, left [,right]) // 延伸
Phaser.Geom.Line.GetMidPoint(line [,out]) // 获取中点坐标
Phaser.Geom.Line.GetNearestPoint(line, point [,out]) // 获取垂直的点
Phaser.Geom.Line.GetNormal(line [,out]) // 法线
Phaser.Geom.Line.GetPoint(line, position [,out]) // 获取点
Phaser.Geom.Line.GetPoints(line, quantity [,stepRate] [,output]) // 获取多个点
Phaser.Geom.Line.GetShortestDistance(line, point) // 线点距离
Phaser.Geom.Line.Width(line) // 高度
Phaser.Geom.Line.Height(line) // 高度
Phaser.Geom.Line.Length(line) // 长度
Phaser.Geom.Line.NormalAngle(line) // 法线角度
Phaser.Geom.Line.NormalX(line)
Phaser.Geom.Line.NormalY(line)
Phaser.Geom.Line.Offset(line, x, y)
Phaser.Geom.Line.PerpSlope(line) // 垂直斜率
Phaser.Geom.Line.Random(line [,out])
Phaser.Geom.Line.ReflectAngle(lineA, lineB) // 两线之间的反射角
Phaser.Geom.Line.Rotate(line, angle) // 旋转
Phaser.Geom.Line.RotateAroundPoint(line, point, angle) // 旋转圆点
Phaser.Geom.Line.RotateAroundXY(line, x, y, angle)
Phaser.Geom.Line.SetToAngle(line, x, y, angle, length)
Phaser.Geom.Line.Slope(line)
```

### Point

```js
Phaser.Geom.Point.Ceil(point)
Phaser.Geom.Point.Floor(point)
Phaser.Geom.Point.Clone(source)
Phaser.Geom.Point.CopyFrom(source, dest)
Phaser.Geom.Point.Equals(point, toCompare) // 相等
Phaser.Geom.Point.GetCentroid(points [,out]) // 获取到质心
Phaser.Geom.Point.GetMagnitude(point) // 原点到点的长度
Phaser.Geom.Point.GetMagnitudeSq(point) // 点的大小的平方
Phaser.Geom.Point.GetRectangleFromPoints(points [,out]) // 对齐
Phaser.Geom.Point.Interpolate(pointA, pointB [,t] [,out])
Phaser.Geom.Point.Invert(point) // 交换点的 x，y 坐标
Phaser.Geom.Point.Negative(point) // 反转一个点的坐标
Phaser.Geom.Point.Project(pointA, pointB [,out])
Phaser.Geom.Point.ProjectUnit(pointA, pointB [,out])
Phaser.Geom.Point.SetMagnitude(point, magnitude) // 改变二维矢量的大小
```

### Polygon

```js
Phaser.Geom.Polygon.Clone(polygon)
Phaser.Geom.Polygon.Contains(polygon, x, y)
Phaser.Geom.Polygon.ContainsPoint(polygon, point)
Phaser.Geom.Polygon.GetAABB(polygon [,out]) // 获取多边形的边界 AABB 矩形
Phaser.Geom.Polygon.GetNumberArray(polygon [,output]) // 存储多边形的所有点坐标
Phaser.Geom.Polygon.Reverse(polygon) // 反转多边形点的顺序
Phaser.Geom.Polygon.GetPoints(polygon, quantity [,stepRate] [,output])
Phaser.Geom.Polygon.Perimeter(polygon) // 周长
Phaser.Geom.Polygon.Smooth(polygon) // 对点应用 Chaikin 平滑算法
```

### Rectangle

```js
Phaser.Geom.Rectangle.Area(rect) // 面积
Phaser.Geom.Rectangle.Ceil(rect) // 坐标为整数
Phaser.Geom.Rectangle.CeilAll(rect)
Phaser.Geom.Rectangle.Floor(rect)
Phaser.Geom.Rectangle.FloorAll(rect)
Phaser.Geom.Rectangle.CenterOn(rect, x, y) // 移动左上角到x, y坐标上
Phaser.Geom.Rectangle.Clone(source)
Phaser.Geom.Rectangle.Contains(rect, x, y)
Phaser.Geom.Rectangle.ContainsPoint(rect, point)
Phaser.Geom.Rectangle.ContainsRect(rectA, reactB)
Phaser.Geom.Rectangle.CopyFrom(source, dest)
Phaser.Geom.Rectangle.Decompose(rect [,out]) // 每个点坐标添加到一个数组中
Phaser.Geom.Rectangle.Equals(rect, toCompare) // 相等
Phaser.Geom.Rectangle.FitInside(target, source) // 保持长宽比在父容器中
Phaser.Geom.Rectangle.FitOutside(target, source) // 保持长宽比铺盖全父容器
Phaser.Geom.Rectangle.FromPoints(points [,out]) // 点都在矩形边上
Phaser.Geom.Rectangle.GetAspectRatio(rect) // 矩形宽高比
Phaser.Geom.Rectangle.GetCenter(rect [,out]) // 获取矩形的中心
Phaser.Geom.Rectangle.GetPoint(rectangle, position [,out]) // 获取矩形一个点
Phaser.Geom.Rectangle.GetPoints(rectangle, step, quantity [,out])
Phaser.Geom.Rectangle.GetSize(rect [,out]) // 获取矩形大小，返回width, height
Phaser.Geom.Rectangle.Inflate(rect, x, y) // 中心不变长宽变
Phaser.Geom.Rectangle.Intersection(rectA, rectB) // 矩形的相交区域
Phaser.Geom.Rectangle.MarchingAnts(rect, step, quantity [,out]) // 矩形周长间隔的点数组
Phaser.Geom.Rectangle.MergePoints(target, points) // 让点全在矩形边界上或边界内
Phaser.Geom.Rectangle.MergeRect(target, source)
Phaser.Geom.Rectangle.MergeXY(target, x, y)
Phaser.Geom.Rectangle.Offset(rect, x, y)
Phaser.Geom.Rectangle.OffsetPoint(rect, point)
Phaser.Geom.Rectangle.Overlaps(rectA, rectB) // 重叠为true
Phaser.Geom.Rectangle.Perimeter(rect) // 周长
Phaser.Geom.Rectangle.PerimeterPoint(rectangle, angle [,out])
Phaser.Geom.Rectangle.Random(rect, out) // 矩形中的随机点
Phaser.Geom.Rectangle.RandomOutside(outer, inner [,out])  // 外部矩形里，不在内矩形中的区域
Phaser.Geom.Rectangle.SameDimensions(rect, toCompare) // 严格相等的宽度和调试
Phaser.Geom.Rectangle.Scale(rect, x, y)
Phaser.Geom.Rectangle.Union(rectA, rectB [,out]) // 包括这2个矩形的大矩形
```

### Triangle

```js
Phaser.Geom.Triangle.Area(triangle) // 面积
Phaser.Geom.Triangle.BuildEquilateral(x, y, length) // 正三角形
Phaser.Geom.Triangle.BuildFromPolygon(data [,holes] [,scaleX] [,scaleY] [,out]) // 3点构建一个三角形
Phaser.Geom.Triangle.BuildRight(x, y, width, height) // 直角三角形
Phaser.Geom.Triangle.CenterOn(triangle, x, y [,centerFunc]) // 以给定的点为中心
Phaser.Geom.Triangle.Centroid(triangle [,out]) // 获取质心（重心）  
Phaser.Geom.Triangle.CircumCenter(triangle [,out]) // 获取外圆圆心
Phaser.Geom.Triangle.InCenter(triangle [,out]) // 内圆中心
Phaser.Geom.Triangle.CircumCircle(triangle [,out]) // 外接圆
Phaser.Geom.Triangle.Clone(source)
Phaser.Geom.Triangle.Contains(triangle, x, y)
Phaser.Geom.Triangle.ContainsArray(triangle, points [,returnFirst] [,out])
Phaser.Geom.Triangle.ContainsPoint(triangle, point)
Phaser.Geom.Triangle.CopyFrom(source, dest)
Phaser.Geom.Triangle.Decompose(triangle [,out]) // 分解成点数组
Phaser.Geom.Triangle.Equals(triangle, toCompare)
Phaser.Geom.Triangle.GetPoint(triangle, position [,out])
Phaser.Geom.Triangle.GetPoints(triangle, quantity, stepRate [,out])
Phaser.Geom.Triangle.Offset(triangle, x, y)
Phaser.Geom.Triangle.Perimeter(triangle) // 周长
Phaser.Geom.Triangle.Random(triangle [,out])
Phaser.Geom.Triangle.Rotate(triangle, angle)
Phaser.Geom.Triangle.RotateAroundPoint(triangle, point, angle) // 指定点旋转
Phaser.Geom.Triangle.RotateAroundXY(triangle, x, y, angle) // 指定点旋转

```

### Intersects

> 相交

```js

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
