import { classPrefix } from '..';
import classnames from 'classnames';

type ObjPropsType = {
  [key: string]: string | number | boolean | null | undefined;
};

type ClassNamesProps = ((string | undefined) | ObjPropsType | (string | undefined)[])[];

/**
 * 复制文本
 * @param copyContent 复制的文本内容
 */
export function copy(copyContent: string) {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', copyContent);
  input.setAttribute('copycreate', 'yes');
  input.select();
  document.execCommand('Copy');
  // 复制完后将上面创建的 input 从 dom 中移除
  const list = document.getElementsByTagName('input');
  const inputList = Array.prototype.slice.call(list);
  inputList.forEach((item) => {
    if (item.getAttribute('copycreate')) document.body.removeChild(item);
  });
  alert('复制成功');
}

/**
 * 过滤对象中不需要的属性
 * @param obj
 * @param fields
 * @returns
 */
export function omit(obj: ObjPropsType, fields: string[]) {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */
export function handlerClassNames(name: string, ...props: ClassNamesProps) {
  const compClassPrefix = `${classPrefix}-${name}`;
  props = props?.map((item) => {
    if (item instanceof Array) {
      // 将数组内的类名加上组件类名前缀
      return item.map((name) => `${compClassPrefix}-${name}`);
    } else if (item instanceof Object) {
      const fixCls: ObjPropsType = {};
      for (const clsname in item) {
        // 将对象内的类名加上组件类名前缀
        fixCls[`${compClassPrefix}-${clsname}`] = item[clsname];
      }
      return fixCls;
    }
    return item;
  });

  const classNames = classnames(compClassPrefix, props);
  return {
    classNames,
    classPrefix,
    compClassPrefix,
  };
}
