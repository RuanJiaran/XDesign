import React from 'react';
import './index.less';
import useClassNames from '../_hooks/useClassNames';
import { CompBaseProps } from '../index';

export type ButtonProps = {
  /**
   * @description 颜色类型，默认（default）、主色（primary）、浅灰（info）、红色（danger）、黄色（warning）、绿色（success）
   * @default     default
   */
  type?: 'default' | 'primary' | 'danger' | 'success' | 'warning' | 'info';
  /**
   * @description 尺寸，超小（mini）、小（small）、中（middle）、大（large）
   * @default     middle
   */
  size?: 'mini' | 'small' | 'middle' | 'large';
  /**
   * @description 原生 type 属性
   * @default     button
   */
  nativeType?: 'button' | 'submit' | 'reset';
  /**
   * @description 按钮形式，基础（base）、线框（outline）、虚线（dashed）、文字（text）
   * @default     base
   */
  variant?: 'base' | 'outline' | 'dashed' | 'text';
  /**
   * @description 按钮形状，长方形（rectangle）、圆角长方形（round）、圆形（circle）
   * @default     rectangle
   */
  // shape?: 'rectangle' | 'round' | 'circle';
  /**
   * @description 是否为块级元素
   */
  block?: boolean;
  /**
   * @description 禁用状态
   */
  disabled?: boolean;
  /**
   * @description 是否显示为加载状态
   */
  loading?: boolean;
  /**
   * @description 按钮内部图标
   */
  icon?: string;
  /**
   * @description 点击事件，点击时触发
   */
  onClick?: (e: React.MouseEvent) => void;
} & CompBaseProps;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'middle',
    nativeType = 'button',
    variant = 'base',
    // shape = 'rectangle',
    disabled,
    block,
    className,
    style,
    children,
    onClick,
  } = props;

  const { clsNames } = useClassNames('btn', className, {
    [`type-${type}`]: true,
    [`size-${size}`]: true,
    [`variant-${variant}`]: variant,
    block: block,
    // [`${clsPrefix}-btn-shape`]: shape,
  });

  return (
    <button
      className={clsNames}
      type={nativeType}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
