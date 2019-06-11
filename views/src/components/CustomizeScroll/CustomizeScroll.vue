<template>
	<vue-scroll
		class="aeorusUI_scroll_frame"
		:ops="slideOptions"
		@refresh-activate="refreshActivate"
		@refresh-start="refreshStart"
		@refresh-before-deactivate="refreshBeforeDeactivate"
		@load-activate="loadActivate"
		@load-start="loadStart"
		@load-before-deactivate="loadBeforeDeactivate">
		<div class="aeorusUI_scroll_reload_slot" slot="refresh-deactive">
			<div class="aeorusUI_scroll_reload_slot_text">下拉刷新</div>
			<div class="iconfont icon-down"></div>
		</div>
		<div class="aeorusUI_scroll_reload_slot" slot="refresh-start">
			<div class="iconfont icon-reload"></div>
			<div class="aeorusUI_scroll_reload_slot_text">刷新中</div>
		</div>
		<div class="aeorusUI_scroll_reload_slot" slot="refresh-active">
			<div class="aeorusUI_scroll_reload_slot_text">松开刷新</div>
			<div class="iconfont icon-up"></div>
		</div>
		<div class="aeorusUI_scroll_reload_slot" slot="load-deactive">
			<div class="aeorusUI_scroll_reload_slot_text">上拉加载</div>
			<div class="iconfont icon-up"></div>
		</div>
		<div class="aeorusUI_scroll_reload_slot" slot="load-start">
			<div class="iconfont icon-reload"></div>
			<div class="aeorusUI_scroll_reload_slot_text">加载中</div>
		</div>
		<div class="aeorusUI_scroll_reload_slot" slot="load-active">
			<div class="aeorusUI_scroll_reload_slot_text">松开刷新</div>
			<div class="iconfont icon-down"></div>
		</div>
	</vue-scroll>
</template>

<script src="./CustomizeScroll.js"></script>

<style scoped lang="less" src="./CustomizeScroll.less"></style>