import React from 'react';
import { Button, Space } from 'xdesign-ui';

export default function () {
  return (
    <Space style={{ width: '100%' }}>
      <Button type="success" size="large" block>
        块状按钮
      </Button>
      <Button type="danger" block>
        块状按钮
      </Button>
      <Button type="warning" size="small" block>
        块状按钮
      </Button>
    </Space>
  );
}
