import React from 'react';
import { Message, Button, Space } from 'xdesign-ui';

export default function () {
  const showMessage = (type: string) => {
    Message({ type: type, message: '这是一条消息' });
  };
  return (
    <Space>
      <Button ghost={true} onClick={() => showMessage('default')}>
        default
      </Button>
      <Button ghost={true} onClick={() => showMessage('success')}>
        success
      </Button>
      <Button ghost={true} onClick={() => showMessage('warning')}>
        warning
      </Button>
      <Button ghost={true} onClick={() => showMessage('error')}>
        error
      </Button>
      <Button ghost={true} onClick={() => showMessage('primary')}>
        primary
      </Button>
    </Space>
  );
}
