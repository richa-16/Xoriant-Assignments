function userProfileController($scope, $rootScope, restApi,appFactory){
	console.log("User Profile controller started");
	$scope.productData =[];
	
	// get ads of the user
	restApi.getUserAds().then(function(result){
		//$scope.imageSrc = 'data:image\/(jpeg);base64,'+results.data.myoistList[5].photos[0];
		var productLoop = result.data.mypostList;
		//console.log(JSON.stringify(result.data.mypostList[0]));
		
		var tempArray = [];
		
		angular.forEach(productLoop, function(value, key){	
			var imageName = 'data:image/jpeg;base64,' + value.photos[key];
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
}