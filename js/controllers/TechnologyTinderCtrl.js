angular.module("eu.luminis.devcon.schedule").controller('TechnologyTinderCtrl', ['$scope', 'sessionsService', 'technologyTinderService', '$location',
	function ($scope, sessionsService, technologyTinderService, $location) {
	
		$scope.slides = technologyTinderService.getSlides();
	
		$scope.onDislike = function(slide){
			slide.liked = false;
		}
		
		$scope.onLike = function(slide){
			slide.liked = true;
		}
		
		$scope.onEnd = function() {
			technologyTinderService.calculateMatches();
			$location.path("/");
		}
	
	}
]);