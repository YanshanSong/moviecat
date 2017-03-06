(function() {
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
		'httpService',
		function($scope,$routeParams,httpService) {
		var count = 10;                   //每一页的条数
		var page = parseInt($routeParams.page);  //当前页
		page = page ||　1;
		var start = (page -1) * count;   //当前页从数据的哪里开始

		$scope.subjects = [];
		$scope.title = ''
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
	}]);
})(angular);

