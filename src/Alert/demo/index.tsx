import React from 'react';
import { Alert, Space } from 'xdesign-ui';

export default function () {
  return (
    <Space direction="vertical">
      <Alert type="default" message="这是一条默认的消息提示" close />
      <Alert type="success" message="这是一条成功的消息提示" close />
      <Alert type="warning" message="这是一条警示消息" close />
      <Alert type="error" message="高危操作/出错信息提示" close />
      <Alert
        type="primary"
        message="这是一条普通的消息提示描述，这是一条普通的消息提示描述"
        title="这是标题"
        close
        onClose={(e: React.MouseEvent) => {
          console.log(e);
        }}
      />
    </Space>
  );
}
