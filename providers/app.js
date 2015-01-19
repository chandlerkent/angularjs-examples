(function () {
	'use strict';

	angular
		.module('testApp', [])
		// .constant('TestServiceOneConstant', 'TestServiceOneConstant')
		.provider('TestServiceOneConstant', function () {
			this.$get = function () { return 'TestServiceOneConstant'; };
		})
		.provider('TestServiceOne', function TestServiceOne() {
			var privateConfig = 123;
			this.someSetupMethod = function someSetupMethod(myConfig) {
				privateConfig = myConfig;
			};

			this.$get = function TestServiceOneFactory() {
				return new TestServiceOneService(privateConfig);
			};
		})
		// .factory('TestServiceOne', function TestServiceOneFactory() {
		// 	return new TestServiceOneService('Factory config');
		// })
		// .value('TestServiceConfigValue', 'TestServiceConfigValue')
		// .service('TestServiceOne', ['TestServiceConfigValue', TestServiceOneService])
		.controller('TestController', ['TestServiceOne', function TestController(testServiceOne) {
			var vm = this;

			vm.config = testServiceOne.config;
		}])
		.config(['TestServiceOneConstantProvider', 'TestServiceOneProvider', function (testConstant, testServiceOneProvider) {
			testServiceOneProvider.someSetupMethod(testConstant);
		}]);
		// .config(['TestServiceOneConstant', 'TestServiceOneProvider', function (testConstant, testServiceOneProvider) {
		// 	testServiceOneProvider.someSetupMethod(testConstant);
		// }]);


		function TestServiceOneService(config) {
			this.config = config;
		}
})();