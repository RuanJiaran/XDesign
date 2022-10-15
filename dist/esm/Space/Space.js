function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { handlerClassNames } from "../_utils";
import { jsx as _jsx } from "react/jsx-runtime";

var Space = function Space(props) {
  var size = props.size,
      direction = props.direction,
      className = props.className,
      children = props.children,
      style = props.style;

  var _handlerClassNames = handlerClassNames('space', ["direction-".concat(direction)], className),
      classNames = _handlerClassNames.classNames;

  return /*#__PURE__*/_jsx("div", {
    className: classNames,
    style: _objectSpread({
      gap: size
    }, style),
    children: children
  });
};

Space.defaultProps = {
  size: 8,
  direction: 'horizontal'
};
export default Space;