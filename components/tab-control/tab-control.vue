<template>
	<view class="tab-control">
		<template v-for="(title, index) in titles" :key="index">
			<view :class="['item', curIndex == index ? 'active' : '']" @click="handleItemClick(index)">
				<view class="title">{{ title }}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
import { ref } from "vue";

	defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})
	
	const curIndex = ref(0)
	const emit = defineEmits(['@tabItemClick'])
	const handleItemClick = (index) => {
		curIndex.value = index
		emit('@tabItemClick', index)
	}
</script>

<style lang="scss">
	.tab-control {
		@include normalFlex();
		padding: 10rpx;
		margin-top: 10rpx;
		text-align: center;
		
		.item {
			flex: 1;
			
			.title {
				display: inline-block;
				padding: 16rpx;
				border-bottom: 6rpx solid #fff;
			}
			
			&.active {
				.title {
					color: $gPrimaryColor;
					border-bottom: 6rpx solid $gPrimaryColor;
				}
			}
		}
	}
</style>