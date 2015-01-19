(function () {
	'use strict';

	angular
		.module('testApp', [])
		.controller('TestController', function TestController() {
			var vm = this;

			vm.firstName = '';
			vm.lastName = '';
			vm.fullName = function () {
				return vm.firstName + ' ' + vm.lastName;
			};
		});
})();