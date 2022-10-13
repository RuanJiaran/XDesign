import React from 'react';
import { Button, Space } from 'xdesign-ui';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Index = function Index() {
  return /*#__PURE__*/_jsxs(Space, {
    children: [/*#__PURE__*/_jsx(Button, {
      size: "large",
      type: "primary",
      children: "\u5927\u578B\u6309\u94AE"
    }), /*#__PURE__*/_jsx(Button, {
      size: "middle",
      type: "primary",
      children: "\u4E2D\u578B\u6309\u94AE"
    }), /*#__PURE__*/_jsx(Button, {
      size: "small",
      type: "primary",
      children: "\u5C0F\u578B\u6309\u94AE"
    }), /*#__PURE__*/_jsx(Button, {
      size: "mini",
      type: "primary",
      onClick: function onClick(e) {
        console.log(e);
      },
      children: "\u8D85\u5C0F\u6309\u94AE"
    })]
  });
};

export default Index;