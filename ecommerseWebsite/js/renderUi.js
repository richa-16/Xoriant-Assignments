function renderUi(){
	console.log("In render Ui");
	// render footer
	checkLogin();
}
function checkLogin(){
	var selectDiv = document.getElementById('profileInfo');
	if(sessionStorage.loggeIn == 1){
		console.log("User is logged In");
		// Need to display username here
		selectDiv.innerHTML = "<li><a type=\"button\" id=\"profileButton\"> "+sessionStorage.userName+"</a><li>";
		selectDiv.innerHTML += "<li><a type=\"button\" id=\"profileButton\" onclick=\"logout()\"> Logout </a><li>";
		
	}else{
		console.log("User is not loggedIn");
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
		// store userId in sessionStorage as well 
		var userId = 0;
		var userName = 0;
		for(x =1 ; x <=count ; x++){
			var user = JSON.parse(localStorage.getItem(x));
			var uName = user[0].username;
			var uPass = user[0].password;
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
				userId = x;
				userName = user[0].name;
				break;
			}
		}
		if(login == 1){
			sessionStorage.loggeIn = 1;
			sessionStorage.userId = userId;
			sessionStorage.userName = userName;
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
	//checking the validation of fields
	if((name.length == 0) || (email.length == 0) || (contact.length == 0) || (username.length == 0) || (password.length == 0) || (confirmPass.length == 0) ){
			alert("Please enter details.");
			return;
		}		
	
	if(isNaN(contact)){
		alert("Contact number invalid.");
	}

	if(username.split(' ').length > 1){
		alert("Username should not contain white spaces.");
		return;
	}

	if(password!=confirmPass){
		alert("Passwords mismatched.");
		return;
	}

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

function logout(){
	sessionStorage.loggeIn = 0;
	redirectPage();
}

function redirectPage(){
	location.reload();
}