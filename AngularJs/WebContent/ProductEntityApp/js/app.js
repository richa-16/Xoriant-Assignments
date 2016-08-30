var myModule = angular.module('entityApp', ['ngRoute']);

// Factory code starts here 
function productFactory(){
	  
	  console.log("Run factory");
	  // factory object
	  var productFactory = {};
	  // static data for factory
	  var productList = [{id: 1, name: 'Table', quantity: 25 , price: 2000},
	                   {id: 2,name: 'Charis', quantity: 100, price: 800}];
	  
	  // custom variable to store editItem value for another view 
	  var editItem = 0;
	  
	  // add product 
	  productFactory.addProduct = function(newObj) {
	      productList.push(newObj);
	  };
	  
	  // get list of all products
	  productFactory.getProducts = function(){
	      return productList;
	  };
	  
	  // delete product 
	  productFactory.deleteProduct = function(id){
		console.log("Delete product "+id);
		// need to improve this logic 
		for( i = productList.length-1 ; i>=0; i--) {
			console.log("Reached inside loop");
	    	var num = Number(productList[i].id);
			if( num == id){ 
		    	console.log("Reached inside");
		    	productList.splice(i,1);
		    }
		}
		
	  };
	  
	  // change logic to update the product 
	  productFactory.updateProduct = function(newObj){
		  console.log("Update product "+newObj);
		  var id = newObj.id-1;
		  console.log("Id update "+ id );
		  productList[id].name = newObj.name;
		  productList[id].quantity = newObj.quantity;
		  productList[id].price = newObj.price;
	  };
	  
	  // get total products
	  productFactory.getTotalProducts = function(){
		  var num = parseInt(productList.length);
		  return num;
	  };
	  
	  // set editItem onclick edit button
	  productFactory.setEditItem = function(id){
		  editItem = id-1;
	  };
	  
	  // get editItem to get product data 
	  productFactory.getEditItem = function(){
		 return editItem ;
	  };
	 
	 return productFactory;
  
}
// Factory code ends here

// register factory here 
myModule.factory('productFactory', productFactory);

// Services 
function productService(){
	  console.log("Run service");
	  var productList = [{id: 1, name: 'Table', quantity: 25 , price: 2000},
		                   {id: 2,name: 'Charis', quantity: 100, price: 800}];
	  var editItem = 0;
	  
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
	  
	  // change logic to update the product 
	  var updateProduct = function(newObj){
		  console.log("Update product "+newObj);
		  var id = newObj.id-1;
		  console.log("Id update "+ id );
		  productList[id].name = newObj.name;
		  productList[id].quantity = newObj.quantity;
		  productList[id].price = newObj.price;
	  };
	  
	  var getTotalProducts = function(){
		  var num = Number(productList.length);
		  return num;
	  };
	  
	  var setEditItem = function(id){
		  editItem = id-1;
	  };
	  var getEditItem = function(){
		 return editItem ;
	  };
	 
	  return {
	    addProduct: addProduct,
	    getProducts: getProducts,
	    deleteProduct: deleteProduct,
	    updateProduct: updateProduct,
	    getTotalProducts : getTotalProducts,
	    setEditItem: setEditItem,
	    getEditItem: getEditItem
	  };
	
}
//service 
myModule.service('productService',productService);


function productController($scope, productService, productFactory , $location) {
	
	$scope.products = productFactory.getProducts();
	// code to add product
	$scope.addProduct = function() {
		var ids = productFactory.getTotalProducts()+1;
		var currentObj = {id:ids,name: $scope.name, quantity: $scope.quantity, 
								price : $scope.price};
		console.log(currentObj);
		productFactory.addProduct(currentObj);
		// show some message that product has been added succefully 
	}
	// code to delete the product
	$scope.deleteProduct = function(id) {
		console.log("Delete product "+id);
		productFactory.deleteProduct(id);
		// show some message that product has been added succefully 
		// redirect to homePage
	}
	// code to update the product 
	
	$scope.updateProduct = function(){
		console.log("Reached in update product");
		var currentObj = {id:$scope.eid, name:$scope.ename , quantity: $scope.equantity, price: $scope.eprice};
		console.log(currentObj);
		productFactory.updateProduct(currentObj);

		$location.path('/');
	}

	$scope.getEditItem = productFactory.getEditItem();
	
	$scope.editItem = function(id){
		console.log("Edit item "+ id);
		productFactory.setEditItem(id);
		$scope.getEditItem = productFactory.getEditItem();
	}
	// hardCoding
	$scope.eid = $scope.products[$scope.getEditItem].id;
	$scope.ename = $scope.products[$scope.getEditItem].name ;
	$scope.equantity = $scope.products[$scope.getEditItem].quantity;
	$scope.eprice = $scope.products[$scope.getEditItem].price;
	console.log("Edit element"+$scope.getEditItem);
}

myModule.controller('ProductController', productController);


// page controllers 
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
