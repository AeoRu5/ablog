<template>
	<div v-if="modal_show" class="component_customize_modal_frame fixed horVerMid">
		<div class="component_customize_modal_title ac">{{modal_title}}</div>
		<div class="component_customize_modal_content ac">{{modal_content}}</div>
		<div class="component_customize_modal_btns">
			<div v-if="cancel_show" class="component_customize_modal_btn_cancel component_customize_modal_btn ac" @click="component_customize_modal_cancel">取消</div>
			<div class="component_customize_modal_btn_confirm component_customize_modal_btn ac cp" @click="component_customize_modal_confirm">确认</div>
		</div>
	</div>
</template>

<script src="./CustomizeModal.js"></script>

<style scoped lang="less" src="./CustomizeModal.less"></style>