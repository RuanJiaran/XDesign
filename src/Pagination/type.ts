import { ChildrenProps, StyleProps } from '../type';

export interface PaginationProps extends StyleProps {
  /**
   * @description 数据总条数
   */
  total: number;
  /**
   * @description 当前页
   * @default 1
   */
  current?: number;
  /**
   * @description 每页展示条数
   * @default 10
   */
  pageSize?: number;
  /**
   * @description 按钮大小
   * @default "middle"
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * @description 分页改变时触发
   */
  onChange?: (pageInfo: { current: number; pageSize: number }) => void;
}
