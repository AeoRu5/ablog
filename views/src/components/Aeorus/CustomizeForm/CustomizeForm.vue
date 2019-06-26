<template>
	<div
		v-if="form_show"
		class="aeorusUI_form_frame fixed"
		:class="form_isShowIn ? 'aeorusUI_form_frame_animation_showIn' : 'aeorusUI_form_frame_animation_showOut'">
		<input
			v-for="item in dynamic_form_items"
			v-if="form_input == 'text'"
			type="text"
			:placeholder="item.placeholder"
			v-model="item.value"
			class="aeorusUI_form_input themeFontColorMain ac" />
		<div class="aeorusUI_form_btns">
			<div
				class="aeorusUI_form_btn_cancel aeorusUI_form_btn themeFontColorMain ac"
				@click="aeorusUI_form_cancel">取消</div>
			<div
				class="aeorusUI_form_btn_confirm aeorusUI_form_btn themeBackgroundColorMain ac"
				@click="aeorusUI_form_confirm(dynamic_form_items)">确认</div>
		</div>
	</div>
</template>

<script src="./CustomizeForm.js"></script>

<style scoped lang="less" src="./CustomizeForm.less"></style>