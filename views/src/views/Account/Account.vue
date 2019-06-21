<template>
	<div>
		<Skeleton v-if="loadStatus == 0" />
		<div v-else-if="loadStatus == 1" class="component_account_frame_ignore frameConfig">
			<div v-show="account_backgroundVisible && account_avaterVisible" class="component_account_userInfo_frame relative">
				<img
					:src="account_defaultBackground"
					class="component_account_userInfo_background absolute"
					@load="_account_background_rendered" />
				<div class="component_account_userInfo themeFontColorSub absolute">
					<div class="component_account_nickname">{{userInfo.nickname}}</div>
					<img
						:src="'/avatar/' + userInfo.avatar || account_defaultAvatar"
						:onerror="account_defaultAvatar"
						class="component_account_avatar"
						@load="_account_avatar_rendered" />
				</div>
			</div>
			<div class="component_account_functions_frame themeFontColorMain">
				<router-link
					:to="{
						name: 'userInfo'
					}"
					class="component_account_function_block themeFontColorMain relative arrows">
					<div class="iconfont icon-settings"></div>
					<div class="component_account_function_name">我的资料</div>
				</router-link>
			</div>
		</div>
		<NetError v-else-if="loadStatus == 2" :reloadMethod="reloadMethod" />
	</div>
</template>

<script src="./Account.js"></script>

<style scoped lang="less" src="./Account.less"></style>