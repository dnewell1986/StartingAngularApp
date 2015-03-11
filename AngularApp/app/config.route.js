(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routeConfig);

    /*@ngInject*/
    function routeConfig($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise("/state1");

	    $stateProvider
		    .state('state1', {
			    url: '/state1',
			    templateUrl: "app/views/index.html",
			    controller: 'Index',
				data: {
					requireLogin: true
				}
		    })
			.state('state2', {
				url: '/state2',
				templateUrl: "app/views/login.html",
				controller: 'Login',
				data: {
					requireLogin: false
				}
			});
    }
})();
