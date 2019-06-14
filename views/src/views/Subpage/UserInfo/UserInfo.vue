<template>
	<div class="component_userInfo_frame_ignore absolute">
		<div class="component_userInfo_block component_userInfo_avater">
			<div class="component_userInfo_left">头像</div>
			<div class="component_userInfo_right relative">
				<div class="component_userInfo_right_hasArrows">
					<img
						:src="userInfo.avater"
						class="component_userInfo_avater_img block">
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