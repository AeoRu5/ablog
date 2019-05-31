<template>
  <div id="app" class="themePageBackgroundColor">
    <router-view />
    <CustomizeMask />
		<CustomizeToast />
  </div>
</template>

<script>
	import CustomizeMask from '@/components/CustomizeMask/CustomizeMask.vue'
	import CustomizeToast from '@/components/CustomizeToast/CustomizeToast.vue'

	export default {
		components: {
			CustomizeMask,
			CustomizeToast
		}
	}
</script>