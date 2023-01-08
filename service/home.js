import hyRequest from './index.js'

// http://152.136.185.210:7878/api/hy66/home/multidata
export const getHomeMutidata = () => {
	return hyRequest.get('/home/multidata', {})
}

// http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=20
export const getHomeData = (type, page) => {
	return hyRequest.get('/home/data', {
		type,
		page
	})
}