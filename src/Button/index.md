---
title: Button 按钮
nav:
  path: /components
  title: Button 按钮
  order: 1
---

## Button 按钮
rjr
按钮用于开始一个即时操作。

## 基础用法

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button content="默认按钮" />
    </Space>
  );
};

export default Index;
```

## 常用示例

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary">填充按钮</Button>
        <Button type="danger">填充按钮</Button>
        <Button type="warning">填充按钮</Button>
        <Button type="success">填充按钮</Button>
        <Button type="info">填充按钮</Button>
        <Button type="default">填充按钮</Button>
      </Space>
      <Space>
        <Button type="primary" variant="outline">
          边框按钮
        </Button>
        <Button type="danger" variant="outline">
          边框按钮
        </Button>
        <Button type="warning" variant="outline">
          边框按钮
        </Button>
        <Button type="success" variant="outline">
          边框按钮
        </Button>
        <Button type="info" variant="outline">
          边框按钮
        </Button>
        <Button type="default" variant="outline">
          边框按钮
        </Button>
      </Space>
      <Space>
        <Button type="primary" variant="dashed">
          虚框按钮
        </Button>
        <Button type="danger" variant="dashed">
          虚框按钮
        </Button>
        <Button type="warning" variant="dashed">
          虚框按钮
        </Button>
        <Button type="success" variant="dashed">
          虚框按钮
        </Button>
        <Button type="info" variant="dashed">
          虚框按钮
        </Button>
        <Button type="default">虚框按钮</Button>
      </Space>
      <Space>
        <Button type="primary" variant="text">
          文本按钮
        </Button>
        <Button type="danger" variant="text">
          文本按钮
        </Button>
        <Button type="warning" variant="text">
          文本按钮
        </Button>
        <Button type="success" variant="text">
          文本按钮
        </Button>
        <Button type="info" variant="text">
          文本按钮
        </Button>
        <Button type="default" variant="text">
          文本按钮
        </Button>
      </Space>
    </Space>
  );
};

export default Index;
```

## 不同颜色按钮

提供浅灰色、蓝色、红色、黄色和绿色为主题的按钮。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space>
      <Button type="default">default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="danger">danger</Button>
      <Button type="warning">warning</Button>
      <Button type="info">info</Button>
    </Space>
  );
};

export default Index;
```

## 不同大小按钮

按钮有大、中、小、超小四种尺寸。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space>
      <Button size="large" type="primary">
        大型按钮
      </Button>
      <Button size="middle" type="primary">
        中型按钮
      </Button>
      <Button size="small" type="primary">
        小型按钮
      </Button>
      <Button
        size="mini"
        type="primary"
        onClick={(e) => {
          console.log(e);
        }}
      >
        超小按钮
      </Button>
    </Space>
  );
};

export default Index;
```

## 禁用按钮

你可以使用 `disabled` 属性来定义按钮是否被禁用。`disabled` 接受一个 `Boolean` 类型的值。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space>
      <Button
        type="default"
        disabled
        onClick={(e) => {
          console.log(e);
        }}
      >
        default
      </Button>
      <Button type="primary" disabled>
        primary
      </Button>
      <Button type="success" disabled>
        success
      </Button>
      <Button type="danger" disabled>
        danger
      </Button>
      <Button type="warning" disabled>
        warning
      </Button>
      <Button type="info" disabled>
        info
      </Button>
    </Space>
  );
};

export default Index;
```

## Block 按钮

Block 按钮在宽度上充满其所在的父容器（无 padding 和 margin 值）。该按钮常见于移动端和一些表单场景中。

```tsx
import React from 'react';
import { Button, Space } from 'xdesign-ui';

const Index = () => {
  return (
    <Space style={{ width: '100%' }}>
      <Button type="primary" block>
        primary
      </Button>
      <Button variant="outline" block>
        primary
      </Button>
      <Button variant="dashed" block>
        primary
      </Button>
    </Space>
  );
};

export default Index;
```

<API></API>
