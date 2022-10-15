import { CompBaseProps } from '..';
export declare type SpaceProps = {
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
