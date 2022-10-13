import React from 'react';
import './index.less';
declare type IProps = {
    /**
     * @description 每行占用列数
     */
    span: number;
    /**
     * @description 偏移指定列数
     */
    offset: number;
    /**
     * @description 额外样式
     */
    style: React.CSSProperties;
    /**
     * @description 内容
     */
    children: React.ReactNode;
};
declare const Col: React.FC<IProps>;
export default Col;
