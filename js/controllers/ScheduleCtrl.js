angular.module("eu.luminis.devcon.schedule").controller('ScheduleCtrl', ['$scope', 'sessionsService', 
	function ($scope, sessionsService) {

		$scope.blocks = sessionsService.getAllBlocks();
		$scope.pinnedTimeslot;
		
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			
			$scope.pinnedTimeslot = undefined;
			$.each($('.scroller'), function( index, value ) {
				$element = $(value);
				if (scrollTop > $element.offset().top) {
					$scope.pinnedTimeslot = $element.text();
				}
			});
			$scope.$apply();
		});
		
	}
]);
