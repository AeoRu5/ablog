<template>
	<div class="component_navigator_frame_ignore fixed">
		<div
			v-if="component_tabBar_actived == item.target || item.alwaysShow"
			v-for="item in tabLists"
			class="component_navigator_title relative ac">{{item.navigator}}
			<div
				v-if="item.functionIcon"
				class="iconfont absolute verMid"
				:class="item.functionIcon"></div>
		</div>
	</div>
</template>

<script src="./Navigator.js"></script>

<style scoped lang="less" src="./Navigator.less"></style>