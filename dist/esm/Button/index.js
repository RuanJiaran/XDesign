function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
var initProps = {
  type: 'default',
  size: 'middle',
  nativeType: 'button',
  variant: 'base'
};

var Button = function Button(props) {
  var _props, _props2;

  props = _objectSpread(_objectSpread({}, initProps), props);
  var btnDivClassName = "x-btn-type-".concat(props.type);
  var btnClassName = "x-btn x-btn-size-".concat(props.size, " x-btn-variant-").concat(props.variant);
  if ((_props = props) !== null && _props !== void 0 && _props.disabled) btnClassName = "".concat(btnClassName, " x-is-disabled");

  if ((_props2 = props) !== null && _props2 !== void 0 && _props2.block) {
    btnClassName = "".concat(btnClassName, " x-btn-block");
    btnDivClassName = "".concat(btnDivClassName, " x-btn-block");
  }

  return /*#__PURE__*/_jsx("div", {
    style: {
      display: 'inline-block'
    },
    className: btnDivClassName,
    children: /*#__PURE__*/_jsx("button", {
      className: btnClassName,
      type: props.nativeType,
      disabled: props.disabled,
      onClick: props.onClick,
      children: /*#__PURE__*/_jsx("span", {
        children: props.children || props.content
      })
    })
  });
};

export default Button;