<template>
	<div>
		<div
			v-if="(modal_show || loading_show || toast_show) && is_mobile"
			class="aeorusUI_mask_frame frameConfig fixed"
			:class="!modal_show && !loading_show && toast_show ? 'aeorusUI_transparent_mask' : ''">
			<CustomizeToast />
			<CustomizeModal />
			<CustomizeLoading />
		</div>
		<div
			v-if="modal_show || loading_show || toast_show"
			class="aeorusUI_mask_frame aeorusUI_transparent_mask frameConfig fixed">
			<CustomizeToast />
			<CustomizeModal />
			<CustomizeLoading />
		</div>
	</div>
</template>

<script src="./AeorusUI.js"></script>

<style scoped lang="less" src="./AeorusUI.less"></style>