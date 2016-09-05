function testController($scope, appFactory,restApi,fileReader,$rootScope) {
	console.log("In test controller");
	$scope.userLoggedIn = "not requested";
	$scope.postImage = "";
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
	
	// logout 
	$scope.logout = function(){
		console.log("logout button clicked");
		var authToken = $scope.authToken;
		restApi.logout(authToken).then(function(result){
			console.log("Logged out succefully");
		},function(err){
			console.log("User logout unsuccessful");
		});
		console.log("Logged out succefully");
	}
	
	// get all products
	$scope.getAllProducts = function(){
		console.log("Clicked Get all products");
		restApi.getAllProducts().then(function(results){
			//console.log(JSON.stringify(results, null, 4));
			//console.log("Actual content "+results.data.advertiseList[2].photos[0]);
			console.log("Display");
			$scope.imageSrc = 'data:image\/(jpeg);base64,'+results.data.advertiseList[5].photos[0];
			
		}, function(err){
			console.log("error " + JSON.stringify(err, null, 4));
		});	
	}
	
	$scope.postAds = function(){
		console.log("Post add clicked ");
		console.log($scope.postImage);
		//alert($scope.userLoggedIn);
		var postAdsModel = {
					authToken : $rootScope.authToken, //"57c9051c0272287e33b06de0",//$scope.authToken,
					title : "Image with string",//$scope.postTitle,
					userName : "pratik",//$scope.postUser,
				    category : "Hardware",//$scope.postCategory,
				    description : "Something",//$scope.postDescription,
				    photoCount: 1,//$scope.postPhotoCount,
				    photo1: $scope.postImage
				   // photo2: $scope.postPhoto2,
				   // photo3: $scope.postPhoto3
				};
		// rest call 
		restApi.postAds(postAdsModel).then(function(result){
			console.log("Post added succesfully");
			console.log(JSON.stringify(result));
			//$scope.imageSrc = result.
		}, function(err){
			console.log("Error in adding post");
		});
		
		
	}
	$scope.getFile = function () {
        console.log("Get file function got called");
		$scope.progress = 0;
		
		console.log("Output "+$scope.postImage);
		fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                    	  //$scope.postImage = result.replace(/^data:image\/(jpeg);base64,/, "") ||  result.replace(/^data:image\/(jpg);base64,/, "") ;
                    	  $scope.postImage = result.replace(/^data:image\/(png);base64,/, "") ||  result.replace(/^data:image\/(jpg);base64,/, "") || result.replace(/^data:image\/(jpeg);base64,/, "") ||  result.replace(/^data:image\/(jpeg);base64,/, "");
                    	  alert($scope.postImage);
                          alert(result);
                    	  $scope.imageSrc = 'data:image/jpeg;base64,'+$scope.postImage ;
                          //$scope.imageSrc = result;

                      });
        
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
 
}
