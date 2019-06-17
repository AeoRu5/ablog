export default {
	props: [ 'reloadMethod' ],
	data() {
		return {
			component_netError_tip: '数据都丢了...'
		}
	},
	methods: {
		_component_netError_reload() {
			let reloadMethod = this.reloadMethod;
			
			this.$parent[reloadMethod]();
		}
	}
}