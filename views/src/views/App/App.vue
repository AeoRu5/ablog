<template>
	<div v-if="is_mobile" class="view_app_frame_ignore frameConfig relative">
		<Navigator :tabLists="tabLists" />
		<Home v-if="component_tabBar_actived == 'home'" />
		<Message v-if="component_tabBar_actived == 'message'" />
		<Account v-if="component_tabBar_actived == 'account'" />
		<TabBar :tabLists="tabLists" />
	</div>
</template>

<script src="./App.js"></script>

<style scoped lang="less" src="./App.less"></style>