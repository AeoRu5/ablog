import {
	mapState,
	mapActions
} from 'vuex'
import TabBar from '@/components/TabBar/TabBar.vue'
import Navigator from '@/components/Navigator/Navigator.vue'

export default {
	components: {
		TabBar,
		Navigator
	},
	mounted() {
		this.checkClient();
		sessionStorage.getItem('TABBAR') && this.component_tabBar_switch(sessionStorage.getItem('TABBAR'));
	},
	methods: {
		...mapActions([
			'checkClient',
			'setCurrentUrl',
			'setNavigatorReturn',
			'component_tabBar_switch',
			'resetNavigatorReturn'
		])
	},
	computed: {
		...mapState({
			isReturn: state => state.isReturn,
			returnUrl: state => state.returnUrl,
			currentUrl: state => state.currentUrl
		})
	},
	watch: {
		$route(newVal, oldVal) {
			history.pushState(null, null, document.URL);
			window.addEventListener('popstate', function() {
				history.pushState(null, null, document.URL);
			});

			if (JSON.parse(sessionStorage.getItem('RETURNURL')) && JSON.parse(sessionStorage.getItem('RETURNURL')).returnUrlArrayList.length > this.returnUrl.length) {
				this.resetNavigatorReturn(JSON.parse(sessionStorage.getItem('RETURNURL')).returnUrlArrayList);
			} else {
				if (!this.isReturn && !/^entry$|^login$|^register$/.test(oldVal.name) && !/^entry$|^login$|^register$/.test(newVal.name)) {
					this.setNavigatorReturn({
						name: oldVal.name,
						isReturn: false
					});
				}
			}

			this.setCurrentUrl(newVal.name);
		}
	}
}