export default {
	props: [ 'reloadMethod' ],
	data() {
		return {
			netError_tip: '数据都丢了...'
		}
	},
	methods: {
		_netError_reload() {
			let reloadMethod = this.reloadMethod;
			
			this.$parent[reloadMethod]();
		}
	}
}