import { defineStore } from 'pinia'
import { getHomeMutidata, getHomeData } from '@/service/home.js'

export const types = ['pop', 'new', 'sell']

function getDefaultGoodsListData() {
	let goodsListOrign = {}
	types.forEach((type) => {
		goodsListOrign[type] = {page: 0, list: []}
	})
	return goodsListOrign
}

export const useHomeStore = defineStore('home', {
	state: () => ({
		banners: [],
		recommends: [],
		currentType: 'pop', // pop new sell
		goodsList: getDefaultGoodsListData()
	}),
	actions: {
		async fetchHomeMultidata() {
			const res = await getHomeMutidata()
			this.banners = res.data.banner.list
			this.recommends = res.data.recommend.list
		},
		async fetchHomeData(type, page) {
			// type: pop  new  sell
			// page: 1, 2, 3, 4
			const res = await getHomeData(type, page)
			this.goodsList[type].list.push(...res.data.list)
			this.goodsList[type].page = page
		}
	}
})