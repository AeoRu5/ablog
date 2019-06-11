<template>
	<div id="app" class="themeLinearGradientBackgroundColor">
		<router-view v-if="$route.meta.keepAlive"></router-view>
		<router-view v-else></router-view>
		<AeorusUI />
	</div>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import AeorusUI from '@/components/AeorusUI/AeorusUI.vue'

	export default {
		components: {
			AeorusUI
		},
		mounted() {
			this.checkClient();
		},
		methods: {
			...mapActions([
				'checkClient'
			])
		},
	}
</script>