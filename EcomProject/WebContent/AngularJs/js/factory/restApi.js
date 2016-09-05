function restApi( $q , $rootScope) {
	var baseUrl = "http://124.124.83.165:9000"; //'http://10.20.14.83:9000'
	console.log("Rest api Initiated");
	var restApi = {};

	restApi.login=function(key, password){
			var defer=$q.defer();
			$.ajax({
		        type: "POST",
		        url: baseUrl +'/login',
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
	        url: baseUrl +'/register',
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
	
	// logout (untested)
	restApi.logout = function(authToken){
	    // get authToken using local storage of windows.localstorage api
		var defer=$q.defer();
	
		$.ajax({
	        type: "DELETE",
	        url: baseUrl +'/logout',
	        headers: { 'auth-token': authToken },
	        async:true,
	        success: function(data, textStatus, xhr){
	            console.log("User logout successfully");
	            console.log("data" + data);
	            console.log("textStatus" + textStatus);
	            console.log("xhr" + JSON.stringify(xhr,null,4));
	            defer.resolve(data);
	            
	        },
	        error: function(data, textStatus, xhr){
	        	console.log("User logout unsuccsefull");
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
	        url: baseUrl +'/categories',
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
	
	// get all products
	restApi.getAllProducts = function(){
		console.log("Inside the getAll Product");
		var defer = $q.defer();
		$.ajax({
			type:"GET",
			url: baseUrl +'/posts/search',
			async:true,
			success:function(data,textStatus,xhr){
				console.log("Get all the products");
				defer.resolve(data);
			},
			errr: function(data,textStatus,xhr){
				console.log("Error in getting all products");
				defer.reject(data);
			},
			timeout: 15000
		});
		return defer.promise;
	}
	
	// post ads for particular user 
	
	restApi.postAds = function(postAdsModdel){
		
		var defer=$q.defer();
		console.log( "Base 64" +postAdsModdel.photo1);
		$.ajax({
	        type: "POST",
	        url: baseUrl +'/postAd',
	        contentType: "application/json",
	        headers: {
	        		'Content-Type' : 'application/json',
	        		'Access-Control-Allow-Origin': baseUrl ,
	        		'auth-token': postAdsModdel.authToken 
	        	},
	        data : JSON.stringify({"title": postAdsModdel.title,
	        					    "name": postAdsModdel.userName,
	        					    "category" : postAdsModdel.category,
	        					    "description": postAdsModdel.description,
	        					    "photoCount": postAdsModdel.photoCount,
	        					    "photo1": postAdsModdel.photo1
	        					    //"photo2": postAdsModdel.photo2,
	        					    //"photo3": postAdsModdel.photo3
	        					}),
	        dataType: "json",
	        async:true,
	        success: function(data, textStatus, xhr){
	            console.log("Post added succefully into database");
	            defer.resolve(data);
	        },
	        error: function(data, textStatus, xhr){
	        	console.log("Error in adding post into database");
	            defer.reject(data);
	        },
	        timeout: 15000 
	    });
	    
		return defer.promise;
	}
	
	// read all the advertisement posted by loggedIn user
	restApi.getUserAds = function(){
		
		var defer=$q.defer();
		$.ajax({
	        type: "GET",
	        url: baseUrl +'/posts',
	        contentType: "application/json",
	        headers: {
	        		'Content-Type' : 'application/json',
	        		'Access-Control-Allow-Origin': baseUrl ,
	        		'auth-token': $rootScope.authToken 
	        	},
	        dataType: "json",
	        async:true,
	        success: function(data, textStatus, xhr){
	            defer.resolve(data);
	        },
	        error: function(data, textStatus, xhr){
	            defer.reject(data);
	        },
	        timeout: 15000 
	    });
		return defer.promise;
	}

	
	
	return restApi;
	
}