(function () {
	'use strict';

	angular
		.module('testApp', [])
		.filter('uppercase', function uppercaseFilter() {
			return function (input) {
				return input.toUpperCase();
			};
		})
		.controller('TestController', function TestController($scope) {
			$scope.throwError = function () {
				throw new Error('Fail');
			};
		});
})();