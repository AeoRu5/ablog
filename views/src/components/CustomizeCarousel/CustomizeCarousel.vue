<template>
	<div>
		<swiper v-show="carousel_visible" :options="carousel_option" class="aeorusUI_carousel_frame">
			<swiper-slide v-for="slide in carousel_swiperSlides">
				<img
					:src="slide"
					class="aeorusUI_carousel_image"
					@load="_carousel_rendered" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script src="./CustomizeCarousel.js"></script>

<style scoped lang="less" src="./CustomizeCarousel.less"></style>