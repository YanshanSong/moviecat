(function(angular){
	angular.module('moviecat.directives.auto-focus',[])
		.directive('autoFocus',['$location',function($location){
			// 指令名
			// var path = $location.path().substr(1);
			// console.log(path);
			// 只在页面加载时执行
			return {
				restrict:'A',
				//指明指令在DOM中以什么方式被声明
				//E = Element，A = Attribute，C = Class，M = comment
				//默认restrict:'EA'
				link:function($scope,iElement,iAttrs,controller){
					//iElem表示指令最终用在哪个(些)元素上面
					$scope.$location = $location;
					$scope.$watch('$location.path()',function(now){
						//当path发生变化时执行
					var aLink = iElement.children().attr('href').substr(1);
					if(now.substr(1).startsWith(aLink)){
						iElement.parent().children().removeClass('active');
						iElement.addClass('active');
					}
				});		
			 }
			};
	}]);
})(angular);


