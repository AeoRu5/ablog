import Constructing from '@/components/Constructing/Constructing.vue'

export default {
	components: {
		Constructing
	},
	data() {
		return {
			component_message_mounted: false
		}
	},
	mounted() {
		this.component_message_mounted = true;
	}
}