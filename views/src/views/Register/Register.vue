<template>
	<div class="view_register_frame relative themeBackgroundColor">
		<div class="view_register_form_frame absolute horVerMid">
			<div class="view_register_form_title englishFont ac">WelCome To AeoRus~</div>
			<div class="view_register_form_body">
				<div class="view_register_form_tel view_register_form_input_block relative">
					<input
						v-model="view_register_tel"
						class="view_register_form_input"
						type="number"
						placeholder="请输入手机号">
				</div>
				<div class="view_register_form_securityCode view_register_form_input_block relative">
					<input
						v-model="view_register_securityCode"
						class="view_register_form_input"
						type="number"
						placeholder="请输入验证码">
					<div class="view_register_form_securityCode_btn">获取验证码</div>
				</div>
				<div class="view_register_form_password view_register_form_input_block relative">
					<input
						v-model="view_register_password"
						class="view_register_form_input"
						:type="view_register_password_type"
						placeholder="设置密码(6-20位字母数字组合)">
					<div
						v-if="!view_register_toggle_password_show"
						class="iconfont icon-eye cp"
						@click="_view_register_toggle_password_show"></div>
					<div
						v-else
						class="iconfont icon-eye-close cp"
						@click="_view_register_toggle_password_show"></div>
				</div>
				<div v-if="view_register_password_format_error_show" class="view_register_form_input_tip">
					<div class="iconfont icon-alert"></div>
					<div class="view_register_form_input_tip_message">{{view_register_password_format_error_message}}</div>
				</div>
				<div class="view_register_form_confirm themeBackgroundColor themeFontColor cp" @click="_view_register_confirm_register">注册</div>
			</div>
		</div>
		<CustomizeMask />
		<CustomizeToast />
	</div>
</template>

<script src="./Register.js"></script>

<style scoped lang="less" src="./Register.less"></style>