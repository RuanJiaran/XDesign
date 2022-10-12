---
title: Space 间距
nav:
  path: /components
  title: Space 间距
---

## Space 间距

控制组件之间的间距。

## 基本用法

默认为横向排列，控制相邻组件水平间距。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space>
      <Button type="success">间距</Button>
      <Button type="success">间距</Button>
      <Button type="success">间距</Button>
    </Space>
  );
};

export default Index;
```

## 垂直间距

可以设置 `direction=vertical` 调整为竖向排列。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space direction="vertical">
      <Button type="danger">间距</Button>
      <Button type="danger">间距</Button>
      <Button type="danger">间距</Button>
    </Space>
  );
};

export default Index;
```

## 间距大小

可以设置 `size` 大小调整间距大小。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space size={50}>
      <Space direction="vertical" size={20}>
        <Button type="warning">间距</Button>
        <Button type="warning">间距</Button>
        <Button type="warning">间距</Button>
      </Space>
      <Space size={15}>
        <Button type="primary">间距</Button>
        <Button type="primary">间距</Button>
        <Button type="primary">间距</Button>
      </Space>
    </Space>
  );
};

export default Index;
```

<API></API>
