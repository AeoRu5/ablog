import UserInfo from '@/views/Account/UserInfo/UserInfo.vue'
import ImagePreview from '@/components/CustomizeImagePreview/CustomizeImagePreview.vue'
import mixin from './mixin';

export default {
	components: {
		UserInfo,
		ImagePreview
	},
	mixins: [ mixin ],
	data() {
		return {
			app_tab_lists: [],
			avater_preview_info: {},
			avater_preview_start: false,
			avater_upload_success: false
		}
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