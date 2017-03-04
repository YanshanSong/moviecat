(function(angular) {
	'use strict';
	// 由于磨人angular提供的异步请求对象jsonp不支持自定义回调函数名
	// angular随机分配的回调函数名称不被豆瓣支持

	angular.module('moviecat.app.http',[])
		.service('httpService',['$document',function($document){
			this.jsonp = function(url,callback) {
				// 1.处理URL中的回调函数
				// 2.创建一个script标签
				// 3.挂载回调函数
				// 4.将script标签放到页面中
			}
		}]);
})(angular);