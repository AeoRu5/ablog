<template>
	<div id="app">
		<router-view v-if="$route.meta.keepAlive"></router-view>
		<router-view v-else></router-view>
		<Aeorus />
	</div>
</template>

<script>
	import {
		mapActions
	} from 'vuex'

	export default {
		mounted() {
			this.checkClient();
		},
		methods: {
			...mapActions([
				'checkClient'
			])
		}
	}
</script>