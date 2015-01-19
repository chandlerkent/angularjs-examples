(function () {
	'use strict';

	angular
		.module('testApp', [])
		.controller('TestController', function TestController($scope) {
			$scope.hello = function() { console.log("Hello"); };
		});
})();