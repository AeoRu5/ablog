<template>
	<div v-if="modal_show || loading_show" class="aeorusUI_mask_frame frameConfig fixed">
		<CustomizeModal />
		<CustomizeLoading />
	</div>
</template>

<script src="./CustomizeMask.js"></script>

<style scoped lang="less" src="./CustomizeMask.less"></style>