<template>
	<div v-if="view_home_mounted" class="component_home_frame frameConfig">
		<Carousel />
		<Scroll />
		<Constructing />
	</div>
</template>

<script src="./Home.js"></script>

<style scoped lang="less" src="./Home.less"></style>