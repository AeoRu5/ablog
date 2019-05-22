import axios from 'axios'

export default {
	requestGet(url, params, cb) {
		let paramsStr,
			paramsLength = Object.keys(params).length;

		if (paramsLength == 0) {
			paramsStr = '';
		} else {
			paramsStr = '?';

			Object.keys(params).forEach((key, index) => {
				paramsStr += `${key}=${params[key]}` + (paramsLength - 1 == index ? '' : '&');
			});
		}

		axios.get(url + paramsStr, {}).then(res => {
			if (res.request.readyState == 4 && res.status == 200) {
				if (cb) cb(res.data);
			} else {
				console.log(res);
			}
		}).catch(e => {
			console.log(e);
		});
	},
	requestPost(url, params, cb) {
		axios.post(url, params).then(res => {
			if (res.request.readyState == 4 && res.status == 200) {
				if (cb) cb(res.data);
			} else {
				console.log(res);
			}
		}).catch(e => {
			console.log(e);
		});
	},
}