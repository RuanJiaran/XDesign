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
    </Space>
  );
};

export default Index;
