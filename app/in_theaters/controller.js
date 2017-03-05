(function() {
	'use strict';
	angular.module('moviecat.in_theaters', ['ngRoute','moviecat.app.http'])
	//配置模块的路由
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersController'
	  });
	}])

	.controller('inTheatersController', [
		'$scope',
		'httpService',
		function($scope,httpService) {
		//控制器 分为两步
		// 1.设计暴露数据
		// $scope.subjects = data;
		// console.log(data);
		// 2.设计暴露行为	 
		//测试$http
		// 最可靠的写法(绝对路径),/表示从根目录开始
		$scope.subjects = [];
		$scope.message = '';
		//开始加载
		$scope.loading = true;
		var doubanApiAddress = "http://api.douban.com/v2/movie/in_theaters";
		//  本地ajax请求测试
		// $http.get('data.json').then(function(res) {
		// 	//此处的代码是在异步请求完成过后才执行(需要等一段时间)
		// 	console.log(res);
		// 	if(res.status == 200){	
		// 		$scope.subjects = res.data.subjects;
		// 	}else{
		// 		$scope.message = '获取数据错误!错误信息:' + res.status + res.statusText;
		// 	}
		// },function(err) {
		// 	console.log(err);
		// 	$scope.message = '获取数据错误!错误信息:' + err.statusText;
		// });

		//***************************************
		//angular中所有的JSONP的callback都挂在angular.callbacks这个对象上
		
		// $http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK').then(function(res) {
			// 为什么有jsonp?XMLHttpRequest对象不支持跨域请求
			// 支持跨域的对象
			// img,iframe,link
			// 在angular中使用JSONP的方式做跨域请求
			// 就必须给当前地址加上一个参数callback=JSON_CALLBACK
		// 	console.log(res);
		// 	if(res.status == 200){	
		// 		$scope.subjects = res.data.subjects;
		// 	}else{
		// 		$scope.message = '获取数据错误!错误信息:' + res.status + res.statusText;
		// 	}
		// },function(err) {
		// 	console.log(err);
		// 	$scope.message = '获取数据错误!错误信息:' + err.statusText;
		// });
		//但是豆瓣不支持JSON_CALLBACK
		//所以上述代码废
		 httpService.jsonp(doubanApiAddress,{},function(data) {
		 	$scope.subjects = data.subjects;
		 	$scope.loading = false;
		 	$scope.$apply();
		 	//$apply的作用:重新同步数据模型
		});
	}]);
})(angular);

