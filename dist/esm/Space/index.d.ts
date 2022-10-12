import React from 'react';
import './index.less';
declare type IProps = {
    /**
     * @description 间距大小
     * @default     8
     */
    size?: number;
    /**
     * @description 间距方向，横向（horizontal），垂直（vertical）
     * @default     horizontal
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * @description 样式
     */
    style?: React.CSSProperties;
    /**
     * @description 内容
     * @default
     */
    children?: React.ReactNode;
};
declare const Button: React.FC<IProps>;
export default Button;
