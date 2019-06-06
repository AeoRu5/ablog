<template>
	<div class="view_app_frame frameConfig relative">
		<Navigator />
		<Home v-if="component_tabBar_actived == 'home'" />
		<Account v-if="component_tabBar_actived == 'account'" />
		<TabBar />
	</div>
</template>

<script src="./App.js"></script>

<style scoped lang="less" src="./App.less"></style>