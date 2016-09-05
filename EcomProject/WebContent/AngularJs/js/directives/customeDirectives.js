// directive for image
function ngFileSelect(){
	  console.log("Loading custome directive");
	  return {
	    link: function($scope,el){
	      el.bind("change", function(e){
	        $scope.file = (e.srcElement || e.target).files[0];
	        $scope.getFile();
	      })      
	    }
	}
}

// directive for header
// Ng Header
function ngHeader(){
	console.log("Header directive");
	return {
		templateUrl: "pages/common/header.html",
		controller: loginController
	}
}

