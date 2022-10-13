import React from 'react';
import { Button, Space } from 'xdesign-ui';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Index = function Index() {
  return /*#__PURE__*/_jsxs(Space, {
    children: [/*#__PURE__*/_jsx(Button, {
      type: "default",
      disabled: true,
      onClick: function onClick(e) {
        console.log(e);
      },
      children: "default"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      disabled: true,
      children: "primary"
    }), /*#__PURE__*/_jsx(Button, {
      type: "success",
      disabled: true,
      children: "success"
    }), /*#__PURE__*/_jsx(Button, {
      type: "danger",
      disabled: true,
      children: "danger"
    }), /*#__PURE__*/_jsx(Button, {
      type: "warning",
      disabled: true,
      children: "warning"
    }), /*#__PURE__*/_jsx(Button, {
      type: "info",
      disabled: true,
      children: "info"
    })]
  });
};

export default Index;