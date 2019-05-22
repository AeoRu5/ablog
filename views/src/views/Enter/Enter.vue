<template>
	<div class="enter_view_frame relative">
		<AniSvg/>
		<div
			ref="enter_view_btn"
			class="enter_view_btn absolute horVerMid cp"
			:class="isAniSvgAnimationEnd ? isHover ? '' : 'animated infinite flash slower' : 'hide'"
			@click="view_enter_clickEnterBtn"
			@mouseover="view_enter_mouseoverEnterBtn"
			@mouseout="view_enter_mouseoutEnterBtn">Enter</div>
	</div>
</template>

<script src="./Enter.js"></script>

<style scoped lang="less" src="./Enter.less"></style>