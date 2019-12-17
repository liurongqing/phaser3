## 图形设置

```js
const graphics = scene.add.graphics({
  lineStyle: {
    // 线的样式
    width: 2,
    color: 0x00ff00
  },
  fillStyle: {
    // 填充的样式
    color: 0xff00ff
  }
})
```

## 画圆

```js
const circle = new Phaser.Geom.Circle(200, 200, 100)
graphics.fillCircleShape(circle) // 填充一个圆
graphics.strokeCircleShape(circle) // 描边
```

## 圆的属性

```js
circle.diameter = circle.radius // 直径等于原半径
circle.radius = 10 // 半径
circle.x = 10 // 横坐标
circle.y = 10 // 纵坐标
circle.left = 10
circle.top = 10
circle.bottom = 10
circle.right = 10
```

## 圆的方法

> 圆的静态方法，查看 [Phaser.Geom.Circle](/phaser3/const/staticmethod)

```js
circle.setTo(100, 100, 50) // 设置到指定位置与大小
circle.contains(pointer.x, pointer.y) // 点是否在一个圆中
circle.setPosition(100, 200) // 设置圆心位置
circle.getPoint(0.1, point) // 参数1:弧度，参数2: 基于 circle 改变 point 的值
circle.getPoints(32) // 获取圆周上的一些点的坐标
circle.getRandomPoint() // 获取圆内一些点的坐标
circle.isEmpty() // 圆为空时， radius 为 0 或小于 0
circle.setEmpty()
```

## 圆的一些信息

```js
const area = Phaser.Geom.Circle.Area(circle) // 获取圆的面积
const circumference = Phaser.Geom.Circle.Circumference(circle) // 获取圆的周长
```
