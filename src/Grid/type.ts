import { CompBaseProps } from '..';

export type RowProps = CompBaseProps;

export type ColProps = {
  /**
   * @description 每行占用列数
   */
  span?: number;
  /**
   * @description 偏移指定列数
   */
  offset?: number;
} & CompBaseProps;
