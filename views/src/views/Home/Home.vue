<template>
	<div class="component_home_frame frameConfig">
		<Carousel
			class="component_home_widget"
			:carousel_swiperSlides="carousel_swiperSlides" />
		<CustomizeVideo
			class="component_home_widget"
			:video_src="'/video/video_190628.mp4'" />
		<Scroll />
		<Constructing />
	</div>
</template>

<script src="./Home.js"></script>

<style scoped lang="less" src="./Home.less"></style>