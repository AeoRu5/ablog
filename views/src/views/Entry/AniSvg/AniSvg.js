import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			aniSvg_text_loaded: false
		}
	},
	mounted() {
		this.component_aniSvg_loadAniSvgText(() => {
			this.aniSvg_text_loaded = true;
			this.$checkAnimationEnd(this.$refs.aniSvg_ref, 'animationend', this.component_aniSvg_animationend);
			this.$checkAnimationEnd(this.$refs.aniSvg_ref, 'webkitAnimationEnd', this.component_aniSvg_animationend);
		});
	},
	methods: {
		...mapActions([
			'component_aniSvg_loadAniSvgText',
			'component_aniSvg_animationend'
		])
	},
	computed: {
		...mapState({
			aniSvg_text: state => state.entry.component_aniSvg_text
		})
	}
}