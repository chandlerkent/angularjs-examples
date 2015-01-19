(function () {
	'use strict';

	angular
		.module('testApp.moduleOne')
		.service('ModuleOneService', ModuleOneService);

	function ModuleOneService() {
		this.sayHi = function sayHi() {
			alert('Hi!');
		};
	}
})();