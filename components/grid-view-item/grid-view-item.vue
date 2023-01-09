<template>
	<view class="goods-item" @click="handleItemClick">
		
		<!-- #ifndef H5 -->
		<image class="image" :lazy-load="true" :src="item.show.img" mode="widthFix"></image>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		<img class="image" v-lazy="item.show.img">
		<!-- #endif -->
		
		<view class="desc-info">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<text class="price">¥{{item.price}}</text>
				<image class="icon" src="@/static/images/common/favor.png" mode=""></image>
				<text class="cfav">{{item.cfav}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		item: {
			type: Object,
			default: () => {}
		}
	})
	
	const emit = defineEmits(['itemClick'])
	function handleItemClick() {
		emit('itemClick', props.item)
	}
	
</script>

<style lang="scss">
	.goods-item{
		box-sizing: border-box;
		padding: 10rpx;
		color: #333;
		.image{
			width: 100%;
			border-radius: 10rpx;
		}
		
		.desc-info{
			margin-top: 6rpx;
			.title{
				// 一行显示
				@include textEllipsis;
				
				font-size: $gFontSize;
			}
			.info{
				font-size: 26rpx;
				text-align: center;
				
				.price{
					color: $gPrimaryColor;
				}
				.icon{
					width: 30rpx;
					height: 30rpx;
					padding-left: 6rpx;
					padding-right: 10rpx;
					position: relative;
					top: 6rpx;
					
				}
				.cfav{
					position: relative;
					top: 2rpx;
				}
			}
		}
	}
</style>