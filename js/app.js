angular.module("eu.luminis.devcon.schedule", ['ngRoute']);

(function(angular){

	angular.filter("sanitize", ['$sce', function($sce) {
	  return function(htmlCode){
		return $sce.trustAsHtml(htmlCode);
	  }
	}]);
	
	angular.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			  when('/', {
				templateUrl: 'templates/schedule.html', 
				controller: 'ScheduleCtrl'
			  }).
			  when('/session/:id', {
				templateUrl: 'templates/session.html', 
				controller: 'SessionCtrl'
			  }).
			  when('/technologyTinder', {
				templateUrl: 'templates/technologyTinder.html', 
				controller: 'TechnologyTinderCtrl',
				onEnter: function(){
					console.log('123')
				}
			}).
			otherwise({
				redirectTo: '/'
			});
	}]).run(function($rootScope, $location) {
		$rootScope.$on( "$routeChangeStart", function(event, next, current) {
			if (next.controller === 'TechnologyTinderCtrl') {
				$rootScope.hideBodyOverflow = true;
			} if (current && current.controller === 'TechnologyTinderCtrl') {
				$rootScope.hideBodyOverflow = false;
			}
		});
	});
	
})(angular.module("eu.luminis.devcon.schedule"));