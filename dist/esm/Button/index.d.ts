import React from 'react';
import './index.less';
export declare type IProps = {
    /**
     * @description 颜色类型，默认（default）、主色（primary）、浅灰（info）、红色（danger）、黄色（warning）、绿色（success）
     * @default     default
     */
    type?: 'default' | 'primary' | 'danger' | 'success' | 'warning' | 'info';
    /**
     * @description 尺寸，超小（mini）、小（small）、中（middle）、大（large）
     * @default     middle
     */
    size?: 'mini' | 'small' | 'middle' | 'large';
    /**
     * @description 原生 type 属性
     * @default     button
     */
    nativeType?: 'button' | 'submit' | 'reset';
    /**
     * @description 按钮形式，基础（base）、线框（outline）、虚线（dashed）、文字（text）
     * @default     base
     */
    variant?: 'base' | 'outline' | 'dashed' | 'text';
    /**
     * @description 按钮形状，长方形（rectangle）、圆角长方形（round）、圆形（circle）
     * @default     rectangle
     */
    shape?: 'rectangle' | 'round' | 'circle';
    /**
     * @description 是否为块级元素
     * @default
     */
    block?: boolean;
    /**
     * @description 禁用状态
     * @default
     */
    disabled?: boolean;
    /**
     * @description 是否显示为加载状态
     * @default
     */
    loading?: boolean;
    /**
     * @description 按钮内部图标
     */
    icon?: string;
    /**
     * @description 按钮内容
     * @default
     */
    content?: React.ReactNode;
    /**
     * @description 按钮内容，同 content
     * @default
     */
    children?: React.ReactNode;
    /**
     * @description 点击事件，点击时触发
     * @default
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare const Button: React.FC<IProps>;
export default Button;
