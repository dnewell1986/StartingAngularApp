(function () {
	'use strict';

	angular
      .module('angularApp')
      .factory('authService', authService);

	/**
      * @ngdoc service
      * @name angularApp.factory:authService
      * @description
      *
      */
	/*@ngInject*/
	function authService($http, localStorageService) {

		var authServiceFactory = {};

		var _authentication = {
			isAuth: false,
			userName: ""
		};

		var _saveRegistration = function(registration) {
			_logOut();

			return $http.post('/api/account/register', registration).then(function(response) {
				return response;
			});
		};

		var _logOut = function() {
			localStorageService.remove('authorizationData');

			_authentication.isAuth = false;
			_authentication.userName = "";
		};

		var _fillAuthData = function() {
			var authData = localStorageService.get('authorizationData');
			if (authData) {
				_authentication.isAuth = true;
				_authentication.userName = authData.userName;
			}
		}

		authServiceFactory.saveRegistration = _saveRegistration;
		authServiceFactory.login = _login;
		authServiceFactory.logOut = _logOut;
		authServiceFactory.fillAuthData = _fillAuthData;
		authServiceFactory.authentication = _authentication;

		return authServiceFactory;
	}
})();
