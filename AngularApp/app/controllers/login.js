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
		$scope.login = function () {
			console.log('I have called the login function', $scope.user);
			loginService.assignCurrentUser($scope.user);
			$state.go("state1");
		}


		// init
		activate();


		//
		// PRIVATE FUNCTIONS

		function activate() { }

		function doSomething() { }
	}
})();
