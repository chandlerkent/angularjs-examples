(function () {
	'use strict';

	angular
		.module('testApp', [
			'ngRoute',
			'testApp.style',
			'testApp.moduleOne',
			'testApp.moduleTwo'
		])
		.config(['$routeProvider', function testAppConfig($routeProvider) {
			$routeProvider
				.when('/module-one', {
					templateUrl: 'module-one/module-one.html',
					controller: 'testApp.moduleOne.ModuleOneController',
					controllerAs: 'modOne'
				})
				.when('/module-two', {
					templateUrl: 'module-two/module-two.html',
					controller: 'testApp.moduleTwo.ModuleTwoController',
					controllerAs: 'modTwo'
				})
				.otherwise({
					redirectTo: '/module-one'
				});
		}]);
})();