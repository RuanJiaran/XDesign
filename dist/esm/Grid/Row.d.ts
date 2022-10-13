import React from 'react';
import './index.less';
declare type IProps = {
    /**
     * @description 类名
     */
    className: string;
    /**
     * @description 样式
     */
    style: React.CSSProperties;
    /**
     * @description 内容
     */
    children: React.ReactNode;
};
declare const Row: React.FC<IProps>;
export default Row;
