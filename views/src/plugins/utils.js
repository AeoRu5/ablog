import axios from 'axios'

let cookies = document.cookie.split(';'),
	_aeorustoken = '';

cookies.map(cookie => {
	if (cookie.split('=')[0].trim() == 'aeorustoken') {
		_aeorustoken = cookie.split('=')[1];
	}
});

export default {
	requestGet(url, params, successCallback, errorCallback) {
		let _paramsStr,
			_insertHeaders = params.headers || {};

		delete params.headers;

		let _paramsLength = params.data ? Object.keys(params.data).length || 0 : 0;

		if (_paramsLength == 0) {
			_paramsStr = '';
		} else {
			_paramsStr = '?';

			Object.keys(params.data).forEach((key, index) => {
				_paramsStr += `${key}=${params.data[key]}` + (_paramsLength - 1 == index ? '' : '&');
			});
		}

		let headers = Object.assign({
			'aeorustoken': _aeorustoken
		}, _insertHeaders);

		axios.get(url + _paramsStr, {
			headers
		}).then(res => {
			if (res.request.readyState == 4 && res.status == 200) {
				if (res.headers && res.headers.aeorustoken) {
					if (_aeorustoken == '') {
						this.setUserToken(res.headers.aeorustoken);
					} else {
						if (_aeorustoken != res.headers.aeorustoken) {
							this.setUserToken(res.headers.aeorustoken);
						}
					}
				}

				if (successCallback) successCallback(res.data);
			} else {
				if (errorCallback) errorCallback(res.data);
			}
		}).catch(e => {
			if (errorCallback) errorCallback(e);
		});
	},
	requestPost(url, params, successCallback, errorCallback) {
		let _insertHeaders = params.headers || {};

		delete params.headers;

		let headers = Object.assign({
			'aeorustoken': _aeorustoken
		}, _insertHeaders);

		axios.post(url, params.data, {
			headers
		}).then(res => {
			if (res.request.readyState == 4 && res.status == 200) {
				if (res.headers && res.headers.aeorustoken) {
					if (_aeorustoken == '') {
						this.setUserToken(res.headers.aeorustoken);
					} else {
						if (_aeorustoken != res.headers.aeorustoken) {
							this.setUserToken(res.headers.aeorustoken);
						}
					}
				}

				if (successCallback) successCallback(res.data);
			} else {
				if (errorCallback) errorCallback(res.data);
			}
		}).catch(e => {
			if (errorCallback) errorCallback(e);
		});
	},
	setUserToken(token) {
		document.cookie = 'aeorustoken=' + token;
	}
}