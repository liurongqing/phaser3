## 常用方法

### Phaser.Actions.Call()

> 遍历精灵组  
> `Phaser.Actions.Call(items, callback, context)`

```js
const groups = this.add.group()
Phaser.Actions.Call(
  groups.getChildren(),
  function(group) {
    group.setName('1')
  },
  this
)
```

### Phaser.Actions.GridAlign()

> 排列精灵组  
> `Phaser.Actions.GridAlign(items, options)`

```js
const groups = this.add.group()
Phaser.Actions.GridAlign(groups.getChildren(), {
  width: 2, // 列数
  height: 2, // 行数
  cellWidth: 100, // 列宽度
  cellHeight: 100, // 行高度
  position: Phaser.Display.Align.TOP_LEFT, // 元素相对单元格位置
  x: 100, // 整个网格左上角横坐标
  y: 100 // 整个网格左上角纵坐标
})
```

### Phaser.Actons.IncX()

> 横向移动  
> `Phaser.Actons.IncX(items, value [,step] [,index] [,direction])`

```js
const groups = this.add.group()
Phaser.Actons.IncX(
  groups.getChildren(),
  0.01, // 添加到 x 属性上的值
  1, // xvalue = xvalue + step * i 后面递增
  0, // 从 items 中下标为 0 开始搜索起
  1 // direction: 1正向遍历  -1反向遍历
)
```

### Phaser.Actions.IncY()

> 纵向移动  
> `Phaser.Actions.IncY(items, value [,step] [,index] [,diresction])`

```js
const groups = this.add.group()
Phaser.Actons.IncY(
  groups.getChildren(),
  0.01, // 添加到 y 属性上的值
  1, // yvalue = yvalue + step * i 后面递增
  0, // 从 items 中下标为 0 开始搜索起
  1 // direction: 1正向遍历  -1反向遍历
)
```

### Phaser.Actions.IncXY()

> 横纵向移动  
> `Phaser.Actions.IncXY(items, x [,y] [,stepX] [,stepY] [,index] [,direction])`

```js
const groups = this.add.group()
Phaser.Actons.IncXY(
  groups.getChildren(),
  0.01, // 添加到 x 属性上的值
  0.01, // 添加到 y 属性上的值
  1, // xvalue = xvalue + xstep * i 后面递增
  1, // yvalue = yvalue + ystep * i 后面递增
  0, // 从 items 中下标为 0 开始搜索起
  1 // direction: 1正向遍历  -1返回遍历
)
```

### Phaser.Actions.SetAlpha()

> 设置透明度  
> `Phaser.Actions.SetAlpha(items, value, [,step] [,index] [,direction])`

```js
const groups = this.add.group()
Phaser.Actons.SetAlpha(
  groups.getChildren(),
  0.2, // 添加到 alpha 属性上的值
  1, // value = value + step * i 后面递增
  0, // 从 items 中下标为 0 开始搜索起
  1 // direction: 1正向遍历  -1返回遍历
)
```

### Phaser.Actions.Spread()

> 基于属性设置一个区间传播渐变  
> `Phaser.Actions.Spread(items, property, min, max, [,inc])`  
> TODO， 从大到小有 BUG

```js
const groups = this.add.group()
Phaser.Actions.Spread(
  groups.getChildren(),
  'alpha', // 属性
  0, // 最小值
  1, // 最大值
  true // inc:  true为递增，false为递减
)
```

### Phaser.Actions.SetXY()

> 所有元素设置位置  
> `Phaser.Actions.SetXY(items, x [,y] [,stepX] [,stepY] [,index] [,direction])`

```js
const groups = this.add.group()
Phaser.Actions.SetXY(
  groups.getChildren(),
  10, // x 属性的值
  10, // y 属性的值， 未定义则使用 x 属性的值
  1, // xvalue = xvalue + xstep * i 后面递增
  1, // yvalue = yvalue + ystep * i 后面递增
  0, // 从 items 中下标为 0 开始搜索起
  1 // direction: 1正向遍历  -1返回遍历
)
```

### Phaser.Actions.ShiftPosition()

> 改变位置， 尾影  
> `Phaser.Actions.ShiftPosition(items, x, y [,direction] [output])`

```js
const groups = this.add.group()
Phaser.Actions.ShiftPosition(
  groups.getChildren(),
  10, // 数组第一个项中的 x 属性值
  10, // 数组第一个项中的 y 属性值
  0, // direction： 0为第一个到最后一个  1反之
  Phaser.Math.Vector2 // 最终存储对象位置的方式
)
```

### Phaser.Actions.WrapInRectangle()

> 包含在一个边界内  
> `Phaser.Actions.WrapInRectangle(items, rect [,padding])`

```js
const rect = new Phaser.Geom.Rectangle(100, 100, 256, 256) // 创建矩形
const groups = this.add.group()
// 超出矩形的的元素消失
Phaser.Actions.WrapInRectangle(
  groups.getChildren(),
  rect,
  30 // 如网页 padding 值一样，默认为：0
)
```

## 轨迹上置放精灵

### Phaser.Actions.PlaceOnCircle()

> 圆

```js
```

### Phaser.Actions.PlaceOnEllipse()

> 椭圆

```js
```

### Phaser.Actions.PlaceOnLine()

> 线

```js
```

### Phaser.Actions.PlaceOnRectangle()

> 矩形

```js
```

### Phaser.Actions.PlaceOnTriangle()

> 三角形

```js
```

## 轨迹内填充精灵

### Phaser.Actions.RandomCircle()

> 圆

```js
```

### Phaser.Actions.RandomEllipse()

> 椭圆

```js
```

### Phaser.Actions.RandomLine()

> 线

```js
```

### Phaser.Actions.RandomRectangle()

> 矩形

```js
```

### Phaser.Actions.RandomTriangle()

> 三角形

```js
```

## 旋转

### Phaser.Actions.Rotate()

> 每个精灵绕自身旋转

```js
```

### Phaser.Actions.RotateAround()

> 绕圆心旋转，随机填充

```js
```

### Phaser.Actions.RotateAroundDistance()

> 绕圆心距离旋转，轨迹上置放精灵

```js
```
