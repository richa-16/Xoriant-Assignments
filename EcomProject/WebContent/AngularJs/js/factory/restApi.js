function restApi( $q , $rootScope){
	console.log("Rest api Initiated");
	var restApi = {};

	restApi.login=function(key, password){
		
			var defer=$q.defer();
		
			$.ajax({
		        type: "POST",
		        url: 'http://10.20.14.83:9000/login',
		        contentType: "application/json",
		        data : JSON.stringify({"userName":key , "password" : password}),
		        dataType: "json",
		        async:true,
		        success: function(data, textStatus, xhr){
		            console.log("User loggedIn");
		            defer.resolve(data);
		        },
		        error: function(data, textStatus, xhr){
		        	console.log("User is not loggedOut, some error");
		            defer.reject(data);
		        },
		        timeout: 15000 
		    });
		    
			return defer.promise;
	};
	
	// register api
	restApi.register = function(regUser){
	    
		var defer=$q.defer();
	    
		$.ajax({
	        type: "POST",
	        url: 'http://10.20.14.83:9000/register',
	        contentType: "application/json",
	        data : JSON.stringify({"firstName": regUser.regFirstName,
	        					    "lastName": regUser.regLastName,
	        					    "userName" : regUser.regUserName,
	        					    "password": regUser.regPass,
	        					    "email": regUser.regEmail,
	        					    "phone": regUser.regPhone}),
	        dataType: "json",
	        async:true,
	        success: function(data, textStatus, xhr){
	            console.log("User registered succesfully");
	            defer.resolve(data);
	        },
	        error: function(data, textStatus, xhr){
	        	console.log("User is not registered, some error");
	            defer.reject(data);
	        },
	        timeout: 15000 
	    });
	    
		return defer.promise;
	};
	
	// getAllCategories
	restApi.getAllCategories = function(){
	    
		var defer = $q.defer();
	    
		$.ajax({
	        type: "GET",
	        url: 'http://10.20.14.83:9000/categories',
	        contentType: "application/json",
	        async:true,
	        success: function(data, textStatus, xhr){
	            console.log("Got all the categories");
	            defer.resolve(data);
	        },
	        error: function(data, textStatus, xhr){
	        	console.log("Problem in getting cateogies");
	            defer.reject(data);
	        },
	        timeout: 15000 
	    });
		return defer.promise;
	};
	
	
	
	return restApi;
	
}