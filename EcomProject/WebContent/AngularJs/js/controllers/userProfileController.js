function userProfileController($scope, $rootScope, restApi,appFactory , fileReader,$window ,$location){
	console.log("User Profile controller started");
	//var userId = $rootScope.userId;
//	/var authToken = $rootScope.authToken;
	$scope.productData =[];
	// get ads of the user
	restApi.getUserAds().then(function(result){
		//$scope.imageSrc = 'data:image\/(jpeg);base64,'+results.data.myoistList[5].photos[0];
		var productLoop = result.data.mypostList;
		//console.log(JSON.stringify(result.data.mypostList[0]));
		var tempArray = [];
		angular.forEach(productLoop, function(value, key){	
			var imageName = 'data:image/jpeg;base64,' + value.photos[0];
			var categoryName = value.category;
			var price = value.price;
			var title = value.title;
			var postId = value.id;
			var description = value.description;
			var status = value.status;
			// extra field like created date , lastUpdateDate etc
			var tempData = {
					'imageName': imageName,
					'categoryName': categoryName,
					'price': price,
					'title':title,
					'postId':postId,
					'description':description,
					'status':status
			}
			tempArray.push(tempData);
		});
		
		angular.extend($scope.productData, tempArray);
		//console.log(JSON.stringify(result,null,4));
	}, function(err){
		console.log("error in retriving the data");
	});
	

	$scope.addPost = function(){
		console.log("Post add clicked ");
		//console.log($scope.postImage);
		//alert($scope.userLoggedIn);
		var postAdsModel = {
					authToken : $window.localStorage.getItem('authToken'),//$rootScope.authToken, //"57c9051c0272287e33b06de0",//$scope.authToken,
					title : $scope.postTitle,
					userName : $window.localStorage.getItem('userId'),
				    category : $scope.categorySelected,
				    description : $scope.postDescription,
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
			$location.path("/userProfile");
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
                    	  //alert($scope.postImage);
                          //alert(result);
                    	  $scope.imageSrc = 'data:image/jpeg;base64,'+$scope.postImage ;
                          //$scope.imageSrc = result;

                      });
        
    };
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
 
	
}