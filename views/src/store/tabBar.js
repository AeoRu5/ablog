export default {
	state: {
		component_tabBar_actived: 'home'
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