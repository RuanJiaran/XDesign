import React from 'react';
import { Button, Space } from 'xdesign-ui';

export default function () {
  return (
    <Space style={{ width: '100%' }}>
      <Button type="primary" loading={true}>
        加载按钮
      </Button>
      <Button type="success" loading={true} ghost={true}>
        加载按钮
      </Button>
      <Button type="danger" loading={true} ghost={true} disabled>
        加载按钮
      </Button>
      <Button type="default" loading={true}>
        加载按钮
      </Button>
      <Button type="default" ghost={true} loading={true}>
        加载按钮
      </Button>
      <Button type="primary" block loading={true}>
        加载块状按钮
      </Button>
    </Space>
  );
}
