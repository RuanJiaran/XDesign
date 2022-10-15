import React from 'react';
import { handlerClassNames } from '../_utils';
import { IconProps } from './type';

const Icon: React.FC<IconProps> = (props) => {
  const { type, spin = false, size, color, style, className } = props;

  const { classNames } = handlerClassNames(
    'icon',
    'iconfont',
    `icon-${type}`,
    {
      spin: spin,
    },
    className,
  );

  return (
    <span
      className={classNames}
      style={{ ...style, fontSize: `${size}px`, width: `${size}px`, height: `${size}px`, color }}
    />
  );
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
