import Scroll from '@/components/CustomizeScroll/CustomizeScroll.vue'
import Carousel from '@/components/CustomizeCarousel/CustomizeCarousel.vue'
import Constructing from '@/components/Constructing/Constructing.vue'

export default {
	components: {
		Scroll,
		Carousel,
		Constructing
	},
	data() {
		return {
			component_home_mounted: false
		}
	},
	mounted() {
		this.component_home_mounted = true;
	}
}