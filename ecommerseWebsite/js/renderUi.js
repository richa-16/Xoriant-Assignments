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

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	
	if (typeof(Storage) !== "undefined") {
	    // Store
		var count = 0;
		str_count = localStorage.getItem("countUsers");
		count = parseInt(str_count);
		console.log("Count users "+count);
		
		
		var x =1;
		var login = 0;
		for(x =1 ; x <=count ; x++){
			var user = JSON.parse(localStorage.getItem(x));
			var uName = user[0].username;
			var uPass = user[0].username;
			console.log("Id "+x+" : User name " +uName);
			console.log("Id "+x+" : User password " +uPass);
			var uCheck = username.localeCompare(uName);
			var pCheck = password.localeCompare(uPass);
			console.log(uCheck);
			console.log(pCheck);
			if(username==uName && password==uPass) {
				// if password and username is matching then break 
				console.log("LoggedIN");
				login = 1;
				break;
			}
		}
		if(login == 1){
			sessionStorage.loggeIn = 1;
			location.reload();
		}else{
			console.log("Not loggedIn");
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
	var name = document.getElementById('uname').value;
	var email = document.getElementById('uEmail').value;
	var contact = parseInt(document.getElementById('uContact').value);
	var username = document.getElementById('rusername').value;
	console.log("Username "+username);
	
	var password = document.getElementById('rpassword').value;
	var confirmPass = document.getElementById('uConfirmPass').value;
	//localStorage.clear();
	console.log("In register User");
	var count = 0;
	var str_count =localStorage.getItem("countUsers");
	
	if (str_count == null || str_count == "null"){
	      count = 0;
	    } else {
	      count = parseInt(str_count);
	 } // end if
	    //increment count
	count++;
	console.log("Count "+count);
	//count = count + 1;
	console.log("Count "+count);
	
	var userArray = [{
		name: name,
		email: email,
		contact: contact,
		username: username,
		password: password
	}];
	
	localStorage.setItem(count , JSON.stringify(userArray));
	localStorage.setItem("countUsers", count);
	
	console.log("User is registered ");
	alert("Registered Successfully");
	// close current modal 
	document.getElementById('signUp').style.display='none';
	count = count + 1;
	console.log("Last count "+ count);
}

