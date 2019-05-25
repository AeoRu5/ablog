<template>
	<div class="entry_view_frame relative themeBackgroundColor">
		<AniSvg/>
		<div class="entry_view_btn_frame flex">
			<div
				class="entry_view_btn themeFontColor themeBorder themeBoxShadow cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : 'hide'"
				@click="view_entry_clickEnterBtn">Enter</div>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>