"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const types = ["pop", "new", "sell"];
function getDefaultGoodsListData() {
  let goodsListOrign = {};
  types.forEach((type) => {
    goodsListOrign[type] = { page: 0, list: [] };
  });
  return goodsListOrign;
}
const useHomeStore = common_vendor.defineStore("home", {
  state: () => ({
    banners: [],
    recommends: [],
    currentType: "pop",
    goodsList: getDefaultGoodsListData()
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await service_home.getHomeMutidata();
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    },
    async fetchHomeData(type, page) {
      const res = await service_home.getHomeData(type, page);
      this.goodsList[type].list.push(...res.data.list);
      this.goodsList[type].page = page;
    }
  }
});
exports.types = types;
exports.useHomeStore = useHomeStore;
