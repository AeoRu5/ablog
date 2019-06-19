<template>
	<div class="component_navigator_frame_ignore fixed">
		<div
			v-if="tabBar_actived == item.target || item.alwaysShow"
			v-for="item in app_tab_lists"
			class="component_navigator_title relative ac">{{item.navigator}}
			<div
				v-if="item.return"
				class="return"
				@click="_navigator_return"></div>
			<div
				v-if="item.functionIcon"
				class="iconfont absolute verMid"
				:class="item.functionIcon"></div>
		</div>
	</div>
</template>

<script src="./Navigator.js"></script>

<style scoped lang="less" src="./Navigator.less"></style>