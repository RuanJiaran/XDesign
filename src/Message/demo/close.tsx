import React from 'react';
import { Message, Button, Space } from 'xdesign-ui';

export default function () {
  return (
    <Space>
      <Button
        ghost={true}
        onClick={() => Message({ close: true, message: '这是一条消息可关闭的消息提示' })}
      >
        显示关闭按钮的消息提示
      </Button>
      <Button ghost={true} onClick={() => Message({ duration: 5000, message: '5s 后自动关闭' })}>
        5s 后关闭
      </Button>
    </Space>
  );
}
