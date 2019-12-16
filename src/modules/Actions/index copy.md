## 常用方法

### Phaser.Actions.Call()

> 遍历精灵组
> `Phaser.Actions.Call(items, callback, context)`

<h1>123123</h1>

```js
var React = require('react')
var Markdown = require('react-markdown')
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
)
```

```js
class Example {
  create() {
    const groups = this.add.group()
    Phaser.Actions.Call(groups.getChildren(), function(group) {}, this)
  }
}
```

### Phaser.Actions.GridAlign()

> 排列精灵组

```js
```

### Phaser.Actons.IncX()

> 横向移动

```js
```

### Phaser.Actions.IncY()

> 纵向移动

```js
```

### Phaser.Actions.IncXY()

> 横纵向移动

```js
```

### Phaser.Actions.SetAlpha()

> 设置透明度

```js
```

### Phaser.Actions.Spread()

> 设置 2 个值之前，如渐变

```js
```

### Phaser.Actions.SetXY()

> 所以元素设置位置

```js
```

### Phaser.Actions.ShiftPosition()

> 改变位置， 尾影

```js
```

### Phaser.Actions.WrapInRectangle()

> 包含在一个边界内

```js
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
