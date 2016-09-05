function loginController($scope,restApi,$location, $window,$rootScope) {
	//console.log("In login controller");
	//$scope.userLoggedIn = "";
	// userLogin 
	$scope.login = function(){
		//console.log("Clicked login");
		var userName = $scope.username;
		var password = $scope.password;
		// calling rest api
		restApi.login(userName,password).then(function(result){
			//console.log("User is loggedIn");
			//console.log("Response is " + JSON.stringify(result, null,4));
			//console.log(result.data.userId);
			//$scope.userLoggedIn = "Request successful and user is loggedIn";
			// Store userInformation in localStorage of angularJS $window service 
			var authToken = result.data['auth-token'];
			var userId = result.data.userId;
			//console.log("Auth token " + authToken +" UserId "+ userId);
			$window.localStorage.setItem('authToken', authToken);
			$window.localStorage.setItem('userId', userId);
			// set the header as loggedIn
			
			$rootScope.userLoggedIn = true;
			$rootScope.userId = userId;
			$location.path("/");
		},function(err){
			//console.log("There is problem in login");
			//$scope.userLoggedIn = "Request unsuccefull and user is not log";
		});	
		//console.log("Out of login");
	}
	
	// userSignUp
	
	$scope.register = function(){
		//console.log("Clicked register");
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
			//$scope.userLoggedIn = "Request successful and user is registered";		
		},function(err) {
			//console.log("There is problem in login");
			//$scope.userLoggedIn = "Request unsuccefull and user is not registered";
		});		
		//console.log("Out of login");
	}
	
	// logout 
	$scope.logout = function(){
		//console.log("logout button clicked");
		var authToken = $window.localStorage.getItem('authToken');
		restApi.logout(authToken).then(function(result){
			//console.log("Logged out succefully");
			$window.localStorage.clear();
			$rootScope.userLoggedIn = false;
			$rootScope.userId = null;
			
		},function(err){
			//console.log("User logout unsuccessful");
		});
		//console.log("Logged out succefully");
	}
	
}
