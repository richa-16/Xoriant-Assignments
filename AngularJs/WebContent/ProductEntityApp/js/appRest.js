var myModule = angular.module('entityApp', ['ngRoute']);
var hostName = 'http://10.20.14.83:9000';

// Factory code starts here 
function productFactory($http){
	  console.log("Run factory");
	  // factory object
	  var productFactory = {};
	  productFactory.productData = [];
	  // load all products 
	  productFactory.getAllProducts = function() {
			var url = hostName+'/product';
			$http.get(url).success(function(data, status) {
				console.log("Inside rest call");
				//console.log(data);
				angular.forEach(data, function(value, key){
					angular.forEach(data.Products, function(value, key) {
						var tempData = {id: value.id , name: value.name , quantity: value.quantity, price: value.price};
						console.log("Hey "+tempData);
						productFactory.productData.push(tempData);
					});
				})
			});
		};
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
	  return productFactory;
}
// Factory code ends here

// register factory here 
myModule.factory('productFactory', productFactory);
// inject http
productFactory.$inject = ['$http'];

// product controller
function productController($scope, productFactory, $location ,$http) {
	
	console.log("Product controller");
	
	// To load the data at initial load 
	productFactory.getAllProducts(); // Optimization , don't load data everytime we go to a particular controller
	
	// to load data onClick button 
	//$scope.getProduct = productFactory.getAllProducts;
	
	console.log("Reached outside");
	$scope.products = productFactory.productData;//[{id:1 , name:"Pratik" , quantity: 90 , price: 90}];
	
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
	}
	
	// code to update the product 
	$scope.updateProduct = function(){
	}
	
	
	//console.log("Edit element"+$scope.getEditItem);
	console.log("Path " + $location.search());
	var searchQuery = $location.search();
	console.log('Co'+searchQuery);
	
	$scope.getEditItem = parseInt(searchQuery['result']);
	
	if(!isNaN($scope.getEditItem)){
		// hardCoding
		$scope.eid = $scope.products[$scope.getEditItem-1].id;
		$scope.ename = $scope.products[$scope.getEditItem-1].name ;
		$scope.equantity = $scope.products[$scope.getEditItem-1].quantity;
		$scope.eprice = $scope.products[$scope.getEditItem-1].price;
		console.log("Edit element"+$scope.getEditItem-1);
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
