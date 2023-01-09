"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerItemClick"],
  setup(__props, { emit }) {
    function handleItemClick(item) {
      emit("bannerItemClick", item.link);
    }
    common_vendor.onUpdated(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleItemClick(item), item),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/23634/Desktop/learn/learn_uniapp/hyMall/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);
