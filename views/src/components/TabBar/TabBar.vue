<template>
	<div class="component_tabBar_frame_ignore fixed">
		<div
			class="component_tabBar_block cp"
			:class="component_tabBar_actived == 'home' ? 'themeFontColorMain' : '' "
			@click="component_tabBar_switch('home')">
			<div v-if="component_tabBar_actived == 'home'" class="iconfont icon-fire-fill"></div>
			<div v-else class="iconfont icon-fire"></div>
			<div>首页</div>
		</div>
		<div
			class="component_tabBar_block cp"
			:class="component_tabBar_actived == 'account' ? 'themeFontColorMain' : '' "
			@click="component_tabBar_switch('account')">
			<div v-if="component_tabBar_actived == 'account'" class="iconfont icon-mobile-fill"></div>
			<div v-else class="iconfont icon-mobile"></div>
			<div>我的</div>
		</div>
	</div>
</template>

<script src="./TabBar.js"></script>

<style scoped lang="less" src="./TabBar.less"></style>