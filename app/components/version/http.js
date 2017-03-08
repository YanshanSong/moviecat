(function(angular) {
	'use strict';
	// 由于默认angular提供的异步请求对象jsonp不支持自定义回调函数名
	// angular随机分配的回调函数名称不被豆瓣支持

	angular.module('moviecat.app.http',[])
		.service('httpService',['$window','$document',function($window,$document){
			this.jsonp = function(url,data,callback){
				// 1.回调函数命名
				var fnSuffix = Math.random().toString().replace('.','');
				var cbFuncName = "my_json_cb_" + fnSuffix;
				
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

				// 5.挂载
				// 将回调函数挂载到全局
				$window[cbFuncName] = function(data) {
					callback(data);  //一定要等到callback执行完之后才能删除元素
					$document[0].body.removeChild(scriptElement);
				}
				$document[0].body.appendChild(scriptElement);
				//注意有append操作就必须有remove操作
				//否则script标签会在页面堆积
			};
		}]);
})(angular);