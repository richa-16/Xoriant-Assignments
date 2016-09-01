var myModule = angular.module('entityApp', ['ngRoute']);
var hostName = 'http://10.20.14.83:9000';

// Factory code starts here 
function productFactory($http){
	  
	console.log("Run factory");
	  // factory object
	  var productFactory = {};
	  productFactory.productData = [];
	  
	  // make this file as a singleton pattern 
	  // load all products 
	  productFactory.getAllProducts = function() {
		    //productFactory.productData = [];
			var url = hostName+'/product';
			$http.get(url).success(function(data, status) {
				console.log("Inside rest call");
				//console.log(data);
				angular.forEach(data, function(value, key){
					angular.forEach(data.Products, function(value, key) {
						var tempData = { id: value.id, name: value.name, quantity: value.quantity, price: value.price};
						console.log("Hey " + tempData.id);
						productFactory.productData.push(tempData);
					});
				});
			});
		};
		
		// add product 
		productFactory.addProduct = function(productName,productPrice,productQuantity) {
			$http({
				method : 'POST',
				url : hostName+'/product',
				headers : {
					'Content-Type' : 'application/json',
					'Access-Control-Allow-Origin': hostName
					
				},
				data : {
					name : productName,
					price : productPrice,
					quantity : productQuantity
				}
			}).then(function successCallback(response) {
				console.log("Response "+response);
				var data = response.data.Product; 
				console.log(data);
				if (response.data.Product.id != null) {
					var tempData = {id: data.id, name:data.name, quantity: data.quantity,price:data.price};
					
					return tempData;
				} else {
					alert('product NOT created');
				}		
			}, function errorCallback(response) {
				alert("Server Error. Try After Some time: " + response);
				console.log("Server is busy , please try latter");
			});
		}
		// delete product 
		productFactory.deleteProduct = function(id){
			$http({
				method : 'DELETE',
				url : hostName+'/product/'+id,
				headers : {
					'Content-Type' : 'application/json',
					'Access-Control-Allow-Origin': hostName
				},
				
			}).then(function successCallback(response) {
				console.log("Response "+response);		
			}, function errorCallback(response) {
				alert("Server Error. Try After Some time: " + response);
				console.log("Server is busy , please try latter");
			});
		}
		
		productFactory.updateProduct = function(id,name,price,quantity){
			$http({
				method : 'PUT',
				url : hostName+'/product/'+id,
				headers : {
					'Content-Type' : 'application/json',
					'Access-Control-Allow-Origin': hostName
				},
				data : {
					name : name,
					price : price,
					quantity : quantity
				}
			}).then(function successCallback(response) {
				console.log("Response "+response);		
			}, function errorCallback(response) {
				alert("Server Error. Try After Some time: " + response);
				console.log("Server is busy , please try latter");
			});
		}
	  return productFactory;
}
// Factory code ends here

// register factory here 
myModule.factory('productFactory', productFactory);
// inject http
productFactory.$inject = ['$http'];

// product controller
function productController($scope, productFactory, $location ,$http) {
	console.log("Product controller started");
	// To load the data at initial load 
	console.log("Get all the products first");
	
	// should run only when the data is changed starts here
	productFactory.getAllProducts(); // Optimization , don't load data everytime we go to a particular controller
	// to load data onClick button 
	//$scope.getProduct = productFactory.getAllProducts;
	console.log("Reached outside");
	$scope.products = productFactory.productData;//[{id:1 , name:"Pratik" , quantity: 90 , price: 90}];
	// should run only when the data is changed starts ends
	// productFactory.getProducts();
	console.log("Something "+$scope.products);
	// code to add product
	$scope.addProduct = function() {
		// temp variables 
		var name = $scope.name;
		var quantity = $scope.quantity;
		var price = $scope.price;
		// make http request
		var getResponse = productFactory.addProduct(name, price, quantity);
		// display results 
		console.log("Display add results " + getResponse);
		// append this added result to the product list
		//$scope.products.push(getResponse);
	}
	
	// code to delete the product
	$scope.deleteProduct = function(id) {
		console.log("Delete Id "+ id);
		productFactory.deleteProduct(id);
	}
	
	// code to update the product 
	$scope.updateProduct = function(id){
		console.log("Update function "+ id);
		// update request 
		productFactory.updateProduct($scope.eid, $scope.ename, $scope.eprice , $scope.equantity);
		
	}
	
	
	//console.log("Edit element"+$scope.getEditItem);
	console.log("Path " + $location.search());
	var searchQuery = $location.search();
	console.log('Co'+searchQuery);
	
	$scope.getEditItem = parseInt(searchQuery['result']);
	console.log("Get edit Item " + $scope.getEditItem);
	
	if(!isNaN($scope.getEditItem)){
		// hardCoding
		console.log("In edit Item");
		$scope.eid = $scope.products[$scope.getEditItem].id;
		$scope.ename = $scope.products[$scope.getEditItem].name ;
		$scope.equantity = $scope.products[$scope.getEditItem].quantity;
		$scope.eprice = $scope.products[$scope.getEditItem].price;
		console.log("Edit element"+$scope.getEditItem);
		console.log("Path " + $location.search());
	}
	
	$scope.editItem = function(id){
		console.log("inside editItem " + id);
		$location.path('/editProduct/').search('result',''+id);	
	}
	
	$scope.passParameters = function(){
		console.log("inside paramters");
		$location.path('/editProduct/').search('result','s');
		//console.log("Hey"+k);
	}
	
	$scope.getParameters = function(){
		var x = $location.search();
		console.log(x['result']);
	}
}

myModule.controller('ProductController', productController);

// page controllers 
myModule.config(function($routeProvider){
	console.log("Run first Time");
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
