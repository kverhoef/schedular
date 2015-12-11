
angular.module("eu.luminis.devcon.schedule").directive('rating', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			rating: '=ngModel',
			callback: "=?"
		},
		template: 
			"<div style=\"font-size:2em;cursor:default;\">" + 
				"<span style=\"padding:5px;\" ng-repeat=\"n in [2,4,6,8,10]\" class=\"fa\" ng-click=\"rate(n, $event)\" ng-class=\"{ 'fa-star-half-o' : n == rating + 1, 'fa-star' : n <= rating + 1, 'fa-star-o' : rating == undefined || n > rating }\"></span>" +
			"</div>",
		controller: function($scope, $element, $timeout) {
			
			$scope.rate = function(rating, event) {
				$scope.rating = rating;
				
				$element = angular.element(event.target);

				if ($element.offset().left + ($element.width()/2) > event.clientX) {
					$scope.rating--;
				}
				
				if ($scope.callback != undefined) {
					$timeout(function(){ $scope.callback($scope.rating); },1)
				}
				
			}
		}
	};
})