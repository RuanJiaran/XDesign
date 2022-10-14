import React from 'react';
import "./index.less";
import useClassNames from "../_hooks/useClassNames";
import { jsx as _jsx } from "react/jsx-runtime";

var Row = function Row(props) {
  var children = props.children,
      style = props.style,
      className = props.className;

  var _useClassNames = useClassNames('row', className),
      clsNames = _useClassNames.clsNames;

  return /*#__PURE__*/_jsx("div", {
    className: clsNames,
    style: style,
    children: children
  });
};

export default Row;