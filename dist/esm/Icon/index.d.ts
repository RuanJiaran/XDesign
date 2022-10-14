import React from 'react';
import './index.less';
import './iconfont/iconfont.css';
import { CompBaseProps } from '..';
export declare type IconProps = {
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
} & CompBaseProps;
declare const Icon: React.FC<IconProps>;
export default Icon;
