import React from 'react';
import classNames from 'classnames';
import { clsPrefix } from "../_config";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
var classPrefix = "".concat(clsPrefix, "-row");

var Row = function Row(props) {
  var children = props.children,
      style = props.style,
      className = props.className;
  var classes = classNames(classPrefix, className);
  return /*#__PURE__*/_jsx("div", {
    className: classes,
    style: style,
    children: children
  });
};

export default Row;