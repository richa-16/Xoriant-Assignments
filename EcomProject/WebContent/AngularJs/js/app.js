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
		.when('/register', {
			controller:'loginController',
			templateUrl:'pages/login/register.html'
		})
		.when('/userProfile', {
			controller:'userProfileController',
			templateUrl:'pages/userProfile/userProfile.html'
		})
		.when('/postAdd' , {
			controller:'userProfileController',
			templateUrl:'pages/userProfile/postAdd.html'
		})
		.otherwise({redirectTo: '/'})
});
// Custome directives

// Register all the services 
//myModule.service('productService',productService);


// Register all the factories 
//ecomApp.factory('productFactory', productFactory);
ecomApp.factory('appFactory', appFactory);
ecomApp.factory('restApi', restApi);
ecomApp.factory("fileReader",["$q", "$log", fileReader]);


//
// Register all the controllers 

ecomApp.controller('homeController', homeController);
ecomApp.controller('loginController', loginController);
ecomApp.controller('testController', testController);
ecomApp.controller('userProfileController', userProfileController);


ecomApp.directive('ngFileSelect', ngFileSelect);
ecomApp.directive('ngHeader', ngHeader);


// Register all the states


// Register all the constants

// Register all the values

// Register other 

