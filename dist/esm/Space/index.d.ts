import React from 'react';
import './index.less';
import { CompBaseProps } from '..';
declare type SpaceProps = {
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
} & CompBaseProps;
declare const Button: React.FC<SpaceProps>;
export default Button;
