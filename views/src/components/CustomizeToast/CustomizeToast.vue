<template>
	<div v-if="toast_show">
		<div v-if="toast_mask_show" class="aeorusUI_toast_mask frameConfig fixed"></div>
		<div class="aeorusUI_toast_frame themeFontColorSub fixed horVerMid">
			<div class="aeorusUI_toast_content ac">{{toast_content}}</div>
		</div>
	</div>
</template>

<script src="./CustomizeToast.js"></script>

<style scoped lang="less" src="./CustomizeToast.less"></style>