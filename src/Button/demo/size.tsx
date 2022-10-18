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
    </Space>
  );
};

export default Index;
