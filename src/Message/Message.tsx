import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from '../Alert';
import { handlerClassNames } from '../_utils';
import { messageDefaultProps } from './defaultProps';
import { MessageProps } from './type';

const Message = (props: MessageProps) => {
  const { type, message, close, duration, className, style } = { ...messageDefaultProps, ...props };
  const { classNames } = handlerClassNames('message', className);
  const div = document.createElement('div');

  ReactDOM.render(
    <div className={classNames} style={style}>
      <Alert type={type} message={message} close={close} />
    </div>,
    div,
  );

  document.body.appendChild(div);

  if (duration) {
    setTimeout(() => {
      document.body.removeChild(div);
    }, duration);
  }
};

export default Message;
