<template>
	<div class="component_navigator_frame_ignore fixed">
		<div
			v-if="component_tabBar_actived == item.target"
			v-for="item in tabLists"
			class="component_navigator_title">{{item.navigator}}</div>
	</div>
</template>

<script src="./Navigator.js"></script>

<style scoped lang="less" src="./Navigator.less"></style>