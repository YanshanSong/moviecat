(function(angular) {
	'use strict';
	angular.module('moviecat.movielist', ['ngRoute','moviecat.app.http'])
	//配置模块的路由
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:category/:page?', {
	    templateUrl: 'movie_list/view.html',
	    controller: 'movieListController'
	  });
	}])

	.controller('movieListController', [
		'$scope',
		'$routeParams',
		'$route',
		'httpService',
		function($scope,$routeParams,$route,httpService) {
			var count = 10;                   //每一页的条数
			// console.log($routeParams.page);
			// console.log(typeof $routeParams.page);
	    var page = $routeParams.page == undefined ? 1 : parseInt($routeParams.page);
	    // console.log(page);
	    // console.log(typeof page);
	    // 当前页
			var start = (page -1) * count;   //当前页从数据的哪里开始

			$scope.currentPage = page;
			$scope.subjects = [];
			$scope.title = '';
			//开始加载
			$scope.loading = true;
			$scope.totalCount = 0;
			$scope.totalPages = 0;
			var doubanApiAddress = "http://api.douban.com/v2/movie/" + $routeParams.category;
			
			 httpService.jsonp(doubanApiAddress,{
			 	start:start,
			 	count:count
			 },function(data) {
			 	$scope.title = data.title;
			 	$scope.subjects = data.subjects;
			 	$scope.totalCount = data.total;
			 	$scope.totalPages = Math.ceil($scope.totalCount / count);
			 	$scope.loading = false;
			 	$scope.$apply();
			 	//$apply的作用:重新同步数据模型
		});

		//暴露一个上一页、下一页的行为
		$scope.go = function(page) {
			// 传过来的是第几页就跳转到第几页
			// 更新route中的对应属性值
			// console.log($scope.currentPage);
			// console.log(page);
			// 一定要做一个合法范围校验
			if(page >= 1 && page <= $scope.totalPages){
				$route.updateParams({ "page" : page });
			}
		};
	}]);
})(angular);

