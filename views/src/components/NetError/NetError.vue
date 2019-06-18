<template>
	<div class="component_netError_frame frameConfig">
		<svg class="component_netError_svg" aria-hidden="true">
			<use xlink:href="#icon-ts-planet"></use>
		</svg>
		<div class="component_netError_tip themeLinearGradientFontColor">{{netError_tip}}</div>
		<div class="component_netError_reload themeBackgroundColorMain themeFontColorSub ac" @click="_netError_reload">重新加载</div>
	</div>
</template>

<script src="./NetError.js"></script>

<style scoped lang="less" src="./NetError.less"></style>