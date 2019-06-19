import UserInfo from './UserInfo/UserInfo.vue'
import Navigator from '@/views/App/Navigator/Navigator.vue'
import ImagePreview from '@/components/CustomizeImagePreview/CustomizeImagePreview.vue'

export default {
	components: {
		UserInfo,
		Navigator,
		ImagePreview
	},
	data() {
		return {
			app_tab_lists: [],
			avater_preview_info: {},
			avater_preview_start: false,
			avater_upload_success: false
		}
	},
	created() {
		let target = this.$route.query.target,
			returnUrl = '',
			returnPage = '',
			navigator = '';

		if (target == 'userInfo') {
			navigator = '我的资料';
			returnPage = 'account';
		}

		this.app_tab_lists.push({
			navigator,
			return: true,
			alwaysShow: true
		});
	},
	methods: {
		_userInfo_avatar_preview_get(data) {
			this.avater_preview_start = data.isSelected;

			if (data.avatarInfo) {
				this.avater_preview_info = data.avatarInfo;
			}

			if (data.isSuccessUpload) {
				this.avater_upload_success = data.isSuccessUpload;
			}
		}
	}
}