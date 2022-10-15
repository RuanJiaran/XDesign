---
hero:
  title: XDesign
  desc: 一套专为 React 开发，适合开发者使用的轻量级 UI 组件库
  actions:
    - text: 快速开始
      link: /guide
features:
  - icon: /XDesign/home_1.png
    title: 更小的体积
    desc: 组件体积更小，灵活使用，按需使用。
  - icon: /XDesign/home_2.png
    title: 更快的开发
    desc: 极少的代码量，极简配置项。
  - icon: /XDesign/home_3.png
    title: 更完美的支持
    desc: 专为 React 开发的 UI 组件库。

footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by ruanjiaran<1606707347@qq.com>
---

## 安装

使用 npm 的方式安装

```npm
npm i xdesign-ui
```

## 按需引入

您可以根据个人需要按需引用组件来使用

```tsx | pure
import { Button } from 'xdesign-ui';
```

## 完整示例

```tsx | pure
import React from 'react';
import { Button } from 'xdesign-ui';

const Index = () => {
  return <Button>按钮</Button>;
};

export default Index;
```

更多使用示例请看 [组件文档](https://ruanjiaran.github.io/XDesign)
