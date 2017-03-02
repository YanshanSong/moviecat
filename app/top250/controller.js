(function() {
	'use strict';

	angular.module('moviecat.top250', ['ngRoute'])
		//配置模块的路由
		.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/top250', {
		    templateUrl: 'top250/view.html',
		    controller: 'top250Controller'
		  });
		}])

		.controller('top250Controller', ['$scope',function($scope) {
			
		}]);
})(angular)

