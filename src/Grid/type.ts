import { ChildrenProps, StyleProps } from '../type';

export interface ColProps extends StyleProps, ChildrenProps {
  /**
   * @description 每行占用列数
   */
  span?: number;
  /**
   * @description 偏移指定列数
   */
  offset?: number;
}

export interface RowProps extends StyleProps, ChildrenProps {
  /**
   * @description 栅格间隔,[行间距，列间距]
   * @default [8,0]
   */
  gutter?: number[];
}
