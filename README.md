# GDML

GDML(Graphic Design Markup Language) is designed for more effective to change design into code, even automatic.

# Install For Web

```bash
npm install gdml
yarn install gdml
```

# Install For Android

```bash
npm install gdml
yarn install gdml
```

# Install For iOS Swift

```bash
npm install gdml
yarn install gdml
```

# Features

see [docs](https://wenshin.github.io/projects/dxml/)

1. 布局容器
   1. view: use, layout(default, row, col), align-items(justify, start, end, center), place-items, span(number, stretch)
   2. layer: mask, z-index
   3. float: position, z-index, use, layout, align-items
   4. text: align-items, break-line(word,white-space), max-line, crop
   5. component: name
   6. token: name, value, type(number,string,condition,unit)
2. media query，多尺寸适配（同比例放大）
3. Design Token 支持
4. UI 组件
5. 无障碍
6. 国际化

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
