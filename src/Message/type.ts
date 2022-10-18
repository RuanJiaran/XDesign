import { StyleProps } from '../type';

export interface MessageProps extends StyleProps {
  /**
   * @description 消息类型
   * @default "default"
   */
  type?: 'default' | 'success' | 'warning' | 'error' | 'primary';
  /**
   * @description 消息文字
   */
  message: string;
  /**
   * @description 显示时间，单位为毫秒。
   * @default 3000
   */
  duration?: number;
  /**
   * @description 是否显示关闭按钮
   * @default false
   */
  close?: boolean;
}
