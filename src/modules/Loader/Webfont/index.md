## 安装使用 webfont.js

> https://github.com/typekit/webfontloader

1. 安装

   ```bash
   yarn add webfontloader
   ```

1. 使用

   ```js
   import * as Webfont from 'webfontloader
   ```

## 编写 fonts.css

```css
@font-face {
  font-family: 'customname';
  src: url('customname.woff2') format('woff2'), url('customname.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

## 引入自定义字体

```js
Webfont.load({
  custom: {
    families: ['customname'],
    urls: ['fonts.css']
  }
})
```

## 使用自定义字体

```js
scene.add.text(0, 0, 'custom font', {
  fontFamily: 'customname'
})
```
