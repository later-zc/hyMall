"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_grid_view_item2 = common_vendor.resolveComponent("grid-view-item");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_grid_view_item2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_grid_view_item = () => "../../components/grid-view-item/grid-view-item.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + TabControl + _easycom_grid_view_item + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const HomeBanner = () => "./cpns/home-banner.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomePopular = () => "./cpns/home-popular.js";
const TabControl = () => "../../components/tab-control/tab-control.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends, goodsList, currentType } = common_vendor.storeToRefs(homeStore);
    homeStore.fetchHomeMultidata();
    homeStore.fetchHomeData("pop", 1);
    homeStore.fetchHomeData("new", 1);
    homeStore.fetchHomeData("sell", 1);
    common_vendor.onLoad(() => {
    });
    common_vendor.onReachBottom(() => {
      homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1);
    });
    function handleBannerItemClick(link2) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link2
      });
    }
    function handleRecommendItemClick(item) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function handleTabItemClick(index) {
      homeStore.setCurrentType(store_home.types[index]);
    }
    function handleGridItemClick(itemInfo) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?iid=" + itemInfo.iid
      });
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
        }),
        g: common_vendor.f(common_vendor.unref(goodsList)[common_vendor.unref(currentType)].list, (item, k0, i0) => {
          return {
            a: common_vendor.o(handleGridItemClick, item.iid),
            b: "cfec53d6-6-" + i0 + "," + ("cfec53d6-5-" + i0),
            c: common_vendor.p({
              item
            }),
            d: "cfec53d6-5-" + i0 + ",cfec53d6-4",
            e: item.iid
          };
        }),
        h: common_vendor.p({
          index: _ctx.index
        }),
        i: common_vendor.p({
          column: 2,
          showBorder: true,
          square: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/23634/Desktop/learn/learn_uniapp/hyMall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
