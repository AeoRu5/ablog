import {
	mapActions
} from 'vuex'

export default {
	data() {
		userInfo: {}
	},
	created() {
		app.getUserInfo(userInfo => {
			this.userInfo = userInfo;
			this.saveUserInfo(userInfo);
		});
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		])
	}
}