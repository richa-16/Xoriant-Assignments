function imageDirective($parse) {
	console.log("Inside custome directive");
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
    	  console.log("Inside a custome direcive function");
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
            	 console.log("Running this");
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
}

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