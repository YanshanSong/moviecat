(function() {
	'use strict';
	angular.module('moviecat.in_theaters', ['ngRoute'])
	//配置模块的路由
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersController'
	  });
	}])

	.controller('inTheatersController', ['$scope','$http',function($scope,$http) {
		//控制器 分为两步
		// 1.设计暴露数据
		// $scope.subjects = data;
		// console.log(data);
		// 2.设计暴露行为	 
		//测试$http
		// 最可靠的写法(绝对路径),/表示从根目录开始
		$scope.subjects = [];
		$scope.message = ''
		$http.get('data.json').then(function(res) {
			//此处的代码是在异步请求完成过后才执行(需要等一段时间)
			console.log(res);
			if(res.status == 200){	
				$scope.subjects = res.data.subjects;
			}else{
				$scope.message = '获取数据错误!错误信息:' + res.statusText;
			}
		},function(err) {
			console.log(err);
			$scope.message = '获取数据错误!错误信息:' + err.statusText;
		});
	}]);
})(angular)

