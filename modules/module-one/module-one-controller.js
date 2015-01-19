(function () {
	'use strict';

	angular
		.module('testApp.moduleOne') // use chained getter syntax
		.controller('ModuleOneController', ModuleOneController);

	function ModuleOneController() {
		var vm = this;

		vm.name = 'ModuleOneController';
	}
})();