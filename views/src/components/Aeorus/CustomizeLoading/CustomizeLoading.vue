<template>
	<div v-if="loading_show">
		<div class="aeorusUI_loading_frame themeBackgroundColorMain themeFontColorSub fixed horVerMid animated flash infinite slow">
			<div class="iconfont icon-thunderbolt-fill"></div>
			<div class="aeorusUI_loading_content textOverflow ac">{{loading_content}}</div>
		</div>
	</div>
</template>

<script src="./CustomizeLoading.js"></script>

<style scoped lang="less" src="./CustomizeLoading.less"></style>