function homeController($scope,appFactory,restApi,$rootScope) {
	//console.log("In home controller");
	// get all the categories
	$scope.previous = false;
	$scope.next = true;
	$scope.startIndex = 0;
	$scope.showSlider = true;
	// initially this should be false
	$scope.viewDetails = false;
	$scope.showResult = true;
	$scope.showPagination = true;
	
	
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
		  appFactory.setCategoryData($rootScope.categoryData);
	}, function(error){
		// Handle the server errors
	});
	
	// Get the latest product from server
	// We could accept this data in object model from models.js 

	getAllProductsForPagination($scope.startIndex);
	
	$scope.nextPage = function(){
		console.log("Clicked next page");
		$scope.startIndex++;
		var pageIndex = $scope.startIndex;
		console.log("page Index "+ pageIndex);
		getAllProductsForPagination(pageIndex);
	}
	$scope.previousPage = function(){
		console.log("Clicked previous page");
		var pageIndex = $scope.startIndex;
		$scope.startIndex--;
		console.log("page Index "+ pageIndex);
		getAllProductsForPagination(pageIndex);
	}
	// advanced search functionality 
	$scope.searchProduct = function(){
		hideOtherViews(true);
		$scope.showSlider = false;
		$scope.startIndex = 0;
		console.log("Clicked Search button");
		getAllProductsForPagination($scope.startIndex);
	}

	function displayResults(result){
		console.log("In display result");
		$scope.testData = result;//JSON.stringify(result,null,4); // to print Json in pretty format
		var productLoop = result.data.advertiseList;
		var tempArray = [];
		angular.forEach(productLoop, function(value, key){	
			// Hard coding
			var imageName = '';//'data:image/jpeg;base64,' + value.photos[0];
			
			if(value.photos != null){
				 imageName = 'data:image/jpeg;base64,' + value.photos[0];
			}else{
				 // getting this image from outer image folder
				 imageName = './img/not.png';
			}
			var categoryName = value.category;
			var price = value.price;
			var title = value.title;
			var postId = value.id;
			var description = value.description;
			var status = value.status;
			
			var date = new Date(value.createdDate);
			var createdDate = date.toUTCString();//value.createdDate;
			var date = new Date(value.lastUpdatedDate);
			
			var lastUpdatedDate = date.toString("MMM dd");
			var replies = value.replies;
			var isOwnerOfAd = value.isOwnerOfAd;
			var replyCount = value.replyCount;
			var postedUsername = value.name;
			var postedUserId = value.userId;
			
			// extra field like created date , lastUpdateDate etc
			var tempData = {
					'imageName': imageName,
					'categoryName': categoryName,
					'price': price,
					'title':title,
					'postId':postId,
					'description':description,
					'status':status,
					'createdDate': createdDate,
					'lastUpdatedDate':lastUpdatedDate,
					'replies':replies,
					'isOwnerOfAd':isOwnerOfAd,
					'replyCount':replyCount,
					'userPostedName': postedUsername,
					'userPostedId': postedUserId
			}
			tempArray.push(tempData);
		});
		
		angular.extend($scope.productData, tempArray);
	}
	
	function getAllProductsForPagination(startIndex){
		
		var getSearchText = $scope.searchText;
		var getCategory = $scope.categorySelected;
		var getFilter = $scope.filterBy;
		
		var searchString = '?' + (getSearchText ? 'searchText='+getSearchText+'&' : '') + (getCategory ? 'category='+getCategory+'&' : '') + (getFilter ? 'sortBy='+getFilter+'&' : '');
		searchString += 'startIndex='+startIndex;
		console.log("query is " + searchString);
		
		restApi.masterSearch(searchString).then(function(result){
			// show previous 
			if($scope.startIndex > 0){
				$scope.previous = true;
			}else{
				$scope.previous = false;
			}
			console.log("Search successful");
			displayResults(result);	
		},function(error){
			console.log("Error");
		});
	}
	
	$scope.openViewPage = function(data){
		console.log("Open view page");
		//console.log(JSON.stringify(data,null,4));
		hideOtherViews(false);
		//showViewDetails(true);
		// get view data
		$scope.postDetails = data;
		console.log(JSON.stringify($scope.postDetails,null,4));
		console.log($scope.postDetails['price']);
	}
	
	function hideOtherViews(value){
		$scope.showSlider = value;
		$scope.showResult = value;
		$scope.showPagination = value;
		$scope.viewDetails = !value;
	}
	function showViewDetails(value){
		$scope.viewDetails = value;
	}
	
}
