<template>
	<div class="view_loginRegister_frame relative themePageBackgroundColor">
		<div class="view_loginRegister_form_frame absolute horVerMid">
			<div class="view_loginRegister_form_title englishFont ac">WelCome To AeoRus~</div>
			<div class="view_loginRegister_form_body">
				<div class="view_loginRegister_form_tel view_loginRegister_form_input_block relative">
					<input
						v-model="view_login_tel"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入手机号">
				</div>
				</div>
				<div class="view_loginRegister_form_password view_loginRegister_form_input_block relative">
					<input
						v-model="view_login_password"
						class="view_loginRegister_form_input"
						:type="view_login_password_type"
						placeholder="请输入密码">
					<div
						v-if="!view_login_toggle_password_show"
						class="iconfont icon-eye cp"
						@click="_view_login_toggle_password_show"></div>
					<div
						v-else
						class="iconfont icon-eye-close cp"
						@click="_view_login_toggle_password_show"></div>
				</div>
				<div class="view_loginRegister_form_confirm themeBackgroundColor themeFontColor cp" @click="_view_login_confirm_login">登录</div>
				<router-link
					:to="{
						name: 'register'
					}"
					class="view_loginRegister_toEachOther_btn block relative ac cp">注册账号</router-link>
			</div>
		</div>
	</div>
</template>

<script src="./Login.js"></script>

<style scoped lang="less" src="../../assets/loginRegister.less"></style>