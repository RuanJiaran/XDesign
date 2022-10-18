import React from 'react';
import { StyleProps } from '../type';

export type AlertThemeProps = 'default' | 'primary' | 'success' | 'warning' | 'error';

export interface AlertProps extends StyleProps {
  /**
   * @description 组件风格
   * @default "default"
   * @type 'default' | 'primary' | 'success' | 'warning' | 'error';
   */
  type?: AlertThemeProps;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 内容
   */
  message?: string;
  /**
   * @description 是否显示关闭按钮
   * @default false
   */
  close?: boolean;
  /**
   * @description 点击关闭按钮时触发
   */
  onClose?: (e: React.MouseEvent) => void;
}
