import classnames from 'classnames';
import { clsPrefix } from "../_config";

/**
 * @description 组装组件的类名
 * @param name 组件类名
 * @param props
 * @returns
 */
export default function (name) {
  var _props;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var componentPrefix = "".concat(clsPrefix, "-").concat(name);
  props = (_props = props) === null || _props === void 0 ? void 0 : _props.map(function (item) {
    if (item instanceof Object) {
      var fixCls = {};

      for (var clsname in item) {
        // 将对象内的类名加上组件类名前缀
        fixCls["".concat(componentPrefix, "-").concat(clsname)] = item[clsname];
      }

      return fixCls;
    }

    return item;
  });
  var clsNames = classnames(componentPrefix, props);
  return {
    classnames: classnames,
    clsPrefix: clsPrefix,
    clsNames: clsNames
  };
}