import React from 'react';
import { Icon, Space } from 'xdesign-ui';
import { copy } from "../../_utils";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var IconWrap = function IconWrap(props) {
  var name = props.name,
      _props$spin = props.spin,
      spin = _props$spin === void 0 ? false : _props$spin;
  var icon = '';
  icon = spin ? "<Icon type='".concat(name, "' spin=").concat(spin, "/>") : "<Icon type='".concat(name, "'/>");
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "icon-item",
      onClick: function onClick() {
        return copy(icon);
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

var CategoryIconWrap = function CategoryIconWrap(props) {
  return /*#__PURE__*/_jsxs("div", {
    className: "category-wrap",
    children: [/*#__PURE__*/_jsx("div", {
      className: "title",
      children: props.title
    }), /*#__PURE__*/_jsx(Space, {
      children: props.children
    })]
  });
};

var Index = function Index() {
  return /*#__PURE__*/_jsxs(Space, {
    children: [/*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u52A0\u8F7D\u7C7B\u56FE\u6807",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "loading3",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "loading2",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "Loading",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "loading1",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "jiazailoading-A",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "loading5",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "Loading1",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "Loading2",
        spin: true
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "loading",
        spin: true
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u641C\u7D22\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "search"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "search1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "search_light"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "search_list_light"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "filesearch"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "searchcart"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u6DFB\u52A0\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "tianjia1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjia5"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "diannaotianjia"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjiadingyue"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjia7"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tupiantianjia"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjiawenjian1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjia8"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "piliangtianjia"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tianjiawenjian2"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u7F16\u8F91\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "edit1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit3"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit4"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit5"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit7"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "edit8"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u5220\u9664\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "delete"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete3"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "deleteteam"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete4"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete6"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete7"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete8"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "delete-filling"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u63D0\u793A\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "warning_outlined"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "info"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "wifi"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "warn"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "alarm-check"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "info1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "question-circle"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "file-exclamation"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "check"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "question"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "cloud-exclamation"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "round_check"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "wifi_exclamationmark"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "rcd-exclamation"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u7BAD\u5934\u65B9\u5411\u7C7B",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "list"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "list1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "fullscreen"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "fullscreen-exit"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "vertical-align-top"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "enter1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "rollback"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "vertical-align-middl"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "vertical-align-botto"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "verticalright"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "vertical-left"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "swap"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "swap1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "swap-right"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "swap-left"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "circle-down"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "circle-left"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "circle-right"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-up"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrowright"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrowup"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrowleft"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrowdown"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow_up_arrow_down_circle"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow_up_arrow_down_circle1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-up-circle"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-right-circle"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-down"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-right"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-double-left"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-left-circle"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-double-right"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-up-filling"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-down-filling"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-left-filling"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-right-filling"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow_up"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow2"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "arrow-down-circle-outline"
      })]
    }), /*#__PURE__*/_jsxs(CategoryIconWrap, {
      title: "\u5176\u5B83",
      children: [/*#__PURE__*/_jsx(IconWrap, {
        name: "money"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "moneybag"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "meiyuan"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "money1"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "uf_money"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "staroutline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "cloud-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "home-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "mic-off-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "pin-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "grid-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "eye-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "at-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "link--outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "mic-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "moon-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "like-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "cast-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "link-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "phone-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "tv-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "code-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "kaishi-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "zanting-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "fanhui-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "huiyuan-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "qianbao-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "MoneyOutline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "SoundOutline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "RouterOutline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "planet-outline"
      }), /*#__PURE__*/_jsx(IconWrap, {
        name: "Logout-Outlined"
      })]
    })]
  });
};

export default Index;