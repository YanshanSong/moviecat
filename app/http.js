(function(angular) {
	'use strict';
	// 由于默认angular提供的异步请求对象jsonp不支持自定义回调函数名
	// angular随机分配的回调函数名称不被豆瓣支持

	angular.module('moviecat.app.http',[])
		.service('httpService',['$window','$document',function($window,$document){
			this.jsonp = function(url,data,callback){
				// 1.挂载
				var fnSuffix = Math.random().toString().replace('.','');
				var cbFuncName = "my_json_cb_" + fnSuffix;
				$window[cbFuncName] = callback;
				
				// 2.将data转化为url字符串
				var querystring = url.indexOf('?') == -1 ? '?' : '&';
				for(var key in data){
					querystring += (key + '=' + data[key] + '&');
				}
				// 3.处理url中的回调函数
				querystring += 'callback=' + cbFuncName;

				// 4.创建一个script标签
				var scriptElement = $document[0].createElement('script');
				scriptElement.src = url + querystring;
				$document[0].body.append(scriptElement);
			};
		}]);
})(angular);