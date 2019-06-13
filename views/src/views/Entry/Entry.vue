<template>
	<div class="view_entry_frame frameConfig relative">
		<AniSvg/>
		<div class="view_entry_btn_frame flex">
			<div
				class="view_entry_btn englishFont themeFontColorSub cp"
				:class="isAniSvgAnimationEnd ? 'flex animated fadeIn slower' : ''"
				:style="isAniSvgAnimationEnd ? '' : 'visibility:hidden'"
				@click="view_entry_btn">Enter</div>
		</div>
	</div>
</template>

<script src="./Entry.js"></script>

<style scoped lang="less" src="./Entry.less"></style>