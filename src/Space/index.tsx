import React from 'react';
import './index.less';
import { CompBaseProps } from '..';
import useClassNames from '../_hooks/useClassNames';

type SpaceProps = {
  /**
   * @description 间距大小
   * @default     8
   */
  size?: number;
  /**
   * @description 间距方向，横向（horizontal），垂直（vertical）
   * @default     horizontal
   */
  direction?: 'vertical' | 'horizontal';
} & CompBaseProps;

const Button: React.FC<SpaceProps> = (props) => {
  const { size = 8, direction = 'horizontal', className, children, style } = props;

  const { clsNames } = useClassNames('space', className, {
    [`direction-${direction}`]: true,
  });

  return (
    <div className={clsNames} style={{ gap: size, ...style }}>
      {children}
    </div>
  );
};

export default Button;
