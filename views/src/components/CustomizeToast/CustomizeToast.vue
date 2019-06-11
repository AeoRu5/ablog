<template>
	<div v-if="toast_show">
		<div class="aeorusUI_toast_frame themeFontColorSub fixed horVerMid">
			<div class="aeorusUI_toast_content ac">{{toast_content}}</div>
		</div>
	</div>
</template>

<script src="./CustomizeToast.js"></script>

<style scoped lang="less" src="./CustomizeToast.less"></style>