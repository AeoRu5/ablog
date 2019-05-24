<template>
	<div class="enter_view_frame relative">
		<AniSvg/>
		<div class="enter_view_btn_frame flex">
			<div
				ref="enter_view_btn"
				class="enter_view_btn themeFontColor themeBorder themeBoxShadow themeFontSize cp"
				:class="isAniSvgAnimationEnd ? isHover ? '' : 'animated infinite flash slower' : 'hide'"
				@click="view_enter_clickEnterBtn"
				@mouseout="view_enter_mouseoutEnterBtn"
				@mouseover="view_enter_mouseoverEnterBtn">Enter</div>
		</div>
	</div>
</template>

<script src="./Enter.js"></script>

<style scoped lang="less" src="./Enter.less"></style>