import React from 'react';
import { ChildrenProps, OnClickProps, SizeEnum, StyleProps } from '../type';

export interface ButtonProps extends StyleProps, ChildrenProps, OnClickProps {
  /**
   * @description 颜色类型
   * @default     default
   */
  type?: 'default' | 'primary' | 'danger' | 'success' | 'warning';
  /**
   * @description 尺寸，小（small）、中（middle）、大（large）
   * @default     middle
   */
  size?: SizeEnum;
  /**
   * @description 原生 type 属性
   * @default     button
   */
  nativeType?: 'button' | 'submit' | 'reset';
  /**
   * @description 是否为镂空按钮
   * @default false
   */
  ghost?: boolean;
  /**
   * @description 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * @description 禁用状态
   */
  disabled?: boolean;
  /**
   * @description 是否显示为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 按钮内部图标
   */
  icon?: React.ReactNode;
}
