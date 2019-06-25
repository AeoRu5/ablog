<template>
	<div class="component_userInfo_frame_ignore">
		<div class="component_userInfo_block component_userInfo_avatar">
			<div class="component_userInfo_left">头像</div>
			<div class="component_userInfo_right relative">
				<input
					type="file"
					enctype="multipart/form-data"
					accept="image/gif,image/png,image/jpeg,image/jpg,image/bmp"
					class="component_userInfo_avatar_upload absolute"
					@change="_userInfo_avatar_upload($event)" />
				<div class="component_userInfo_right_hasArrows">
					<img
						v-show="userInfo_avaterVisible"
						:src="'/avatar/' + userInfo.avatar || userInfo_defaultAvatar"
						:onerror="userInfo_defaultAvatar"
						class="component_userInfo_avatar_img"
						@load="_userInfo_avatar_rendered" />
				</div>
				<div class="arrows"></div>
			</div>
		</div>
		<div class="component_userInfo_block">
			<div class="component_userInfo_left">昵称</div>
			<div class="component_userInfo_right relative" @click="_userInfo_nickname_update">
				<div class="component_userInfo_right_hasArrows">{{userInfo.nickname}}</div>
				<div class="arrows"></div>
			</div>
		</div>
		<div class="component_userInfo_block">
			<div class="component_userInfo_left">联系方式</div>
			<div class="component_userInfo_right">{{userInfo.tel}}</div>
		</div>
		<div class="component_userInfo_block">
			<div class="component_userInfo_left">创建日期</div>
			<div class="component_userInfo_right">{{userInfo.createDate}}</div>
		</div>
	</div>
</template>

<script src="./UserInfo.js"></script>

<style scoped lang="less" src="./UserInfo.less"></style>