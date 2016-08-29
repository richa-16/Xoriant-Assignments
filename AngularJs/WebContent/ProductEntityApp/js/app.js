var myModule = angular.module('entityApp', ['ngRoute']);

function productController($scope, productService) {
	$scope.products = productService.getProducts();
	$scope.addProduct = function() {
		var currentObj = {name: $scope.name, quantity: $scope.quantity, 
								price : $scope.price};
		console.log(currentObj);
		productService.addProduct(currentObj);
		// show some message that product has been added succefully 
	}
}

myModule.controller('ProductController', productController);

myModule.service('productService', function() {
	  var productList = [{name: 'Table', quantity: 25 , price: 2000},
		                   {name: 'Charis', quantity: 100, price: 800}];
		
	  var addProduct = function(newObj) {
	      productList.push(newObj);
	  };

	  var getProducts = function(){
	      return productList;
	  };

	  return {
	    addProduct: addProduct,
	    getProducts: getProducts
	  };

	});


myModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'ProductController',
			templateUrl: 'pages/home.html'
		})
		.when('/editProduct', {
			controller: 'ProductController',
			templateUrl: 'pages/editProduct.html'
		})
		.otherwise({redirectTo: '/'})
});
