var myModule = angular.module('entityApp', ['ngRoute']);

function productController($scope, productService) {
	$scope.products = productService.getProducts();
	// code to add product
	$scope.addProduct = function() {
		var ids = productService.getTotalProducts()+1;
		var currentObj = {id:ids,name: $scope.name, quantity: $scope.quantity, 
								price : $scope.price};
		console.log(currentObj);
		productService.addProduct(currentObj);
		// show some message that product has been added succefully 
	}
	// code to delete the product
	$scope.deleteProduct = function(id) {
		console.log("Delete product "+id);
		productService.deleteProduct(id);
		// show some message that product has been added succefully 
	}
	// code to update the product 
	
	$scope.updateProduct = function(){
		console.log("Reached in update product");
		var currentObj = {id:$scope.id, name:$scope.name , quantity: $scope.quantity, price: $scope.price};
		console.log(currentObj);
		productService.updateProduct(currentObj);
	}
	
	
}

myModule.controller('ProductController', productController);

myModule.service('productService', function() {
	  var productList = [{id: 1, name: 'Table', quantity: 25 , price: 2000},
		                   {id: 2,name: 'Charis', quantity: 100, price: 800}];
		
	  var addProduct = function(newObj) {
	      productList.push(newObj);
	  };

	  var getProducts = function(){
	      return productList;
	  };
	  
	  var deleteProduct = function(id){
		console.log("Delete product "+id);
		
		for( i = productList.length-1 ; i>=0; i--) {
			console.log("Reached inside loop");
	    	var num = Number(productList[i].id);
			if( num == id){ 
		    	console.log("Reached inside");
		    	productList.splice(i,1);
		    }
		}
		
	  };
	  
	  var updateProduct = function(newObj){
		  console.log("Update product "+newObj);
		  var id = newObj.id ;
		  console.log("Id update "+ id );
		  productList[id-1].name = newObj.name;
		  productList[id-1].quantity = newObj.quantity;
		  productList[id-1].price = newObj.price;
	  };
	  
	  var getTotalProducts = function(){
		  var num = Number(productList.length);
		  return num;
	  };
	  
	  return {
	    addProduct: addProduct,
	    getProducts: getProducts,
	    deleteProduct: deleteProduct,
	    updateProduct: updateProduct,
	    getTotalProducts : getTotalProducts
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
