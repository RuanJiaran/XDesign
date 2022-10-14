import classnames from 'classnames';
declare type ClsObjType = {
    [key: string]: string | number | boolean | undefined;
};
declare type IProps = ((string | undefined) | ClsObjType)[];
/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */
export default function (name: string, ...props: IProps): {
    classnames: typeof classnames;
    clsPrefix: string;
    clsNames: string;
};
export {};
