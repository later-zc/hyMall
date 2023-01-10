"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail",
  props: {
    iid: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.iid)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/23634/Desktop/learn/learn_uniapp/hyMall/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
