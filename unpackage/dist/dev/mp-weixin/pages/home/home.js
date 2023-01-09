"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + TabControl)();
}
const HomeBanner = () => "./cpns/home-banner.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomePopular = () => "./cpns/home-popular.js";
const TabControl = () => "../../components/tab-control/tab-control.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(homeStore);
    homeStore.fetchHomeMultidata();
    common_vendor.onLoad(() => {
    });
    function handleBannerItemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function handleRecommendItemClick(item) {
      console.log("item: ", item);
    }
    function handleTabItemClick(index) {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(handleRecommendItemClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(handleTabItemClick),
        f: common_vendor.p({
          titles: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/23634/Desktop/learn/learn_uniapp/hyMall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
