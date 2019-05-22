import {
	mapState,
	mapActions
} from 'vuex'

export default {
	mounted() {
		this.component_aniSvg_loadAniSvgTxt();
		this.animationend('animationend');
		this.animationend('webkitAnimationEnd');
	},
	methods: {
		animationend(event) {
			this.$refs.component_aniSvg_svg.addEventListener(event, this.component_aniSvg_animationend);
		},
		...mapActions([
			'component_aniSvg_loadAniSvgTxt',
			'component_aniSvg_animationend'
		])
	},
	computed: {
		...mapState({
			aniSvgTxt: state => state.dialog_enter.component_aniSvg_aniSvgTxt
		})
	}
}