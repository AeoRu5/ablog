import {
	mapState,
	mapActions
} from 'vuex'
import AniSvg from '@/components/AniSvg/AniSvg.vue'

export default {
	components: {
		AniSvg
	},
	created() {
		// lessLoader.modifyVars({
		// 	'background-color': '#000000'
		// });
	},
	methods: {
		...mapActions([
			'view_enter_clickEnterBtn',
			'view_enter_mouseoverEnterBtn',
			'view_enter_mouseoutEnterBtn'
		])
	},
	computed: {
		...mapState({
			isHover: state => state.dialog_enter.view_enter_isHover,
			isAniSvgAnimationEnd: state => state.dialog_enter.view_enter_isAniSvgAnimationEnd
		})
	}
}