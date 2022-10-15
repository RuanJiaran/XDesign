// 所有组件样式前缀
export const classPrefix = 'xd';

// 组件公共属性
export type CompBaseProps = {
  /**
   * @description 组件内容
   */
  children?: React.ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
};

export * from './Button';
export * from './Icon';
export * from './Space';
export * from './Grid';
