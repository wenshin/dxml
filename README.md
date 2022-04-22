# GDML

GDML(Graphic Design Markup Language) is designed for more effective to change graphic design into code, even automatic.

# Plan

1. Step1: Developer is easy to change design to code
   1. auto layout markup
2. Step2: Transform new design to code automatically
3. Step3: Transform design changges to code automatically (hard work)

# Feature

1. 设计角度
   1. Tokens（颜色、长度）
   2. Theme Tokens（主题的 Tokens）
   3. Animation
   4. 图形元素
      1. Vector graphics（svg、font）
      2. bitmap（jpeg、png、gif、webp）
      3. video
   5. layout
      1. auto layout
         1. stack
         2. grid
         3. inline
         4. text
      2. absolute layout
      3. floating layer
   6. 组件
2. 客户端开发角度
   1. 前端
      1. css + html
      2. tailwindcss + html：把 css 语法抽象为 class name 缩写
      3. JSX + css
      4. Vue + css
   2. Android
      1. LinearLayout
      2. Flexbox
   3. iOS
      1. SwiftUI Stack
      2. Flexbox

# Install For Web

```bash
npm install aml
yarn install aml
```

# Install For Android

```bash
npm install aml
yarn install aml
```

# Install For iOS Swift

```bash
npm install aml
yarn install aml
```

# Features

see [docs](https://wenshin.github.io/projects/dxml/)

1. 布局容器
   1. view: use, layout(row,col,inline,), align-items(justify, start, end, center), place-items, span(number, stretch)
      1. 行内溢出滚动（待完成）
      2. 行内溢出可见（待完成）
   2. layer: mask, z-index
   3. float: position, z-index, use, layout, align-items
   4. text: align-items, break-line(word,white-space), max-line, crop
   5. component: name
   6. token: name, value, type(number,string,condition,unit)
2. media query，多尺寸适配（同比例放大）
3. Design Token 支持
   1. color
   2. size unit
4. UI 组件
5. 主题

# Release Notes

- `2021-12-22 0.1.6`: fix cloumn layout aling-items bug

# Development

## Available Scripts

In the project directory, you can run:

### Start Development

`yarn start`

### DXML package Build

`yarn build-pkg`

### Doc build

`yarn build`
