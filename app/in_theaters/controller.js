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

		.controller('inTheatersController', ['$scope',function($scope) {
			
		}]);
})(angular)

