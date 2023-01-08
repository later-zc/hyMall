<template>
	<web-view allow :src="link"></web-view>
</template>

<script setup>
	defineProps({
		link: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">

</style>
