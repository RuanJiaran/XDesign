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
