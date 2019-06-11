import {
	mapState
} from 'vuex'
import AniSvg from '@/components/AniSvg/AniSvg.vue'

export default {
	components: {
		AniSvg
	},
	computed: {
		...mapState({
			isAniSvgAnimationEnd: state => state.entry.view_entry_isAniSvgAnimationEnd
		})
	}
}