(function () {
	'use strict';

	angular
		.module('testApp', [])
		.controller('TestController', ['depOne', 'depTwo', 'depThree', 'depFour', 'depFive', 'depSix', TestController]);
		//.controller('TestController', TestController);

	//TestController.$inject = ['depOne', 'depTwo', 'depThree', 'depFour', 'depFive', 'depSix'];

	function TestController() {
		var vm = this;
	}

})();