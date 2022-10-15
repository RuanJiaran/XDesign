import React from 'react';
import { omit } from '../_utils';
import { buttonDefaultProps } from './defaultProps';
import { ButtonProps } from './type';
import { handlerClassNames } from '../_utils';

const Button: React.FC<ButtonProps> = (props) => {
  const { type, size, nativeType, variant, disabled, block, className, style, children, onClick } =
    props;

  const { classNames } = handlerClassNames(
    'btn',
    [`type-${type}`, `size-${size}`],
    {
      [`variant-${variant}`]: variant,
      block: block,
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
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = buttonDefaultProps;

export default Button;
