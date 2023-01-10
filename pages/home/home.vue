<template>
  <view class="content">
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
		<home-recommend :recommends="recommends" @recommendItemClick="handleRecommendItemClick"></home-recommend>
		<home-popular></home-popular>
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
		<uni-grid :column="2" :showBorder="true" :square="false">
			<template v-for="item in goodsList[currentType].list" :key="item.iid">
				<uni-grid-item class="grid-item" :index="index">
					<grid-view-item :item="item" @itemClick="handleGridItemClick"></grid-view-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import { useHomeStore, types } from '@/store/home.js'
	import HomeBanner from '@/pages/home/cpns/home-banner.vue'
	import HomeRecommend from '@/pages/home/cpns/home-recommend.vue'
	import HomePopular from '@/pages/home/cpns/home-popular.vue'
	import TabControl from '@/components/tab-control/tab-control.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends, goodsList, currentType } = storeToRefs(homeStore)
	homeStore.fetchHomeMultidata()
	homeStore.fetchHomeData('pop', 1) // 获取流行第一页的商品
	homeStore.fetchHomeData('new', 1) // 获取新款第一页的商品
	homeStore.fetchHomeData('sell', 1) // 获取精选第一页的商品
	onLoad(() => {
		// homeStore.fetchHomeMultidata()
	})
	onReachBottom(() => {
		homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1)
	})
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	function handleRecommendItemClick(item) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	function handleTabItemClick(index) {
		homeStore.setCurrentType(types[index])
	}
	function handleGridItemClick(itemInfo) {
		uni.navigateTo({
			url: '/pages/detail/detail?iid=' + itemInfo.iid
		})
	}
</script>

<style lang="scss">
	:deep(.grid-item > .uni-grid-item--border) {
		border-width: 0 !important;
	}
</style>
