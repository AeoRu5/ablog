<template>
	<div class="view_app_frame_ignore frameConfig relative">
		<Navigator :app_tab_lists="app_tab_lists" />
		<UserInfo
			v-if="$route.query.target == 'userInfo' && !avater_preview_start"
			:avater_upload_success="avater_upload_success"
			@_userInfo_avatar_preview="_userInfo_avatar_preview_get" />
		<ImagePreview
			v-else
			:avater_preview_info="avater_preview_info"
			@_userInfo_avatar_preview="_userInfo_avatar_preview_get" />
	</div>
</template>

<script src="./Subpage.js"></script>

<style scoped lang="less" src="./Subpage.less"></style>