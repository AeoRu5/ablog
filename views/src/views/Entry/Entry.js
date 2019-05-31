import {
	mapState,
	mapActions
} from 'vuex'
import AniSvg from '@/components/AniSvg/AniSvg.vue'

export default {
	components: {
		AniSvg
	},
	methods: {
		...mapActions([
			'view_entry_clickEnterBtn'
		])
	},
	computed: {
		...mapState({
			isAniSvgAnimationEnd: state => state.entry.view_entry_isAniSvgAnimationEnd
		})
	}
}