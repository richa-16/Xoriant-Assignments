function homeController($scope,appFactory,restApi,$rootScope) {
	//console.log("In home controller");
	// get all the categories
	$scope.previous = false;
	$scope.next = true;
	$scope.startIndex = 0;
	
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
		getAllProductsForPagination(pageIndex);
	}
	$scope.previousPage = function(){
		console.log("Clicked previous page");
		var pageIndex = $scope.startIndex;
		$scope.startIndex--;
		getAllProductsForPagination(pageIndex);
	}
	// advanced search functionality 
	$scope.searchProduct = function(){
		
		//console.log("Clicked Search button");
		
		var getSearchText = $scope.searchText;
		var getCategory = $scope.categorySelected;
		var getFilter = $scope.filterBy;
		// logic for search 
		if(getSearchText == "" || getSearchText == null ){
			if(getCategory != null){
				restApi.searchByCategory(getCategory).then(function(result){					
					displayResults(result);	
				}, function(error){
					
				});
			}
		}else{
			// redundant function 
			restApi.searchByText(getSearchText).then(function(result){					
				displayResults(result);
			}, function(error){
				
			});
		}	
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
			var createdDate = value.createdDate;
			var lastUpdatedDate = value.lastUpdatedDate;
			var replies = value.replies;
			var isOwnerOfAd = value.isOwnerOfAd;
			var replyCount = value.replyCount;
			
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
					'replyCount':replyCount
			}
			tempArray.push(tempData);
		});
		
		angular.extend($scope.productData, tempArray);
	}
	
	function getAllProductsForPagination(startIndex){
		restApi.getAllProducts(startIndex).then(function(result){
			// show previous 
			if($scope.startIndex > 0){
				$scope.previous = true;
			}else{
				$scope.previous = false;
			}
			displayResults(result);
		}, function(err){
			// handle all ther erro
		});
		
	}
	
}
