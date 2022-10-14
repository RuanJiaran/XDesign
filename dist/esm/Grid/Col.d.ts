import React from 'react';
import './index.less';
import { CompBaseProps } from '..';
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
declare const Col: React.FC<ColProps>;
export default Col;
