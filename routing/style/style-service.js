(function () {
	'use strict';

	angular
		.module('testApp.style')
		.factory('StyleService', StyleServiceFactory);

	function StyleServiceFactory() {
		function buildBackgroundStyleWithColor(color) {
			return { 'background-color': color };
		}

		return {
			buildBackgroundStyleWithColor: buildBackgroundStyleWithColor
		};
	}
})();