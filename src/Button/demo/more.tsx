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
        <Button type="default">填充按钮</Button>
      </Space>
      <Space>
        <Button type="primary" ghost={true}>
          边框按钮
        </Button>
        <Button type="danger" ghost={true}>
          边框按钮
        </Button>
        <Button type="warning" ghost={true}>
          边框按钮
        </Button>
        <Button type="success" ghost={true}>
          边框按钮
        </Button>
        <Button type="default" ghost={true}>
          边框按钮
        </Button>
      </Space>
    </Space>
  );
};

export default Index;
