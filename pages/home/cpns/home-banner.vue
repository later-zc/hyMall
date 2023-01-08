<template>
	<swiper class="banner" :indicator-dots="true" indicator-active-color="#ff8198" :autoplay="true" :interval="3000" :duration="1000">
		<template v-for="item in banners" :key="item">
			<swiper-item @click="handleItemClick(item)">
				<image class="img" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
import { onUpdated } from "vue";
	
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	
	const emit = defineEmits(['bannerItemClick'])
	
	function handleItemClick(item) {
		emit('bannerItemClick', item.link)
	}
	
	// console.log('props.banners: ', props.banners);
	onUpdated(() => {
		// console.log('props.banners: ', props.banners);
	})
</script>

<style lang="scss">
	.banner{
		.img{
			width: 100%;
		}
	}
</style>