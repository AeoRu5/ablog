import vuescroll from 'vuescroll'

export default {
	components: {
		vuescroll
	},
	data() {
		return {
			text: '',
			ops: {
				vuescroll: {
					mode: 'slide',
					detectResize: true,
					pullRefresh: {
						enable: true,
						tips: {
							deactive: 'Pull to Refresh',
							active: 'Release to Refresh',
							start: 'Refreshing...',
							beforeDeactive: 'Refresh Successfully!'
						}
					},
					pushLoad: {
						enable: true,
						tips: {
							deactive: 'Push to Load',
							active: 'Release to Load',
							start: 'Loading...',
							beforeDeactive: 'Load Successfully!'
						},
						auto: true,
						autoLoadDistance: 0
					},
					paging: false,
					zooming: false,
					snapping: {
						enable: false,
						width: 100,
						height: 100
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
					disable: true,
				}
			}
		}
	},
	methods: {

	},
}