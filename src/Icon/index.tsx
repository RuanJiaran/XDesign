import React from 'react';
import './index.less';
import './iconfont/iconfont.css';
import { CompBaseProps } from '..';
import useClassNames from '../_hooks/useClassNames';

export type IconProps = {
  /**
   * @description 图标类型
   */
  type: string;
  /**
   * @description 图标大小
   * @default 24
   */
  size?: number;
  /**
   * @description 图标颜色
   */
  color?: string;
  /**
   * @description 是否有旋转动画
   * @default     false
   */
  spin?: boolean;
} & CompBaseProps;

const Icon: React.FC<IconProps> = (props) => {
  const { type, spin = false, size = 24, color, style, className } = props;

  const { clsNames } = useClassNames('icon', className, 'iconfont', `icon-${type}`, {
    spin: spin,
  });

  return (
    <span
      className={clsNames}
      style={{ ...style, fontSize: `${size}px`, width: `${size}px`, height: `${size}px`, color }}
    />
  );
};

export default Icon;
