import { clsPrefix } from '..';
import classnames from 'classnames';

type ClsObjType = { [key: string]: string | number | boolean | undefined };

type IProps = ((string | undefined) | ClsObjType)[];

/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */
export default function (name: string, ...props: IProps) {
  const componentPrefix = `${clsPrefix}-${name}`;
  props = props?.map((item) => {
    if (item instanceof Object) {
      const fixCls: ClsObjType = {};
      for (const clsname in item) {
        // 将对象内的类名加上组件类名前缀
        fixCls[`${componentPrefix}-${clsname}`] = item[clsname];
      }
      return fixCls;
    }
    return item;
  });

  const clsNames = classnames(componentPrefix, props);
  return {
    classnames,
    clsPrefix,
    clsNames,
  };
}
