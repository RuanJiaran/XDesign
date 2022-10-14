import React from 'react';
import { Icon, Space } from 'xdesign-ui';
import { copy } from "../../_utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var style = {
  background: '#f3f3f3',
  height: '80px',
  width: '120px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  cursor: 'pointer'
};

var IconWrap = function IconWrap(props) {
  var name = props.name,
      _props$spin = props.spin,
      spin = _props$spin === void 0 ? false : _props$spin;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      style: style,
      onClick: function onClick() {
        return copy(name);
      },
      children: [/*#__PURE__*/_jsx(Icon, {
        type: name,
        spin: spin
      }), /*#__PURE__*/_jsx("span", {
        children: name
      })]
    })
  });
};

var Index = function Index() {
  return /*#__PURE__*/_jsxs(Space, {
    children: [/*#__PURE__*/_jsx(IconWrap, {
      name: "loading",
      spin: true
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "back"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "delete"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "edit"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "settings"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "cancel"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "down"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "home"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "favoriteslist"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "close"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "increase"
    }), /*#__PURE__*/_jsx(IconWrap, {
      name: "collection"
    })]
  });
};

export default Index;