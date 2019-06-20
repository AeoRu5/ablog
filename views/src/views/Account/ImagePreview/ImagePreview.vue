<template>
	<div ref="component_image_preview_frame" class="component_image_preview_frame_ignore relative">
		<canvas ref="canvas" class="absolute horVerMid"></canvas>
		<div class="component_image_preview_btns themeBackgroundColorSub fixed horMid">
			<div
				class="component_image_preview_btn_cancel component_image_preview_btn themeFontColorMain"
				@click="_image_preview_btn_cancel">取 消</div>
			<div
				class="component_image_preview_btn_confirm component_image_preview_btn themeBackgroundColorMain"
				@click="_image_preview_btn_confirm">确 定</div>
		</div>
	</div>
</template>

<script src="./ImagePreview.js"></script>

<style scoped lang="less" src="./ImagePreview.less"></style>