import React from 'react';
import { handlerClassNames } from "../_utils";
import { jsx as _jsx } from "react/jsx-runtime";

var Row = function Row(props) {
  var children = props.children,
      style = props.style,
      className = props.className;

  var _handlerClassNames = handlerClassNames('row', className),
      classNames = _handlerClassNames.classNames;

  return /*#__PURE__*/_jsx("div", {
    className: classNames,
    style: style,
    children: children
  });
};

export default Row;