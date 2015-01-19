(function () {
	'use strict';

	angular
		.module('testApp.moduleTwo')
		.controller('testApp.moduleTwo.ModuleTwoController', ['StyleService', ModuleTwoController]);

	function ModuleTwoController(StyleService) {
		var vm = this;

		vm.color = 'green';
		vm.style = function () {
			return StyleService.buildBackgroundStyleWithColor(vm.color);
		};
	}
	
})();