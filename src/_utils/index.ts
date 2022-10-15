type ObjPropsType = {
  [key: string]: string | number | boolean | null | undefined;
};

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
