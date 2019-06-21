<template>
	<div
		id="app"
		:style="$route.meta.hideNavigator ? '' : 'padding-top:48px'">
		<Navigator v-if="!$route.meta.hideNavigator" />
		<router-view v-if="$route.meta.keepAlive"></router-view>
		<router-view v-else></router-view>
		<TabBar v-if="currentUrl == 'app'" />
		<Aeorus />
	</div>
</template>

<script src="./App.js"></script>