import React, { useState } from 'react';
import { alertDefaultProps } from './defaultProps';
import { AlertProps, AlertThemeProps } from './type';
import { handlerClassNames } from '../_utils';
import { Icon } from '../Icon';

const IconWrap: React.FC<{ type: AlertThemeProps }> = ({ type }) => {
  switch (type) {
    case 'default':
      return <Icon type="info" />;
    case 'success':
      return <Icon type="round_check" />;
    case 'error':
      return <Icon type="delete-filling" />;
    case 'warning':
      return <Icon type="warning_outlined" />;
    case 'primary':
      return <Icon type="info" />;
    default:
      return <Icon type="info" />;
  }
};

const Alert: React.FC<AlertProps> = (props) => {
  const { type, title, message, close, onClose, className, style } = props;
  const [showAlert, setShowAlert] = useState(false);

  const { classNames, compClassPrefix } = handlerClassNames(
    'alert',
    [`type-${type}`],
    {
      close: showAlert,
    },
    className,
  );

  const closeAlert = (e: React.MouseEvent) => {
    setShowAlert(true);
    onClose && onClose(e);
  };

  return (
    <div className={classNames} style={style}>
      <div className={`${compClassPrefix}-icon`}>
        <IconWrap type={type as AlertThemeProps} />
      </div>
      <div className={`${compClassPrefix}-content`}>
        {title && <div className={`${compClassPrefix}-content-title`}>{title}</div>}
        {message && <div className={`${compClassPrefix}-content-message`}>{message}</div>}
      </div>
      {close && (
        <div className={`${compClassPrefix}-close-icon`} onClick={closeAlert}>
          <Icon type="delete3" />
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = alertDefaultProps;

export default Alert;
