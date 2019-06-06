<template>
	<div class="view_entry_frame frameConfig relative">
		<AniSvg/>
		<div class="view_entry_btn_frame flex">
			<router-link
				:to="{
					name: 'home'
				}"
				class="view_entry_btn themeBorder themeBoxShadowEntry englishFont themeFontColorSub cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : 'hide'"
				@click="view_entry_clickEnterBtn">Enter</router-link>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>