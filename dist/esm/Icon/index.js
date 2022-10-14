import React from 'react';
import "./index.less";
import "./iconfont/iconfont.css";
import useClassNames from "../_hooks/useClassNames";
import { jsx as _jsx } from "react/jsx-runtime";

var Icon = function Icon(props) {
  var type = props.type,
      _props$spin = props.spin,
      spin = _props$spin === void 0 ? false : _props$spin;

  var _useClassNames = useClassNames('icon', 'icon', 'iconfont', type, {
    spin: spin
  }),
      clsNames = _useClassNames.clsNames;

  return /*#__PURE__*/_jsx("span", {
    className: clsNames
  });
};

export default Icon;