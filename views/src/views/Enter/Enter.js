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
			'view_enter_clickEnterBtn'
		])
	},
	computed: {
		...mapState({
			isAniSvgAnimationEnd: state => state.dialog_enter.view_enter_isAniSvgAnimationEnd
		})
	}
}