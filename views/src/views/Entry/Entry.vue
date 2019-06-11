<template>
	<div class="view_entry_frame frameConfig relative">
		<AniSvg/>
		<div class="view_entry_btn_frame flex">
			<router-link
				:to= "{
					name: 'app'
				}"
				class="view_entry_btn englishFont themeFontColorSub cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : 'hide'">Enter</router-link>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>