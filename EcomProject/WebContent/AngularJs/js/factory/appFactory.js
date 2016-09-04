function appFactory($rootScope,$window){
	console.log("App factory initiated");
	var appFactory = {};
	
	var userLoggedIn = false;
	
	// private function 
	// Not accessible by any Js file
	
	
	// get auth-Token of user 
	$rootScope.authToken = $window.localStorage.getItem("authToken");
	console.log("Auth-token "+$rootScope.authToken);
	// get userId of user 
	$rootScope.userId = $window.localStorage.getItem("userId");
	console.log("UserId" + $rootScope.userId);
	if($rootScope.authToken != null && $rootScope.userId != null){
		$rootScope.userLoggedIn = true;		
	}else{
		$rootScope.userLoggedIn = false;
	}
	// check whether user is loggedIn or not 
	console.log($rootScope.userLoggedIn);
	
	return appFactory; 
}