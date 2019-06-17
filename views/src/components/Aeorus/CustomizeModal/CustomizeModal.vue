<template>
	<div
		v-if="modal_show"
		class="aeorusUI_modal_frame fixed"
		:class="modal_isShowIn ? 'aeorusUI_modal_frame_animation_showIn' : 'aeorusUI_modal_frame_animation_showOut'">
		<div class="aeorusUI_modal_title themeFontColorMain relative ac">{{modal_title}}</div>
		<div class="aeorusUI_modal_content ac">{{modal_content}}</div>
		<div class="aeorusUI_modal_btns">
			<div
				v-if="cancel_show"
				class="aeorusUI_modal_btn_cancel aeorusUI_modal_btn themeFontColorMain ac"
				@click="aeorusUI_modal_cancel">取消</div>
			<div
				class="aeorusUI_modal_btn_confirm aeorusUI_modal_btn themeBackgroundColorMain ac"
				:class="cancel_show ? '' : 'aeorusUI_modal_btn_confirm_only'"
				@click="aeorusUI_modal_confirm">确认</div>
		</div>
	</div>
</template>

<script src="./CustomizeModal.js"></script>

<style scoped lang="less" src="./CustomizeModal.less"></style>