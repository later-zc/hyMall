<template>
	<view>
		iid:{{iid}}
	</view>
</template>

<script setup>
	const props = defineProps({
		iid: {
			type: String,
			default: ''
		}
	})
</script>

<style>

</style>
