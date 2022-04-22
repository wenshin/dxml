# AML

AML(Auto-Layout Markup Language) is designed for more effective to change design layout into code, even automatic.

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
6. 无障碍
7. 国际化

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
