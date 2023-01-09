<template>
  <view class="content">
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
		<home-recommend :recommends="recommends" @recommendItemClick="handleRecommendItemClick"></home-recommend>
		<home-popular></home-popular>
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import { useHomeStore } from '@/store/home.js'
	import HomeBanner from '@/pages/home/cpns/home-banner.vue'
	import HomeRecommend from '@/pages/home/cpns/home-recommend.vue'
	import HomePopular from '@/pages/home/cpns/home-popular.vue'
	import TabControl from '@/components/tab-control/tab-control.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	homeStore.fetchHomeMultidata()
	onLoad(() => {
		// homeStore.fetchHomeMultidata()
	})
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	function handleRecommendItemClick(item) {
		console.log('item: ', item);
	}
	function handleTabItemClick(index) {
		
	}
</script>

<style></style>
