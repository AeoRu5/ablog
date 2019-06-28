import Scroll from '@/components/CustomizeScroll/CustomizeScroll.vue'
import Carousel from '@/components/CustomizeCarousel/CustomizeCarousel.vue'
import CustomizeVideo from '@/components/CustomizeVideo/CustomizeVideo.vue'
import carousel_one from '@/assets/img/carousel_one.png'
import carousel_two from '@/assets/img/carousel_two.png'
import carousel_three from '@/assets/img/carousel_three.png'
import carousel_four from '@/assets/img/carousel_four.png'

export default {
	components: {
		Scroll,
		Carousel,
		CustomizeVideo
	},
	data() {
		return {
			carousel_swiperSlides: [carousel_one, carousel_two, carousel_three, carousel_four]
		}
	}
}