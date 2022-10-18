import React from 'react';
import { Button, Space, Row } from 'xdesign-ui';

const Index = () => {
  return (
    <>
      <Row>
        <Space>
          <Button type="default" disabled>
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
        </Space>
      </Row>
      <Row>
        <Space>
          <Button type="default" ghost={true} disabled>
            default
          </Button>
          <Button type="primary" ghost={true} disabled>
            primary
          </Button>
          <Button type="success" ghost={true} disabled>
            success
          </Button>
          <Button type="danger" ghost={true} disabled>
            danger
          </Button>
          <Button type="warning" ghost={true} disabled>
            warning
          </Button>
        </Space>
      </Row>
    </>
  );
};

export default Index;
