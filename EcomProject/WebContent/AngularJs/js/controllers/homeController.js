function homeController($scope,appFactory,restApi,$rootScope) {
	//console.log("In home controller");
	// get all the categories
	$scope.testData= '';
	$rootScope.categoryData = []; // scope for categoryList
	$scope.productData = [];
	// Avoid calling this activity multiple times 
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
		  angular.extend($rootScope.categoryData,tempData);
	}, function(error){
		// Handle the server errors
	});
	
	// Get the latest product from server
	// We could accept this data in object model from models.js 
	restApi.getAllProducts().then(function(result){
		$scope.testData = result;//JSON.stringify(result,null,4); // to print Json in pretty format
		var productLoop = result.data.advertiseList;
		var tempArray = [];
		angular.forEach(productLoop, function(value, key){	
			// Hard coding
			var imageName = '';//'data:image/jpeg;base64,' + value.photos[0];
			
			if(value.photos != null){
				 imageName = 'data:image/jpeg;base64,' + value.photos[0];
			}
			
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
		
	}, function(err){
		// handle all ther erro
		
	});
	
	$scope.searchProduct = function(){
		console.log("Clicked Search button");
		var getSearchText = $scope.searchText;
		var getCategory = $scope.categorySelected;
		var getFilter = $scope.filterBy;
		
		// now as per the requirement , search the products 
		console.log("Search "+ getSearchText);
		console.log("getCategory "+ getCategory);
		console.log("getFilter "+ getFilter);
	}
	
}
