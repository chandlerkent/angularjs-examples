(function () {
	'use strict';

	angular
		.module('testApp', [])
		.controller('TestController', function TestController($scope) {
			$scope.firstName = '';
			$scope.lastName = '';
			$scope.fullName = function() {
				return $scope.firstName + ' ' + $scope.lastName;
			};
		});
})();