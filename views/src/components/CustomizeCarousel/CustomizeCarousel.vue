<template>
	<div>
		<swiper :options="swiperOption" class="aeorusUI_carousel_frame">
			<swiper-slide v-for="slide in swiperSlides">
				<img
					:src="slide"
					class="aeorusUI_carousel_image" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script src="./CustomizeCarousel.js"></script>

<style scoped lang="less" src="./CustomizeCarousel.less"></style>