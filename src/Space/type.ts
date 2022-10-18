import { ChildrenProps, StyleProps } from '../type';

export interface SpaceProps extends StyleProps, ChildrenProps {
  /**
   * @description 间距大小
   * @default     8
   */
  size?: number;
  /**
   * @description 间距方向，行 | 列
   * @default     horizontal
   */
  direction?: 'horizontal' | 'vertical';
}
