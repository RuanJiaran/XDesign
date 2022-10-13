function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import "./index.less";
import { clsPrefix } from "../_config";
import { jsx as _jsx } from "react/jsx-runtime";
var classPrefix = "".concat(clsPrefix, "-btn");

var Button = function Button(props) {
  var _classNames;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      _props$nativeType = props.nativeType,
      nativeType = _props$nativeType === void 0 ? 'button' : _props$nativeType,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'base' : _props$variant,
      disabled = props.disabled,
      block = props.block,
      className = props.className,
      style = props.style,
      content = props.content,
      children = props.children,
      onClick = props.onClick;
  var btnClasses = classNames(classPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-type-").concat(type), true), _defineProperty(_classNames, "".concat(classPrefix, "-size-").concat(size), true), _defineProperty(_classNames, "".concat(classPrefix, "-variant-").concat(variant), variant), _defineProperty(_classNames, "".concat(classPrefix, "-block"), block), _classNames), className);
  return /*#__PURE__*/_jsx("button", {
    className: btnClasses,
    type: nativeType,
    disabled: disabled,
    onClick: onClick,
    style: style,
    children: /*#__PURE__*/_jsx("span", {
      children: children || content
    })
  });
};

export default Button;