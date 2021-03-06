function userProfileController($scope, $rootScope, restApi,appFactory , fileReader,$window ,$location){
	console.log("User Profile controller started");
	//var userId = $rootScope.userId;
//	/var authToken = $rootScope.authToken;
	$scope.categoryData = [];
	console.log("Category data " + $scope.categoryData);
	$scope.productData =[];
	// get ads of the user
	
	displayResults();
	getAllCategories();
	
	$scope.addPost = function(){
		console.log("Post add clicked ");
		$rootScope.showDeleteAlert = true;
		//console.log($scope.postImage);
		//alert($scope.userLoggedIn);
		var postAdsModel = {
					authToken : $window.localStorage.getItem('authToken'),//$rootScope.authToken, //"57c9051c0272287e33b06de0",//$scope.authToken,
					title : $scope.postTitle,
					userName : $window.localStorage.getItem('userId'),
				    category : $scope.categorySelected,
				    description : $scope.postDescription,
				    photoCount: 1,//$scope.postPhotoCount,
				    photo1: $scope.postImage,
				    price: $scope.postPrice
				    // photo2: $scope.postPhoto2,
				   // photo3: $scope.postPhoto3
				};
		// rest call 
		//console.log("Post add model " + JSON.stringify(postAdsModel,null,4));
		restApi.postAds(postAdsModel).then(function(result){
			//console.log("Post added succesfully");
			//console.log(JSON.stringify(result));
			//$scope.imageSrc = result.
			$rootScope.DeleteMessage = "Post added !!!";
			$location.path("/userProfile");
		}, function(err){
			$rootScope.DeleteMessage = "Error in adding post !!!";
			console.log("Error in adding post");
		});
	}
	//Delete post 
	$scope.deletePost = function(postId,indexOfArray){
		$scope.showDeleteAlert = true;
		console.log("Delete button clicked");
		console.log("Delete id "+postId);
		restApi.deleteUserPost(postId).then(function(result){
			console.log("Post has been deleted");
			//console.log(JSON.stringify(result, null,4));
			$scope.DeleteMessage = "Post has been deleted !!!";
			// optimize this delete 
			deleteFromProduct(indexOfArray);
			//displayResults();
		}, function(err){
			console.log("Error in deleting post ");
			$scope.DeleteMessage = "Error In post delete !!!";
		});
	}
	
	$scope.hideMehideMessage = function(){
		$scope.showDeleteAlert = false;
	}
	
	$scope.getFile = function () {
        console.log("Get file function got called");
		$scope.progress = 0;		
		//console.log("Output "+$scope.postImage);
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
    
    function displayResults(){
    	console.log("Network ");
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
    			//console.log(JSON.stringify(value.replies,null,4));
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
    }
    function deleteFromProduct(index){
    	console.log("Delete only that particular product "+index);
    	$scope.productData.splice(index-1,1);
    }
    function getAllCategories(){
    	// redundent
    	restApi.getAllCategories().then(function(result){
    		  //console.log(JSON.stringify(result,null,4));
    		  var totalCategories = result.data.itemList;
    		  // Implemented forEach 
    		  var tempData = [];
    		  angular.forEach(totalCategories, function(value,key){
    			  var name = value.name;
    			  var id = value.id;
    			  var catObj = {'name' : name , 'id': id};
    			  tempData.push(catObj);
    			  //$scope.categoryData.push(catObj);
    		  });
    		  // AngularJs method to match the data and replace content if any change
    		  angular.extend($scope.categoryData,tempData);
    		  
    	}, function(error){
    		// Handle the server errors
    	});
    	
    }
}