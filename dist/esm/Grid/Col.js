function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { clsPrefix } from "../_config";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
var classPrefix = "".concat(clsPrefix, "-col");

var Col = function Col(props) {
  var _classNames;

  var _props$span = props.span,
      span = _props$span === void 0 ? 24 : _props$span,
      offset = props.offset,
      children = props.children,
      style = props.style;
  var classes = classNames(classPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-span-").concat(span), true), _defineProperty(_classNames, "".concat(classPrefix, "-offset-").concat(offset), offset), _classNames));
  return /*#__PURE__*/_jsx("div", {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      flex: span
    }),
    children: children
  });
};

export default Col;