import AppConfig from '@/AppConfig.js'

export default {
	state: {
		component_tabBar_actived: 'home',
		app_tab_lists: AppConfig.tabBarLists
	},
	mutations: {
		component_tabBar_switch(state, param) {
			state.component_tabBar_actived = param;
			sessionStorage.setItem('TABBAR', param);
		}
	},
	actions: {
		component_tabBar_switch(ctx, param) {
			ctx.commit('component_tabBar_switch', param);
		}
	}
}