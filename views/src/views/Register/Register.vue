<template>
	<div class="view_loginRegister_frame relative themePageBackgroundColor">
		<div class="view_loginRegister_form_frame absolute horVerMid">
			<div class="view_loginRegister_form_title englishFont ac">WelCome To AeoRus~</div>
			<div class="view_loginRegister_form_body">
				<div class="view_loginRegister_form_tel view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_tel"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入手机号">
				</div>
				<div class="view_loginRegister_form_securityCode view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_securityCode"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入验证码">
					<div class="view_loginRegister_form_securityCode_btn">获取验证码</div>
				</div>
				<div class="view_loginRegister_form_password view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_password"
						class="view_loginRegister_form_input"
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
				<div v-if="view_register_password_format_error_show" class="view_loginRegister_form_input_tip">
					<div class="iconfont icon-alert"></div>
					<div class="view_loginRegister_form_input_tip_message">{{view_register_password_format_error_message}}</div>
				</div>
				<div class="view_loginRegister_form_confirm themeBackgroundColor themeFontColor cp" @click="_view_register_confirm_register">注册</div>
				<router-link
					:to="{
						name: 'login'
					}"
					class="view_loginRegister_toEachOther_btn block relative ac cp">登录</router-link>
			</div>
		</div>
	</div>
</template>

<script src="./Register.js"></script>

<style scoped lang="less" src="../../assets/loginRegister.less"></style>