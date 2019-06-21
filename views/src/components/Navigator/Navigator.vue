<template>
	<div class="component_navigator_frame_ignore fixed">
		<div class="component_navigator_title relative ac">{{navigator}}
			<div
				v-if="currentUrl != 'app'"
				class="return"
				@click="_navigator_return"></div>
		</div>
	</div>
</template>

<script src="./Navigator.js"></script>

<style scoped lang="less" src="./Navigator.less"></style>