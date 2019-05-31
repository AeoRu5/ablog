<template>
	<div class="view_entry_frame relative themePageBackgroundColor">
		<AniSvg/>
		<div class="view_entry_btn_frame flex">
			<router-link
				:to="{
					name: 'login'
				}"
				class="view_entry_btn englishFont themeFontColor cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : 'hide'"
				@click="view_entry_clickEnterBtn">Enter</router-link>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>