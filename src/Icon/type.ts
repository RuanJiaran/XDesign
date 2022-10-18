import { StyleProps } from '../type';

export interface IconProps extends StyleProps {
  /**
   * @description 图标类型
   */
  type: string;
  /**
   * @description 图标大小
   * @default 24
   */
  size?: number;
  /**
   * @description 图标颜色
   */
  color?: string;
  /**
   * @description 是否有旋转动画
   * @default     false
   */
  spin?: boolean;
}
