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
