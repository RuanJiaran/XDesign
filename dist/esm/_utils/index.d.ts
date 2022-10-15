declare type ObjPropsType = {
    [key: string]: string | number | boolean | null | undefined;
};
declare type ClassNamesProps = ((string | undefined) | ObjPropsType | (string | undefined)[])[];
/**
 * 复制文本
 * @param copyContent 复制的文本内容
 */
export declare function copy(copyContent: string): void;
/**
 * 过滤对象中不需要的属性
 * @param obj
 * @param fields
 * @returns
 */
export declare function omit(obj: ObjPropsType, fields: string[]): {
    [x: string]: string | number | boolean | null | undefined;
};
/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */
export declare function handlerClassNames(name: string, ...props: ClassNamesProps): {
    classPrefix: string;
    classNames: string;
};
export {};
