<template>
	<div v-if="toast_show">
		<div class="aeorusUI_toast_frame themeFontColorSub fixed horVerMid">
			<div v-if="icon_type" class="iconfont_frame">
				<div v-if="icon_type == 'netError'" class="iconfont icon-wifi"></div>
				<div v-if="icon_type == 'success'" class="iconfont icon-check-circle"></div>
				<div v-if="icon_type == 'warn'" class="iconfont icon-close-circle"></div>
			</div>
			<div class="aeorusUI_toast_content textOverflow ac" :class="icon_type">{{toast_content}}</div>
		</div>
	</div>
</template>

<script src="./CustomizeToast.js"></script>

<style scoped lang="less" src="./CustomizeToast.less"></style>