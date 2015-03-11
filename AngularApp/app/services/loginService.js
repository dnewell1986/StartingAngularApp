(function () {
	'use strict';

	angular
      .module('angularApp')
      .service('loginService', loginService);

	/**
      * @ngdoc service
      * @name angularApp.service:loginService
      * @description
      *
      */
	/*@ngInject*/
	function loginService($rootScope) {

		var service = {
			assignCurrentUser: assignCurrentUser
		};

		return service;

		function assignCurrentUser(user) {
			$rootScope.currentUser = user;
			return user;
		}
	}
})();
