---
title: Icon 图标
nav:
  path: /components
  title: Icon 图标
---

## Icon 图标

提供了 200 多个常用的 icon 图标。

## 基本用法

给 `Icon` 的 `type` 属性设置为要展示的图标名称即可。

```tsx | pure
<Icon type="Loading" />
```

```tsx
import React from 'react';
import { Icon, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space size={50}>
      <Icon type="Loading" spin={true} />
    </Space>
  );
};

export default Index;
```

## 全部图标

<code src="./demo/index.tsx">

<API></API>
