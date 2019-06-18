<template>
	<div v-if="is_mobile" class="view_app_frame_ignore frameConfig relative">
		<Navigator :app_tab_lists="app_tab_lists" />
		<Home v-if="tabBar_actived == 'home'" />
		<Message v-if="tabBar_actived == 'message'" />
		<Account v-if="tabBar_actived == 'account'" />
		<TabBar :app_tab_lists="app_tab_lists" />
	</div>
</template>

<script src="./App.js"></script>

<style scoped lang="less" src="./App.less"></style>