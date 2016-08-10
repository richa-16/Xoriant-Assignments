function renderUi(){
	console.log("In render Ui");
	// render footer
	checkLogin();
}
function checkLogin(){
	if(sessionStorage.loggeIn == 1){
		console.log("User is logged In");
	}else{
		console.log("User is not loggedIn")
	}
}

function loginUser(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	
	if (typeof(Storage) !== "undefined") {
	    // Store
		var count = localStorage.getItem("countUsers");
		var x =1;
		var login = 0;
		for(x =1 ; x <=count ; x++){
			var user = localStorage.getItem(1);
			var uName = user[0];
			var uPass = user[1];
			if(uName == username && uPass == password) {
				// if password and username is matching then break 
				login = 1;
			}
		}
		if(login == 1){
			sessionStorage.loggeIn = 1;
			window.history(0);
		}else{
			alert("Wrong username and password");
			//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
		}
		//localStorage.setItem("countUsers", "Smith");
	    // Retrieve
	    
	} else {
	    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}	
}

function registerUser(){
	
}