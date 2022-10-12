import React from 'react';
import classNames from 'classnames';
import './index.less';
import { clsPrefix } from '../_config';

const classPrefix = `${clsPrefix}-space`;

type IProps = {
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
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 内容
   */
  children?: React.ReactNode;
};

const Button: React.FC<IProps> = (props) => {
  const { size = 8, direction = 'horizontal', className, children, style } = props;

  const spaceClsNames = classNames(
    classPrefix,
    {
      [`${classPrefix}-direction-${direction}`]: true,
    },
    className,
  );

  return (
    <div className={spaceClsNames} style={{ gap: size, ...style }}>
      {children}
    </div>
  );
};

export default Button;
