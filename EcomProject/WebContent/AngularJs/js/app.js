var ecomApp = angular.module('ecomProject', ['ngRoute']);

// ecomApp config Config method
ecomApp.config(function($routeProvider){
	// Put all the routing here 
	$routeProvider
		.when('/', {
			controller: 'homeController',
			templateUrl: 'pages/home/home.html'
		})
		.when('/login', {
			controller: 'loginController',
			templateUrl: 'pages/login/login.html'
		})
		.when('/test', {
			controller: 'testController',
			templateUrl: 'pages/test/test1.html'
		})
		.otherwise({redirectTo: '/'})
});

// Register all the controllers 
ecomApp.controller('homeController', homeController);
ecomApp.controller('loginController', loginController);
ecomApp.controller('testController', testController);

// Register all the services 
//myModule.service('productService',productService);


// Register all the factories 
//ecomApp.factory('productFactory', productFactory);
ecomApp.factory('restApi', restApi);

// Register all the states


// Register all the constants

// Register all the values

// Register other 

