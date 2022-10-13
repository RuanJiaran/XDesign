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
