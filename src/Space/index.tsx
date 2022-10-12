import React from 'react';
import './index.less';

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
   * @description 内容
   * @default
   */
  children?: React.ReactNode;
};

const initProps: IProps = {
  size: 8,
  direction: 'horizontal',
};

const Button: React.FC<IProps> = (props) => {
  props = { ...initProps, ...props };

  let className = `x-space x-space-direction-${props.direction}`;

  return (
    <div className={className} style={{ gap: props.size, ...props.style }}>
      {props.children}
    </div>
  );
};

export default Button;
