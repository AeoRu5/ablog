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
			swiperOption: {
				loop: true,
				autoplay: true,
				pagination: {
					clickable: true,
					el: '.swiper-pagination'
				}
			},
			swiperSlides: [defaultImage]
		}
	}
}