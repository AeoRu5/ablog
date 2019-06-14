export default {
	state: {
		component_tabBar_actived: 'account'
	},
	mutations: {
		component_tabBar_switch(state, param) {
			state.component_tabBar_actived = param;
		}
	},
	actions: {
		component_tabBar_switch(ctx, param) {
			ctx.commit('component_tabBar_switch', param);
		}
	}
}