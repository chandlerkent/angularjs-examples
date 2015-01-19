(function () {
	'use strict';

	angular
		.module('testApp.moduleOne')
		.controller('testApp.moduleOne.ModuleOneController', ['StyleService', ModuleOneController]);

	function ModuleOneController(StyleService) {
		var vm = this;

		vm.color = 'blue';
		vm.style = function () {
			return StyleService.buildBackgroundStyleWithColor(vm.color);
		};
	}

})();