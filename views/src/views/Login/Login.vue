<template>
	<div class="view_loginRegister_frame_app_ignore frameConfig">
		<div class="view_loginRegister_form_frame">
			<div class="view_loginRegister_form_title themeFontColorMain englishFont ac">WelCome To AeoRus~</div>
			<div class="view_loginRegister_form_body">
				<div class="view_loginRegister_form_tel view_loginRegister_form_input_block relative">
					<input
						v-model="login_tel"
						class="view_loginRegister_form_input"
						type="number"
						placeholder="请输入手机号">
				</div>
				</div>
				<div class="view_loginRegister_form_password view_loginRegister_form_input_block relative">
					<input
						v-model="login_password"
						class="view_loginRegister_form_input"
						:type="login_password_type"
						placeholder="请输入密码">
					<div
						v-if="!login_toggle_password_show"
						class="iconfont icon-eye themeFontColorMain cp"
						@click="_login_toggle_password_show"></div>
					<div
						v-else
						class="iconfont icon-eye-close themeFontColorMain cp"
						@click="_login_toggle_password_show"></div>
				</div>
				<div class="view_loginRegister_form_confirm themeBackgroundColorMain themeFontColorSub cp" @click="_login_confirm_login">登录</div>
				<router-link
					:to="{
						name: 'register',
						query: {
							redirect: $route.query.redirect
						}
					}"
					class="view_loginRegister_toEachOther_btn themeAfterBackgroundColor themeFontColorMain block relative ac cp">注册账号</router-link>
			</div>
		</div>
	</div>
</template>

<script src="./Login.js"></script>

<style scoped lang="less" src="../../assets/loginRegister.less"></style>