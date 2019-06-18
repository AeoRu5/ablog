import vuescroll from 'vuescroll'

export default {
	props: [],
	components: {
		vuescroll
	},
	data() {
		return {
			slide_options: {
				vuescroll: {
					mode: 'slide',
					detectResize: true,
					pullRefresh: {
						enable: true
					},
					pushLoad: {
						enable: true,
						auto: true,
						autoLoadDistance: 0
					},
					paging: false,
					zooming: false,
					snapping: {
						enable: false,
						width: 100,
						height: 300
					},
					scroller: {
						bouncing: {
							top: 100,
							bottom: 100
						},
						locking: true,
						minZoom: .5,
						maxZoom: 3,
						speedMultiplier: .5,
						penetrationDeceleration: .03,
						penetrationAcceleration: .08,
						preventDefault: true,
						preventDefaultOnMove: true,
						disable: false
					}
				},
				bar: {
					disable: true
				}
			}
		}
	},
	methods: {
		_scroll_refreshActivate(vm, refreshDom) {

		},
		_scroll_refreshStart(vm, refreshDom, done) {
			//获取数据之后done()
			setTimeout(() => {
				done();
			}, 60000)
		},
		_scroll_refreshBeforeDeactivate(vm, refreshDom, done) {
			//获取数据之后进行提示然后done()
			done();
		},
		_scroll_loadActivate(vm, refreshDom) {

		},
		_scroll_loadStart(vm, refreshDom, done) {
			//获取数据之后done()
			setTimeout(() => {
				done();
			}, 1000)
		},
		_scroll_loadBeforeDeactivate(vm, refreshDom, done) {
			//获取数据之后进行提示然后done()
			done();
		}
	}
}