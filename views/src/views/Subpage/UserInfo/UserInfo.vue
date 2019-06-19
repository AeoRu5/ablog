<template>
	<div class="component_userInfo_frame_ignore">
		<div class="component_userInfo_block component_userInfo_avatar">
			<div class="component_userInfo_left">头像</div>
			<div class="component_userInfo_right relative">
				<div class="component_userInfo_right_hasArrows">
					<input
						type="file"
						accept="image"
						enctype="multipart/form-data"
						class="component_userInfo_avatar_upload absolute"
						@change="_userInfo_avatar_upload($event)" />
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
			<div class="component_userInfo_right relative">
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