function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { handlerClassNames } from "../_utils";
import { jsx as _jsx } from "react/jsx-runtime";

var Icon = function Icon(props) {
  var type = props.type,
      _props$spin = props.spin,
      spin = _props$spin === void 0 ? false : _props$spin,
      size = props.size,
      color = props.color,
      style = props.style,
      className = props.className;

  var _handlerClassNames = handlerClassNames('icon', 'iconfont', "icon-".concat(type), {
    spin: spin
  }, className),
      classNames = _handlerClassNames.classNames;

  return /*#__PURE__*/_jsx("span", {
    className: classNames,
    style: _objectSpread(_objectSpread({}, style), {}, {
      fontSize: "".concat(size, "px"),
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      color: color
    })
  });
};

Icon.defaultProps = {
  size: 24
};
export default Icon;