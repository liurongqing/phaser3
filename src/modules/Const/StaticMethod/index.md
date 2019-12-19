## Phaser

> 暂无

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

> 暂无

## Phaser.Cache

> 暂无

## Phaser.Cameras

> 暂无

## Phaser.Core

> 暂无

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
Phaser.Geom.Intersects.CircleToCircle(circleA, circleB) // 两圆相交
Phaser.Geom.Intersects.CircleToRectangle(circle, rect) // 圆与矩形相交
Phaser.Geom.Intersects.GetCircleToCircle(circle, rect [,out]) // 获取相交点 Point 对象数组
Phaser.Geom.Intersects.GetCircleToRectangle(circle, rect [,out]) // 获取相交点 Point 对象数组
Phaser.Geom.Intersects.GetLineToCircle(line, circle [,out]) // 获取相交点 Point 对象数组
Phaser.Geom.Intersects.GetLineToRectangle(line, rect [,out]) // 获取相交点 Point 对象数组
Phaser.Geom.Intersects.GetRectangleIntersection(rectA, rectB [,output]) // 获取两个矩形相交点 Point 对象数组
Phaser.Geom.Intersects.GetRectangleToRectangle(rectA, rectB [,output]) // 获取两个矩形相交点 Point 对象数组
Phaser.Geom.Intersects.GetRectangleToTriangle(rect, triangle [,out]) // 获取相交点Point对象数组
Phaser.Geom.Intersects.GetTriangleToCircle(triangle, circle [,out]) // 获取相交点Point对象数组
Phaser.Geom.Intersects.GetTriangleToLine(triangle, line [,out]) // 获取相交点Point对象数组
Phaser.Geom.Intersects.LineToCircle(line, circle [,nearest]) // 相交
Phaser.Geom.Intersects.LineToLine(line1, line2 [,out])// 相交
Phaser.Geom.Intersects.LineToRectangle(line, rect)// 相交
Phaser.Geom.Intersects.PointToLine(point, line [,lineThickness])// 点在线上
Phaser.Geom.Intersects.PointToLineSegment(point, line) // 点在线段上
Phaser.Geom.Intersects.RectangleToRectangle(rectA, rectB) // 相交
Phaser.Geom.Intersects.RectangleToTriangle(rect, triangle) // 相交
Phaser.Geom.Intersects.RectangleToValues(rect, left, right, top, bottom [,tolerance]) // 矩形与值相交
Phaser.Geom.Intersects.TriangleToCircle(triangle, circle) // 相交
Phaser.Geom.Intersects.TriangleToLine(triangle, line) // 相交
Phaser.Geom.Intersects.TriangleToTriangle(triangleA, triangleB) // 相交
```

## Phaser.Input

```js
Phaser.Input.CreateInteractiveObject(gameObject, hitArea, hitAreaCallback)
Phaser.Input.CreatePixelPerfectHandler(textureManager, alphaTolerance)
```

### InputPluginCache

```js
Phaser.Input.InputPluginCache.getCore()
Phaser.Input.InputPluginCache.install()
Phaser.Input.InputPluginCache.register()
Phaser.Input.InputPluginCache.remove()
```

### Keyboard

```js
Phaser.Input.Keyboard.DownDuration(key [,duration]) // duration 时间内按下为true
Phaser.Input.Keyboard.JustDown(key) // 快速按下为true
Phaser.Input.Keyboard.JustUp(key) // 快速抬起为 true
Phaser.Input.Keyboard.UpDuration(key [,duration]) // duration 时间内抬起为true
```

## Phaser.Loader

> 暂无

### File

```js
Phaser.Loader.File.createObjectURL(image, blob, defaultType)
Phaser.Loader.File.revokeObjectURL(image)
```

### Events

```js
Phaser.Loader.Events.ADD // addfile
Phaser.Loader.Events.COMPLETE // complete
Phaser.Loader.Events.FILE_COMPLETE // filecomplete
Phaser.Loader.Events.FILE_KEY_COMPLETE // filecomplete-
Phaser.Loader.Events.FILE_LOAD_ERROR // loaderror
Phaser.Loader.Events.FILE_LOAD // load
Phaser.Loader.Events.FILE_PROGRESS // fileprogress
Phaser.Loader.Events.POST_PROCESS // postprocess
Phaser.Loader.Events.PROGRESS // progress
Phaser.Loader.Events.START // start
```

### FileTypesManager

```js
Phaser.Loader.FileTypesManager.destroy()
Phaser.Loader.FileTypesManager.install(loader)
Phaser.Loader.FileTypesManager.register(key, factoryFunction)
```

## Phaser.Math

```js
Phaser.Math.Average(values) // 平均数
Phaser.Math.Bernstein(n, i) // 整数 n > i 伯恩斯坦多项式 贝塞尔曲线的函数形式
Phaser.Math.Between(min, max) // 最小值和最大值之间的随机整数 包括
Phaser.Math.CatmullRom(t, p0, p1, p2, p3) // 计算 Catmull-Rom 值
Phaser.Math.CeilTo(value [,place] [,base]) // Math.ceil(value*Math.pow(base, -place))/Math.pow(base, -place)
Phaser.Math.FloorTo(value [,place] [,base]) // 同 CeilTo
Phaser.Math.Clamp(value, min, max) // 值只能在最小到最大值中一个
Phaser.Math.DegToRad(degress) // 角度转弧度
Phaser.Math.Difference(a, b) // 两值之间的正差
Phaser.Math.Factorial(value) // 阶乘
Phaser.Math.FloatBetween(min, max) // 随机浮点数，包括min，不包括max
Phaser.Math.FromPercent(percent, min [,max]) // 根据大小差值 * percent
Phaser.Math.GetSpeed(distance, time) // 根据距离与时间获取速度
Phaser.Math.IsEven(value) // 检查是否为偶数
Phaser.Math.IsEvenStrict(value) // 严格检查是否为偶数
Phaser.Math.Linear(p0, p1, t) // 计算  t 上的线性值
Phaser.Math.MaxAdd(value, amount, max) // 两值相加， 小于最大值
Phaser.Math.MinSub(value, amount, min) // 两值相减，大于最小值
Phaser.Math.Percent(value, min [,max] [,upperMax]) // 值在最小与最大间的百分占比
Phaser.Math.RadToDeg(radians) // 弧度转角度
Phaser.Math.RandomXY(vector [,scale])
Phaser.Math.RandomXYZ(vec3 [,radius])
Phaser.Math.RandomXYZW(vec4 [,scale])
Phaser.Math.Rotate(point, angle)
Phaser.Math.RotateAround(point, x, y, angle)
Phaser.Math.RotateAroundDistance(point, x, y, angle, distance)
Phaser.Math.RotateVec3(vec, axis, radians)
Phaser.Math.RoundAwayFromZero(value)
Phaser.Math.RoundTo(value [,place] [,base])
Phaser.Math.SinCosTableGenerator(length [,sinAmp] [,cosAmp] [,frequency])
Phaser.Math.SmootherStep(x, min, max)
Phaser.Math.SmoothStep(x, min, max)
Phaser.Math.ToXY(index, width, height [,out])
Phaser.Math.TransformXY(x, y, positionX, positionY, rotation, scaleX, scaleY [, output])
Phaser.Math.Within(a, b, tolerance) // 检查两值是否在公差差
Phaser.Math.Wrap(value, min, max) // 在min max之间等数算加
```

### Angle

> 角度

```js
Phaser.Math.Angle.Between(x1, y1, x2, y2)
Phaser.Math.Angle.BetweenPoints(point1, point2)
Phaser.Math.Angle.BetweenPointsY(point1, point2)
Phaser.Math.Angle.BetweenY(x1, y1, x2, y2)
Phaser.Math.Angle.CounterClockwise(angle)
Phaser.Math.Angle.Normalize(angle)
Phaser.Math.Angle.Reverse(angle)
Phaser.Math.Angle.RotateTo(currentAngle, targetAngle [,lerp])
Phaser.Math.Angle.ShortestBetween(angle1, angle2)
Phaser.Math.Angle.Wrap(angle)
Phaser.Math.Angle.WrapDegrees(angle)
```

### Distance

> 距离

```js
Phaser.Math.Distance.Between(x1, y1, x2, y2)
Phaser.Math.Distance.Power(x1, y1, x2, y2, pow)
Phaser.Math.Distance.Squared(x1, y1, x2, y2)
```

### Easing

> 动画曲线

1. Phaser.Math.Easing.Back

   > 返回效果

   ```js
   Phaser.Math.Easing.Back.In(v [,overshoot])
   Phaser.Math.Easing.Back.InOut(v [,overshoot])
   Phaser.Math.Easing.Back.Out(v [,overshoot])
   ```

1. Phaser.Math.Easing.Bounce

   > 反弹

   ```js
   Phaser.Math.Easing.Bounce.In(v)
   Phaser.Math.Easing.Bounce.InOut(v)
   Phaser.Math.Easing.Bounce.Out(v)
   ```

1. Phaser.Math.Easing.Circular

   > 圆形

   ```js
   Phaser.Math.Easing.Circular.In(v)
   Phaser.Math.Easing.Circular.InOut(v)
   Phaser.Math.Easing.Circular.Out(v)
   ```

1. Phaser.Math.Easing.Cubic

   > 立方

   ```js
   Phaser.Math.Easing.Cubic.In(v)
   Phaser.Math.Easing.Cubic.InOut(v)
   Phaser.Math.Easing.Cubic.Out(v)
   ```

1. Phaser.Math.Easing.Elastic

   > 有弹性的

   ```js
   Phaser.Math.Easing.Elastic.In(v [,amplitude] [,period])
   Phaser.Math.Easing.Elastic.InOut(v [,amplitude] [,period])
   Phaser.Math.Easing.Elastic.Out(v [,amplitude] [,period])
   ```

1. Phaser.Math.Easing.Expo

   ```js
   Phaser.Math.Easing.Expo.In(v)
   Phaser.Math.Easing.Expo.InOut(v)
   Phaser.Math.Easing.Expo.Out(v)
   ```

1. Phaser.Math.Easing.Linear

   > 线性

   ```js
   Phaser.Math.Easing.Linear(v)
   ```

1. Phaser.Math.Easing.Quadratic

   > 二次方程

   ```js
   Phaser.Math.Easing.Quadratic.In(v)
   Phaser.Math.Easing.Quadratic.InOut(v)
   Phaser.Math.Easing.Quadratic.Out(v)
   ```

1. Phaser.Math.Easing.Quartic

   > 四次方程

   ```js
   Phaser.Math.Easing.Quartic.In(v)
   Phaser.Math.Easing.Quartic.InOut(v)
   Phaser.Math.Easing.Quartic.Out(v)
   ```

1. Phaser.Math.Easing.Quintic

   > 五次方程

   ```js
   Phaser.Math.Easing.Quintic.In(v)
   Phaser.Math.Easing.Quintic.InOut(v)
   Phaser.Math.Easing.Quintic.Out(v)
   ```

1. Phaser.Math.Easing.Sine

   > 正弦

   ```js
   Phaser.Math.Easing.Sine.In(v)
   Phaser.Math.Easing.Sine.InOut(v)
   Phaser.Math.Easing.Sine.Out(v)
   ```

1. Phaser.Math.Easing.Stepped

   > 阶梯式

   ```js
   Phaser.Math.Easing.Stepped(v [,steps])
   ```

### Fuzzy

> 模糊

```js
Phaser.Math.Fuzzy.Ceil(value [,epsilon]) // 模糊上限
Phaser.Math.Fuzzy.Equal(a, b [,epsilon]) // 差值内模糊相等
Phaser.Math.Fuzzy.Floor(value [,epsilon]) // 模糊下限
Phaser.Math.Fuzzy.GreaterThan(a, b [,epsilon]) // a > b - epsilon 为 true
Phaser.Math.Fuzzy.LessThan(a, b [,epsilon]) // a < b + epsilon 为 true
```

### Interpolation

> 插入

```js
Phaser.Math.Interpolation.Bezier(v, k)
Phaser.Math.Interpolation.CatmullRom(v, k)
Phaser.Math.Interpolation.CubicBezier(t, p0, p1, p2, p3)
Phaser.Math.Interpolation.Linear(v, k)
Phaser.Math.Interpolation.QuadraticBezier(t, p0, p1, p2)
Phaser.Math.Interpolation.SmootherStep(t, min, max)
Phaser.Math.Interpolation.SmoothStep(t, min, max)
```

### Pow2

```js
Phaser.Math.Pow2.GetNext(value) // 返回给定值的最近的幂值
Phaser.Math.Pow2.IsSize(width, height) // 检查宽度与高度是否为2的幂
Phaser.Math.Pow2.IsValue(value) // 是否是2的幂
```

### Snap

> 提前

```js
Phaser.Math.Snap.Ceil(value, gap [,start] [,divide]) // 网格切片取值
Phaser.Math.Snap.Floor(value, gap [,start] [,divide]) // 网格切片取值
Phaser.Math.Snap.To(value, gap [,start] [,divide]) // 网格切片取值
```

### RND

> 种子随机数

```js
Phaser.Math.RND.angle() // -180 到 180 度，随机一个角度
Phaser.Math.RND.rotation() // 随机返回一个弧度 -3.141 和 3.141 之间
Phaser.Math.RND.between(min, max) // 介于之间的随机整数，包括最小值和最大值
Phaser.Math.RND.integerInRange(min, max) // 同 between
Phaser.Math.RND.frac() // 随机生成0 到 1的实数
Phaser.Math.RND.init(seeds) // 初始化种子
Phaser.Math.RND.integer() // 返回 0 到 2^32 之间的随机整数
Phaser.Math.RND.normal() // -1 到 1 的随机实数
Phaser.Math.RND.pick(array) // 从给定数组中随机返回一个元素
Phaser.Math.RND.real() // 返回 0 到 2 ^ 32 之间的随机实数
Phaser.Math.RND.realInRange(min, max) // 返回之间的随机实数
Phaser.Math.RND.shuffle(array) // 对数组重新排序
Phaser.Math.RND.sign() // 返回 -1 或 1
Phaser.Math.RND.sow(seeds) // 重置随机种子
Phaser.Math.RND.state([state]) // 获取或设置生成器的状态，保存与还原数据
Phaser.Math.RND.timestamp(min, max) // 默认返回2000年初到2020年底的时间戳
Phaser.Math.RND.uuid() // 返回一个 https://gist.github.com/1308368 RFC4122版本4 ID 十六进制字符串
Phaser.Math.RND.weightedPick(array) // 随机返回一个元素，利于前面的条目
```

## Phaser.Physics

> 太多了，后面慢慢加

## Phaser.Plugins

```js
Phaser.Plugins.PluginCache.destroyCorePlugins()
Phaser.Plugins.PluginCache.destroyCustomPlugins()
Phaser.Plugins.PluginCache.getCore(key)
Phaser.Plugins.PluginCache.getCustom(key)
Phaser.Plugins.PluginCache.getCustomClass(key)
Phaser.Plugins.PluginCache.hasCore(key)
Phaser.Plugins.PluginCache.hasCustom(key)
Phaser.Plugins.PluginCache.register(key, plugin, mapping [,custom])
Phaser.Plugins.PluginCache.registerCustom(key, plugin, mapping, data)
Phaser.Plugins.PluginCache.remove(key)
Phaser.Plugins.PluginCache.removeCustom(key)
```

## Phaser.Renderer

### Canvas

```js
Phaser.Renderer.Canvas.GetBlendModes()
Phaser.Renderer.Canvas.SetTransform(renderer, ctx, src, camera [,parentMatrix])
```

### WebGL

```js
Phaser.Renderer.WebGL.Utils.getComponentCount(attributes, glContext)
Phaser.Renderer.WebGL.Utils.getFloatsFromUintRGB(rgb)
Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlpha(rgb, a)
Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlphaAndSwap(rgb, a)
Phaser.Renderer.WebGL.Utils.getTintFromFloats(r, g, b, a)
```

### Snapshot

```js
Phaser.Renderer.Snapshot.Canvas(sourceCanvas, config)
Phaser.Renderer.Snapshot.WebGL(sourceCanvas, config)
```

## Phaser.Scale

> 暂无

## Phaser.ScaleModes

> 暂无

## Phaser.Scenes

> 暂无

## Phaser.Sound

> 暂无

## Phaser.Structs

```js
Phaser.Structs.List()
Phaser.Structs.Map()
Phaser.Structs.ProcessQueue()
Phaser.Structs.RTree()
Phaser.Structs.Set()
Phaser.Structs.Size()
```

## Phaser.Textures

## Phaser.Tilemaps

### Parsers

```js
Phaser.Tilemaps.Parsers.Parse(
  name,
  mapFormat,
  data,
  tileWidth,
  tileHeight,
  insertNull
)
Phaser.Tilemaps.Parsers.Parse2DArray(
  name,
  data,
  tileWidth,
  tileHeight,
  insertNull
)
Phaser.Tilemaps.Parsers.ParseCSV(name, data, tileWidth, tileHeight, insertNull)
```

## Phaser.Time

> 暂无

## Phaser.Tweens

> 暂无

### Builders

```js
Phaser.Tweens.Builders.GetBoolean(source, key, defaultValue)
Phaser.Tweens.Builders.GetEaseFunction(ease [, easeParams])
Phaser.Tweens.Builders.GetNewValue(source, key, defaultValue)
Phaser.Tweens.Builders.GetProps(config)
Phaser.Tweens.Builders.GetTargets(config)
Phaser.Tweens.Builders.GetTweens(config)
Phaser.Tweens.Builders.GetValueOp(key, propertyValue)
Phaser.Tweens.Builders.NumberTweenBuilder(parent, config, defaults)
Phaser.Tweens.Builders.StaggerBuilder(value [, config])
Phaser.Tweens.Builders.TimelineBuilder(manager, config)
Phaser.Tweens.Builders.TweenBuilder(parent, config, defaults)
```

## Phaser.Utils

```js
Phaser.Utils.NOOP()
```

### Array

```js
Phaser.Utils.Array.Add(array, item [, limit] [, callback] [, context])
Phaser.Utils.Array.AddAt(array, item [, index] [, limit] [, callback] [, context])
Phaser.Utils.Array.BringToTop(array, item)
Phaser.Utils.Array.CountAllMatching(array, property, value [, startIndex] [, endIndex])
Phaser.Utils.Array.Each(array, callback, context [, args])
Phaser.Utils.Array.EachInRange(array, callback, context, startIndex, endIndex [, args])
Phaser.Utils.Array.FindClosestInSorted(value, array [, key])
Phaser.Utils.Array.GetAll(array [, property] [, value] [, startIndex] [, endIndex])
Phaser.Utils.Array.GetFirst(array [, property] [, value] [, startIndex] [, endIndex])
Phaser.Utils.Array.GetRandom(array [, startIndex] [, length])
Phaser.Utils.Array.MoveDown(array, item)
Phaser.Utils.Array.MoveTo(array, item, index)
Phaser.Utils.Array.MoveUp(array, item)
Phaser.Utils.Array.NumberArray(start, end [, prefix] [, suffix])
Phaser.Utils.Array.NumberArrayStep( [start] [, end] [, step])
Phaser.Utils.Array.QuickSelect(arr, k [, left] [, right] [, compare])
Phaser.Utils.Array.Range(a, b [, options])
Phaser.Utils.Array.Remove(array, item [, callback] [, context])
Phaser.Utils.Array.RemoveAt(array, index [, callback] [, context])
Phaser.Utils.Array.RemoveBetween(array, startIndex, endIndex [, callback] [, context])
Phaser.Utils.Array.RemoveRandomElement(array [, start] [, length])
Phaser.Utils.Array.Replace(array, oldChild, newChild)
Phaser.Utils.Array.RotateLeft(array [, total])
Phaser.Utils.Array.RotateRight(array [, total])
Phaser.Utils.Array.SafeRange(array, startIndex, endIndex [, throwError])
Phaser.Utils.Array.SendToBack(array, item)
Phaser.Utils.Array.SetAll(array, property, value [, startIndex] [, endIndex])
Phaser.Utils.Array.Shuffle(array)
Phaser.Utils.Array.SpliceOne(array, index)
Phaser.Utils.Array.StableSort(arr, comp)
Phaser.Utils.Array.Swap(array, item1, item2)
```

### Base64

```js
Phaser.Utils.Base64.ArrayBufferToBase64(arrayBuffer [, mediaType])
Phaser.Utils.Base64.Base64ToArrayBuffer(base64)
```

### Objects

```js
Phaser.Utils.Objects.Clone(obj)
Phaser.Utils.Objects.Extend()
Phaser.Utils.Objects.GetAdvancedValue(source, key, defaultValue)
Phaser.Utils.Objects.GetFastValue(source, key [, defaultValue])
Phaser.Utils.Objects.GetMinMaxValue(source, key, min, max, defaultValue)
Phaser.Utils.Objects.GetValue(source, key, defaultValue)
Phaser.Utils.Objects.HasAll(source, keys)
Phaser.Utils.Objects.HasAny(source, keys)
Phaser.Utils.Objects.HasValue(source, key)
Phaser.Utils.Objects.IsPlainObject(obj)
Phaser.Utils.Objects.Merge(obj1, obj2)
Phaser.Utils.Objects.MergeRight(obj1, obj2)
Phaser.Utils.Objects.Pick(object, keys)
Phaser.Utils.Objects.SetValue(source, key, value)
```

### String

```js
Phaser.Utils.String.Format(string, values)
Phaser.Utils.String.Pad(str [, len] [, pad] [, dir])
Phaser.Utils.String.Reverse(string)
Phaser.Utils.String.UppercaseFirst(str)
Phaser.Utils.String.UUID()
```
