(function () {
	'use strict';

	angular
      .module('angularApp')
      .controller('Login', login);

	/**
      * @ngdoc controller
      * @name angularApp.controller:Login
      * @description
      *
      */
	/*@ngInject*/
	function login($scope, $http, $state, loginService) {

		// PUBLIC FUNCTIONS
		$scope.submit = function () {
			loginService.assignCurrentUser($scope.user);
			$state.go("Welcome");
		}


		// init
		activate();


		//
		// PRIVATE FUNCTIONS

		function activate() { }

		function doSomething() { }
	}
})();
