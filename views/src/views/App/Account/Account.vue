<template>
	<div class="component_account_frame_ignore frameConfig">
		<div class="component_account_userInfo themeFontColorSub">
			<div class="component_account_nickname">{{userInfo.nickname}}</div>
			<img
			:src="avater"
			class="component_account_avater" />
		</div>
		<div class="component_account_functions_frame themeFontColorMain">
			<router-link
				:to="{
					name: 'subpage',
					query: {
						target: 'userInfo'
					}
				}" 
				class="component_account_function_block themeFontColorMain relative arrows">
				<div class="iconfont icon-fire"></div>
				<div class="component_account_function_name">我的资料</div>
			</router-link>
		</div>
	</div>
</template>

<script src="./Account.js"></script>

<style scoped lang="less" src="./Account.less"></style>