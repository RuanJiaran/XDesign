import { CompBaseProps } from '..';
export declare type RowProps = CompBaseProps;
export declare type ColProps = {
    /**
     * @description 每行占用列数
     */
    span?: number;
    /**
     * @description 偏移指定列数
     */
    offset?: number;
} & CompBaseProps;
