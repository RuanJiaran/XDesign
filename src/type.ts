export interface StyleProps {
  /**
   * @description 自定义组件类名
   */
  className?: string;
  /**
   * @description 自定义组件样式
   */
  style?: React.CSSProperties;
}

export interface ChildrenProps {
  /**
   * @description 组件内容
   */
  children?: React.ReactNode;
}

export interface OnClickProps {
  /**
   * @description 点击事件，点击时触发
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type SizeEnum = 'small' | 'middle' | 'large';
