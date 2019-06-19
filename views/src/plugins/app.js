import axios from 'axios'
import router from '@/router'

export default {
	install(Vue, options) {
		Vue.prototype.$requestGet = this.requestGet;
		Vue.prototype.$requestPost = this.requestPost;
		Vue.prototype.$isEmptyObject = this.isEmptyObject;
		Vue.prototype.$checkAnimationEnd = this.checkAnimationEnd;
	},
	requestGet(url, params, successCallback, errorCallback, message) {
		this.$showLoading(message);

		let _linkRequestParams,
			headers = params.headers || {};

		delete params.headers;

		let _paramsLength = params.data ? Object.keys(params.data).length || 0 : 0;

		if (_paramsLength == 0) {
			_linkRequestParams = '';
		} else {
			_linkRequestParams = '?';

			Object.keys(params.data).forEach((key, index) => {
				_linkRequestParams += `${key}=${params.data[key]}` + (_paramsLength - 1 == index ? '' : '&');
			});
		}

		axios.get(url + _linkRequestParams, {
			headers
		}).then(res => {
			this.$hideLoading();

			if (res.request.readyState == 4 && res.status == 200) {
				let result = res.data;

				if (result.needLoad) {
					router.replace({
						name: 'login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
				} else {
					successCallback && typeof successCallback === 'function' && successCallback(result);
				}
			} else {
				errorCallback && typeof errorCallback === 'function' && errorCallback(result);
			}
		}).catch(e => {
			this.$hideLoading();
			errorCallback && typeof errorCallback === 'function' && errorCallback(e);
		});
	},
	requestPost(url, params, successCallback, errorCallback, message) {
		this.$showLoading(message);

		let headers = params.headers || {};

		delete params.headers;

		axios.post(url, params.data, {
			headers
		}).then(res => {
			this.$hideLoading();

			if (res.request.readyState == 4 && res.status == 200) {
				let result = res.data;

				if (result.needLoad) {
					router.replace({
						name: 'login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
				} else {
					successCallback && typeof successCallback === 'function' && successCallback(result);
				}
			} else {
				errorCallback && typeof errorCallback === 'function' && errorCallback(result);
			}
		}).catch(e => {
			this.$hideLoading();
			errorCallback && typeof errorCallback === 'function' && errorCallback(e);
		});
	},
	isEmptyObject(object) {
		return Object.keys(object).length == 0 ? true : false;
	},
	checkAnimationEnd(vm, event, callback) {
		vm.addEventListener(event, callback);
	}
}