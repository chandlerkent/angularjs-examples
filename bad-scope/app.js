(function () {
	'use strict';

	angular
		.module('testApp', [])
		.controller('ControllerOne', function ControllerOne($scope) {
			$scope.input = '';
		})
		.controller('ControllerTwo', function ControllerTwo($scope) {

		})
		.controller('ControllerThree', function ControllerThree($scope) {
			
		});
})();