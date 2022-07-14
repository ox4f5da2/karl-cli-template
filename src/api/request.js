import axios from 'axios'

function get(url) {
	return function (params, callback) {
		let status = 'SUCCESS';
		return new Promise((resolve, reject) => {
			axios.get(url, {
				params
			})
				.then(res => resolve(res))
				.catch(err => {
					reject(err);
					status = 'FAIL';
				})
				.finally(() => callback && callback(status))
		})
	}
}

export {
	get
}