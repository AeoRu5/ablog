<template>
	<div class="component_tabBar_frame_ignore fixed">
		<div
			v-for="item in tabLists"
			class="component_tabBar_block cp"
			:class="component_tabBar_actived == item.target ? 'themeFontColorMain' : '' "
			@click="component_tabBar_switch(item.target)">
			<div v-if="component_tabBar_actived == item.target" class="iconfont icon-fire-fill"></div>
			<div v-else class="iconfont" :class="item.icon"></div>
			<div>{{item.tabBar}}</div>
		</div>
	</div>
</template>

<script src="./TabBar.js"></script>

<style scoped lang="less" src="./TabBar.less"></style>