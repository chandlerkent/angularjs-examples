(function () {
	'use strict';

	angular
		.module('testApp.moduleTwo') // use chained getter syntax
		.controller('ModuleTwoController', ModuleTwoController);

	function ModuleTwoController() {
		var vm = this;

		vm.name = 'ModuleTwoController';
	}
})();