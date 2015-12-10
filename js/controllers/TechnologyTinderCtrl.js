angular.module("eu.luminis.devcon.schedule").controller('TechnologyTinderCtrl', ['$scope', 'sessionsService', 'technologyTinderService', '$location',
	function ($scope, sessionsService, technologyTinderService, $location) {
	
		$scope.slide = technologyTinderService.getFirst();
	
		$scope.onDislike = function(){
			$scope.slide.liked = false;
			next();
		}
		
		$scope.onLike = function(){
			$scope.slide.liked = true;
			next();
		}
		
		var next = function() {
			$scope.slide = technologyTinderService.next();
			if (!$scope.slide) {
				technologyTinderService.calculateMatches();
				$location.path("/");
			}
		}
	
	}
]);