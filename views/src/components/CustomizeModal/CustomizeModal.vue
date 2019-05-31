<template>
	<div v-if="modal_show" class="aeorusUI_modal_frame fixed horVerMid">
		<div class="aeorusUI_modal_title ac">{{modal_title}}</div>
		<div class="aeorusUI_modal_content ac">{{modal_content}}</div>
		<div class="aeorusUI_modal_btns">
			<div
				v-if="cancel_show"
				class="aeorusUI_modal_btn_cancel aeorusUI_modal_btn ac"
				@click="aeorusUI_modal_cancel">取消</div>
			<div
				class="aeorusUI_modal_btn_confirm aeorusUI_modal_btn ac cp"
				:class="cancel_show ? '' : 'aeorusUI_modal_btn_confirm_only'"
				@click="aeorusUI_modal_confirm">确认</div>
		</div>
	</div>
</template>

<script src="./CustomizeModal.js"></script>

<style scoped lang="less" src="./CustomizeModal.less"></style>