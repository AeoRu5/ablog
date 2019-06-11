<template>
	<div class="component_navigator_frame_ignore fixed">
		<div v-if="component_tabBar_actived == 'home'" class="component_navigator_title">兔走丶</div>
		<div v-if="component_tabBar_actived == 'account'" class="component_navigator_title">我的</div>
	</div>
</template>

<script src="./Navigator.js"></script>

<style scoped lang="less" src="./Navigator.less"></style>