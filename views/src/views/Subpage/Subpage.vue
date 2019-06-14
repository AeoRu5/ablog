<template>
	<div class="view_app_frame_ignore frameConfig relative">
		<Navigator :tabLists="tabLists" />
		<UserInfo v-if="$route.query.target == 'userInfo'" :userInfo="userInfo" />
	</div>
</template>

<script src="./Subpage.js"></script>

<style scoped lang="less" src="./Subpage.less"></style>