
(function () {
    'use strict';

    /**
      * @ngdoc module
      * @name angularApp
      * @module angularApp
      * @description
      *
      */
    angular.module('angularApp', [
        // Angular modules
        'ui.router'

        // 3rd Party Modules

    ])
	.run(watchStateChange);

	/*@ngInject*/
	function watchStateChange($rootScope, $state) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
			var requireLogin = toState.data.requireLogin;

			if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
				event.preventDefault();
				//route to login page.
				$state.go("Login");
				
			}
		});
	}
})();
