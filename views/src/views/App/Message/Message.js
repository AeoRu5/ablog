import Constructing from '@/components/Constructing/Constructing.vue'

export default {
	components: {
		Constructing
	},
	data() {
		return {
			view_message_mounted: false
		}
	},
	mounted() {
		this.view_message_mounted = true;
	},
}