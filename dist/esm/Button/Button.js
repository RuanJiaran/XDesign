function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { buttonDefaultProps } from "./defaultProps";
import { handlerClassNames } from "../_utils";
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(props) {
  var _handlerClassNames2;

  var type = props.type,
      size = props.size,
      nativeType = props.nativeType,
      variant = props.variant,
      disabled = props.disabled,
      block = props.block,
      className = props.className,
      style = props.style,
      children = props.children,
      onClick = props.onClick;

  var _handlerClassNames = handlerClassNames('btn', ["type-".concat(type), "size-".concat(size)], (_handlerClassNames2 = {}, _defineProperty(_handlerClassNames2, "variant-".concat(variant), variant), _defineProperty(_handlerClassNames2, "block", block), _handlerClassNames2), className),
      classNames = _handlerClassNames.classNames;

  return /*#__PURE__*/_jsx("button", {
    className: classNames,
    type: nativeType,
    disabled: disabled,
    onClick: onClick,
    style: style,
    children: /*#__PURE__*/_jsx("span", {
      children: children
    })
  });
};

Button.defaultProps = buttonDefaultProps;
export default Button;