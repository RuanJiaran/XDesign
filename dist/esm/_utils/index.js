function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { classPrefix } from '..';
import classnames from 'classnames';

/**
 * 复制文本
 * @param copyContent 复制的文本内容
 */
export function copy(copyContent) {
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', copyContent);
  input.setAttribute('copycreate', 'yes');
  input.select();
  document.execCommand('Copy'); // 复制完后将上面创建的 input 从 dom 中移除

  var list = document.getElementsByTagName('input');
  var inputList = Array.prototype.slice.call(list);
  inputList.forEach(function (item) {
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

export function omit(obj, fields) {
  var shallowCopy = _objectSpread({}, obj);

  for (var i = 0; i < fields.length; i++) {
    var _key = fields[i];
    delete shallowCopy[_key];
  }

  return shallowCopy;
}
/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */

export function handlerClassNames(name) {
  var _props;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    props[_key2 - 1] = arguments[_key2];
  }

  var componentPrefix = "".concat(classPrefix, "-").concat(name);
  props = (_props = props) === null || _props === void 0 ? void 0 : _props.map(function (item) {
    if (item instanceof Array) {
      // 将数组内的类名加上组件类名前缀
      return item.map(function (name) {
        return "".concat(componentPrefix, "-").concat(name);
      });
    } else if (item instanceof Object) {
      var fixCls = {};

      for (var clsname in item) {
        // 将对象内的类名加上组件类名前缀
        fixCls["".concat(componentPrefix, "-").concat(clsname)] = item[clsname];
      }

      return fixCls;
    }

    return item;
  });
  var classNames = classnames(componentPrefix, props);
  return {
    classPrefix: classPrefix,
    classNames: classNames
  };
}