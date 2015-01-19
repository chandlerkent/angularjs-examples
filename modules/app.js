(function () {
	'use strict';

	angular
		.module('testApp', [
			'testApp.moduleOne',
			'testApp.moduleTwo'
		])
		.controller('TestController', ['ModuleOneService', TestController]);

	function TestController(ModuleOneService) {
		var vm = this;

		vm.sayHello = ModuleOneService.sayHi;
	}

})();