function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import "./index.less";
import useClassNames from "../_hooks/useClassNames";
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(props) {
  var _useClassNames2;

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
      children = props.children,
      onClick = props.onClick;

  var _useClassNames = useClassNames('btn', className, (_useClassNames2 = {}, _defineProperty(_useClassNames2, "type-".concat(type), true), _defineProperty(_useClassNames2, "size-".concat(size), true), _defineProperty(_useClassNames2, "variant-".concat(variant), variant), _defineProperty(_useClassNames2, "block", block), _useClassNames2)),
      clsNames = _useClassNames.clsNames;

  return /*#__PURE__*/_jsx("button", {
    className: clsNames,
    type: nativeType,
    disabled: disabled,
    onClick: onClick,
    style: style,
    children: /*#__PURE__*/_jsx("span", {
      children: children
    })
  });
};

export default Button;