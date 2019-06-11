import {
	mapState
} from 'vuex'
import MD5 from 'md5.js';

export default {
	data() {
		return {
			view_login_mounted: false,
			view_login_tel: '',
			view_login_password: '',
			view_login_toggle_password_show: false,
			view_login_password_type: 'password'
		}
	},
	mounted() {
		this.view_login_mounted = true;
	},
	methods: {
		_view_login_toggle_password_show() {
			this.view_login_toggle_password_show = !this.view_login_toggle_password_show;
			this.view_login_password_type = this.view_login_password_type == 'password' ? 'text' : 'password';
		},
		_view_login_confirm_login() {
			if (!/\d{11}/.test(this.view_login_tel)) {
				this.aeorusUI.showToast('手机号有点东西啊~');

				return;
			}

			if (this.view_login_password.length == 0) {
				this.aeorusUI.showToast('真就不写密码哦~');

				return;
			}

			this.aeorusUI.showLoading('登录中~');

			this.utils.requestPost('/aeoru5/signIn', {
				data: {
					tel: Number(this.view_login_tel),
					password: new MD5().update(this.view_login_tel + this.view_login_password).digest('hex')
				}
			},
			res => {
				this.aeorusUI.hideLoading();

				if (res.success) {
					this.aeorusUI.showToast({
						icon: 'safe',
						content: res.message,
						duration: 3000
					}, () => {
						this.$router.push({
							path: decodeURIComponent(this.$route.query.redirect || '/')
						});
					});
				} else {
					this.aeorusUI.showToast({
						content: res.message,
						duration: 2000
					});
				}
			},
			err => {
				this.aeorusUI.showToast({
					icon: 'netError',
					content: '你的网络大概炸了?',
					duration: 2000
				});
			});
		}
	},
	computed: {
		...mapState({
			is_mobile: state => state.is_mobile
		})
	}
}