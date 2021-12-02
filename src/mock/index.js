import Mock from 'mockjs'

//模拟post请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/appointment', 'post', function (option) {
	return (
		{
			status: 200,
			info: 'OK'
		})
})