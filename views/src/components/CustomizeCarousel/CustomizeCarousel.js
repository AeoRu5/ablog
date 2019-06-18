import {
	swiper,
	swiperSlide
} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import defaultImage from '@/assets/img/usagi.jpg'

export default {
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			carousel_option: {
				loop: true,
				autoplay: true,
				pagination: {
					clickable: true,
					el: '.swiper-pagination'
				}
			},
			carousel_visible: false,
			carousel_swiperSlidesLength: 0,
			carousel_swiperSlides: [defaultImage, defaultImage]
		}
	},
	methods: {
		_carousel_rendered() {
			this.carousel_swiperSlidesLength++;

			if (this.carousel_swiperSlidesLength == this.carousel_swiperSlides.length) {
				this.carousel_visible = true;
			}
		}
	}
}