(function() {
	'use strict';

	angular.module('moviecat.coming_soon', ['ngRoute'])
		//配置模块的路由
		.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/coming_soon', {
		    templateUrl: 'coming_soon/view.html',
		    controller: 'comingSoonController'
		  });
		}])
		.controller('comingSoonController', ['$scope',function($scope) {
			
		}]);
})(angular)

