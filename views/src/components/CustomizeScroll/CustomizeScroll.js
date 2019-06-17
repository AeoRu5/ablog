import vuescroll from 'vuescroll'

export default {
	props: [],
	components: {
		vuescroll
	},
	data() {
		return {
			slideOptions: {
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
		refreshActivate(vm, refreshDom) {

		},
		refreshStart(vm, refreshDom, done) {
			//获取数据之后done()
			setTimeout(() => {
				done();
			}, 60000)
		},
		refreshBeforeDeactivate(vm, refreshDom, done) {
			//获取数据之后进行提示然后done()
			done();
		},
		loadActivate(vm, refreshDom) {

		},
		loadStart(vm, refreshDom, done) {
			//获取数据之后done()
			setTimeout(() => {
				done();
			}, 1000)
		},
		loadBeforeDeactivate(vm, refreshDom, done) {
			//获取数据之后进行提示然后done()
			done();
		}
	}
}