import {
	mapState,
	mapActions
} from 'vuex'
import AniSvg from '@/views/Entry/AniSvg/AniSvg.vue'

export default {
	components: {
		AniSvg
	},
	methods: {
		...mapActions([
			'view_entry_btn'
		])
	},
	computed: {
		...mapState({
			isAniSvgAnimationEnd: state => state.entry.view_entry_isAniSvgAnimationEnd
		})
	}
}