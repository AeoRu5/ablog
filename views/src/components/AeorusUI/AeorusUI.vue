<template>
	<div
		v-if="(modal_show || loading_show || toast_show) && is_mobile"
		class="aeorusUI_mask_frame frameConfig fixed"
		:class="!modal_show && !loading_show && toast_show ? 'aeorusUI_only_toast_exist_mask' : ''">
		<CustomizeToast />
		<CustomizeModal />
		<CustomizeLoading />
	</div>
</template>

<script src="./AeorusUI.js"></script>

<style scoped lang="less" src="./AeorusUI.less"></style>