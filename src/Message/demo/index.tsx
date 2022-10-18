import React from 'react';
import { Message, Button } from 'xdesign-ui';

export default function () {
  const showMessage = () => {
    Message({ message: '这是一条消息' });
  };
  return (
    <>
      <Button ghost={true} onClick={showMessage}>
        消息提示
      </Button>
    </>
  );
}
