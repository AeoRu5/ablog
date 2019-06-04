<template>
	<div class="view_loginRegister_frame relative">
		<div class="view_loginRegister_form_frame absolute horVerMid">
			<div class="view_loginRegister_form_title themeFontColorMain englishFont ac">WelCome To AeoRus~</div>
			<div class="view_loginRegister_form_body">
				<div class="view_loginRegister_form_tel view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_tel"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入手机号">
				</div>
				<div class="view_loginRegister_form_tel view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_nickname"
						class="view_loginRegister_form_input"
						type="text"
						placeholder="请输入昵称">
				</div>
				<div class="view_loginRegister_form_securityCode view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_securityCode"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入验证码">
					<div
						class="view_loginRegister_form_securityCode_btn themeFontColorMain cp"
						:class="view_register_securityCode_isGetting ? 'view_loginRegister_form_securityCode_btn_isGetting' : ''"
						@click="_view_register_securityCode_get">{{view_register_securityCodeTxt}}</div>
				</div>
				<div class="view_loginRegister_form_password view_loginRegister_form_input_block relative">
					<input
						v-model="view_register_password"
						class="view_loginRegister_form_input"
						:type="view_register_password_type"
						placeholder="设置密码(6-20位字母数字组合)">
					<div
						v-if="!view_register_toggle_password_show"
						class="iconfont icon-eye themeFontColorMain cp"
						@click="_view_register_toggle_password_show"></div>
					<div
						v-else
						class="iconfont icon-eye-close themeFontColorMain cp"
						@click="_view_register_toggle_password_show"></div>
				</div>
				<div v-if="view_register_password_format_error_show" class="view_loginRegister_form_input_tip">
					<div class="iconfont icon-alert"></div>
					<div class="view_loginRegister_form_input_tip_message">{{view_register_password_format_error_message}}</div>
				</div>
				<div class="view_loginRegister_form_confirm themeBackgroundColorMain themeFontColorSub cp" @click="_view_register_confirm_register">注册</div>
				<router-link
					:to="{
						name: 'login',
						query: {
							redirect: $route.query.redirect
						}
					}"
					class="view_loginRegister_toEachOther_btn themeFontColorMain themeFontColorMain themeAfterBackgroundColor block relative ac cp">登录账号</router-link>
			</div>
		</div>
	</div>
</template>

<script src="./Register.js"></script>

<style scoped lang="less" src="../../assets/loginRegister.less"></style>