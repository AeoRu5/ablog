<template>
	<div
		v-if="is_mobile"
		ref="view_app_frame"
		class="view_app_frame_ignore frameConfig relative">
		<div v-for="item in AppConfig">
			<component v-if="tabBar_actived == item.target" :is="item.component"></component>
		</div>
	</div>
</template>

<script src="./App.js"></script>

<style scoped lang="less" src="./App.less"></style>