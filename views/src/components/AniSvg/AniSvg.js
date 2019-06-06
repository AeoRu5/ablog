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
			this._animationend('animationend');
			this._animationend('webkitAnimationEnd');
		});
	},
	methods: {
		_animationend(event) {
			this.$refs.component_aniSvg_svg.addEventListener(event, this.component_aniSvg_animationend);
		},
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