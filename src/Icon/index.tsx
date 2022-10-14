import React from 'react';
import './index.less';
import './iconfont/iconfont.css';
import { CompBaseProps } from '..';
import useClassNames from '../_hooks/useClassNames';

export type IconProps = {
  /**
   * @description icon 类型
   */
  type: string;
  /**
   * @description 是否有旋转动画
   * @default     false
   */
  spin?: boolean;
} & CompBaseProps;

const Icon: React.FC<IconProps> = (props) => {
  const { type, spin = false } = props;

  const { clsNames } = useClassNames('icon', 'icon', 'iconfont', type, {
    spin: spin,
  });

  return <span className={clsNames} />;
};

export default Icon;
