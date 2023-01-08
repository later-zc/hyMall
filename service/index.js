const TIME_OUT = 60000
const BASE_URL = 'http://152.136.185.210:7878/api/hy66'


class HYRequest{
	
	request(url, method, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method: method || "GET",
				timeout: TIME_OUT,
				data: data,
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
	
	get(url, params) {
		return this.request(url, "GET", params)
	}
	
	post(url, data) {
		return this.request(url, "POST", params)
	}
}
export default new HYRequest()

