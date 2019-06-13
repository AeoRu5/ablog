import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			component_aniSvg_text_loaded: false
		}
	},
	mounted() {
		this.component_aniSvg_loadAniSvgTxt(() => {
			this.component_aniSvg_text_loaded = true;
			app.checkAnimationEnd(this.$refs.component_aniSvg_ref, 'animationend', this.component_aniSvg_animationend);
			app.checkAnimationEnd(this.$refs.component_aniSvg_ref, 'webkitAnimationEnd', this.component_aniSvg_animationend);
		});
	},
	methods: {
		...mapActions([
			'component_aniSvg_loadAniSvgTxt',
			'component_aniSvg_animationend'
		])
	},
	computed: {
		...mapState({
			aniSvgTxt: state => state.entry.component_aniSvg_aniSvgTxt
		})
	}
}