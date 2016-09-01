function testController($scope, restApi) {
	console.log("In test controller");
	$scope.userLoggedIn = "not requested";
	
	// userLogin 
	$scope.login = function(){
		console.log("Clicked login");
		var userName = $scope.username;
		var password = $scope.password;
		// calling rest api
		
		restApi.login(userName,password).then(function(result){
			console.log("User is loggedIn");
			console.log("Response is " +result);
			console.log(result.data.userId);
			$scope.userLoggedIn = "Request successful and user is loggedIn";
			
		},function(err){
			console.log("There is problem in login");
			$scope.userLoggedIn = "Request unsuccefull and user is not log";
		});	
		console.log("Out of login");
	}
	
	// userSignUp
	
	$scope.register = function(){
		console.log("Clicked register");
		var regUser = {
				regFirstName : $scope.regFirstName,
				regLastName : $scope.regLastName,
				regUserName : $scope.regUserName,
				regEmail : $scope.regEmail,
				regPhone : $scope.regPhone,
				regPass : $scope.regPass,
				regConfirmPass : $scope.regConfirmPass
		}
		// calling rest api
		restApi.register(regUser).then(function(result) {			
			$scope.userLoggedIn = "Request successful and user is registered";
			
		},function(err) {
			console.log("There is problem in login");
			$scope.userLoggedIn = "Request unsuccefull and user is not registered";
		});		
		console.log("Out of login");
	}
	
	// get all the categories
	
	$scope.getAllCategories = function(){
		console.log("Clicked get all categories");
		
		restApi.getAllCategories().then(function(result) {
			console.log("Product loading is successful");
			console.log(JSON.stringify(result, null ,4));
		}, function(err) {
			console.log("Product loading is unsucceful");
		});
	}
	
}
