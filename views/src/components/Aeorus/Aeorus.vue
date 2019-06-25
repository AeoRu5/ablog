<template>
	<div>
		<div
			v-if="(form_show || toast_show || modal_show || loading_show) && is_mobile"
			class="aeorusUI_mask_frame frameConfig fixed"
			:class="!modal_show && !loading_show && toast_show ? 'aeorusUI_transparent_mask' : ''">
			<CustomizeForm />
			<CustomizeToast />
			<CustomizeModal />
			<CustomizeLoading />
		</div>
		<div
			v-if="modal_show || loading_show || toast_show || form_show"
			class="aeorusUI_mask_frame aeorusUI_transparent_mask frameConfig fixed">
			<CustomizeForm />
			<CustomizeToast />
			<CustomizeModal />
			<CustomizeLoading />
		</div>
	</div>
</template>

<script src="./Aeorus.js"></script>

<style scoped lang="less" src="./Aeorus.less"></style>