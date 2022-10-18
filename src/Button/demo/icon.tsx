import React from 'react';
import { Button, Space, Icon, Row } from 'xdesign-ui';

export default function () {
  return (
    <>
      <Row>
        <Space>
          <Button type="primary" disabled size="large" icon={<Icon type="search_light" />}>
            加载按钮
          </Button>
          <Button type="primary" disabled size="large" ghost={true} icon={<Icon type="tianjia5" />}>
            新建
          </Button>
          <Button type="default" size="large" ghost={true} icon={<Icon type="cloud-outline" />}>
            上传文件
          </Button>
        </Space>
      </Row>
      <Row>
        <Space style={{ width: '100%' }}>
          <Button type="primary" icon={<Icon type="search_light" />}>
            加载按钮
          </Button>
          <Button type="primary" ghost={true} icon={<Icon type="tianjia5" />}>
            新建
          </Button>
          <Button type="default" ghost={true} disabled icon={<Icon type="cloud-outline" />}>
            上传文件
          </Button>
        </Space>
      </Row>
      <Row>
        <Space style={{ width: '100%' }}>
          <Button type="primary" size="small" icon={<Icon type="search_light" />}>
            加载按钮
          </Button>
          <Button type="primary" size="small" disabled ghost={true} icon={<Icon type="tianjia5" />}>
            新建
          </Button>
          <Button
            type="default"
            size="small"
            ghost={true}
            disabled
            icon={<Icon type="cloud-outline" />}
          >
            上传文件
          </Button>
        </Space>
      </Row>
    </>
  );
}
