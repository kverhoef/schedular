angular.module("eu.luminis.devcon.schedule").controller('SessionCtrl', ['$scope', 'sessionsService', '$routeParams', 
	function ($scope, sessionsService, $routeParams) {
	
		$scope.session = sessionsService.getSession($routeParams.id);
		
	}
]);