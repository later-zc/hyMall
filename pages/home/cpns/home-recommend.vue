<template>
	<view class="recommend">
		<template v-for="item in recommends" :key="item">
			<view class="recommend-item" @click="handleItemClick(item)">
				<image class="img" :src="item.image" mode="widthFix"></image>
				<view class="title">{{ item.title }}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	
	const emit = defineEmits(['@recommendItemClick'])
	function handleItemClick(item) {
		emit('@recommendItemClick', item)
	}
</script>

<style lang="scss">
	.recommend {
		@include normalFlex();
		padding: 20rpx;

		.recommend-item {
			@include normalFlex(column);
			align-items: center;
			font-size: $gFontSize;
			
			.img {
				width: 150rpx;
				height: 150rpx;
				margin-bottom: 10rpx;
			}
		}
	}
</style>