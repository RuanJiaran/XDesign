import React from 'react';
import { omit } from '../_utils';
import { buttonDefaultProps } from './defaultProps';
import { ButtonProps } from './type';
import { handlerClassNames } from '../_utils';
import { Icon } from '../Icon';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type,
    size,
    nativeType,
    disabled,
    ghost,
    loading,
    icon,
    block,
    className,
    style,
    onClick,
  } = props;

  const { classNames } = handlerClassNames(
    'btn',
    [`type-${type}`, `size-${size}`],
    {
      block: block,
      ghost: ghost,
    },
    className,
  );

  return (
    <button
      className={classNames}
      type={nativeType}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {icon && icon}
      {!icon && loading && <Icon type="loading5" spin={true} />}
      <span>{props.children}</span>
    </button>
  );
};

Button.defaultProps = buttonDefaultProps;

export default Button;
