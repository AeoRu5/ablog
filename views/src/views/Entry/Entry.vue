<template>
	<div class="view_entry_frame relative themeBackgroundColor">
		<AniSvg/>
		<div class="view_entry_btn_frame flex">
			<div
				class="view_entry_btn englishFont themeFontColor cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : 'hide'"
				@click="view_entry_clickEnterBtn">Enter</div>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>