import axios from 'axios'

export default {
	requestGet(url, params, successCallback, errorCallback) {
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
			if (res.request.readyState == 4 && res.status == 200) {
				if (successCallback) successCallback(res.data);
			} else {
				if (errorCallback) errorCallback(res.data);
			}
		}).catch(e => {
			if (errorCallback) errorCallback(e);
		});
	},
	requestPost(url, params, successCallback, errorCallback) {
		let headers = params.headers || {};

		delete params.headers;

		axios.post(url, params.data, {
			headers
		}).then(res => {
			if (res.request.readyState == 4 && res.status == 200) {
				if (successCallback) successCallback(res.data);
			} else {
				if (errorCallback) errorCallback(res.data);
			}
		}).catch(e => {
			if (errorCallback) errorCallback(e);
		});
	}
}