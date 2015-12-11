/**
 * @author Kevin Verhoef
 *
 * $simpleHttp makes the use of Angulars $http even easier as it already is. 
 * It allows fast user interface handling because of some additional properties that are added. 
 * 
 * To call it simply pass a map just like you would do to call an $http request. The only difference 
 * here is that the method returns an object right away and gets enriched when the request finishes.
 * 
 * Example: 
 *  	$scope.getTimeRequest = $simpleHttp({method: 'GET', url: 'http://date.jsontest.com'});
 * 
 * $scope.getTimeRequest now has has this property:
 *		loading {boolean} - true while the request has not finished.
 * 		complete {boolean} - false while the request has not finished.
 *
 * When the request completes the $scope.getTimeRequest gets extended with the following properties:
 *		loading {boolean} - false when the request has finished
 * 		complete {boolean} - true when the request has finished
 *		success {boolean} - was the request successfull
 *		error {boolean} - the opposit of success, did the request fail
 *		The default properties of a $http request:
 *		data – {string|Object} – the response body
 *		status – {number} – HTTP status code
 * 		statusText – {string} – HTTP status text
 *
 */
angular.module("nl.kevinverhoef.ab").service('$simpleHttp', function($http){

	function _update(srcObj, destObj) {
		for (var key in srcObj) {
			if (key != "config") {
				destObj[key] = srcObj[key];
			}
		}
	}

    return function(httpCall){
	
		var model = {};
		
		var successCallback = function(response) {			
			_update(response, model);
			model.complete = true;
			model.success = true;
			model.error = false;
			model.loading = false;
			
			if (model.successCallback != undefined) {
				model.successCallback(model);
			}
		}
		
		var errorCallback = function(response) {
			_update(response, model);
			model.complete = true;
			model.success = false;
			model.error = true;
			model.loading = false;
			
			if (model.errorCallback != undefined) {
				model.errorCallback(model);
			}
		}
		
		model.reload = function(url) {
			model.loading = true;
			model.complete = false;
			model.success = undefined;
			model.error = undefined;
			httpCall.url = url || httpCall.url;
			$http(httpCall).then(successCallback, errorCallback);
		}
		
		model.then = function(successCallback, errorCallback){
			model.successCallback = successCallback;
			model.errorCallback = errorCallback;
			return model;
		}
		
		model.reload();
	
        return model;
    };    
});
