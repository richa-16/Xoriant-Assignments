// Total classes 
// User class 
// Post class
// Category class 
// UserSearch class
// Message class
// Admin class

// Create global variables 
var DB = new Database();

//
// User class starts here  
function User(){
	this.id = 1;
	this.name = "name";
	this.email = "example@gmail.com";
	this.phone = "7588948588";
	this.address = "xyz at pune";
	// current date
	this.joinedDate = "";
	this.userName = "userName";
	this.password = "password";
	this.previousPassword = "previousPassword";
	this.profilePic = "imageUrl";
}

// Generate getters and setters for the USER object 
// id
User.prototype.setId = function(id){
	this.id = id;
}
User.prototype.getId = function(){
	return this.id;
}
// name 
User.prototype.setName = function(name){
	this.name = name;
}

User.prototype.getName = function(){
	return this.name;
}
// email
User.prototype.setEmail = function(email){
	this.email = email;
}

User.prototype.getEmail = function(){
	return this.email;
}
// phone
User.prototype.setPhone = function(phone){
	this.phone = phone;
}

User.prototype.getPhone = function(){
	return this.phone;
}

// address
User.prototype.setAddress = function(address){
	this.address = address;
}

User.prototype.getAddress = function(){
	return this.address;
}

// joinedDate
User.prototype.setJoinedDate = function(joinedDate){
	this.joinedDate = joinedDate;
}

User.prototype.getJoinedDate = function(){
	return this.joinedDate;
}
// userName
User.prototype.setUserName = function(userName){
	this.userName = userName;
}

User.prototype.getUserName = function(){
	return this.userName;
}
// password 
User.prototype.setPassword = function(password){
	this.password = password;
}

User.prototype.getPassword = function(){
	return this.password;
}
// previousPassword
User.prototype.setPreviousPassword = function(previousPassword){
	this.previousPassword = previousPassword;
}

User.prototype.getpreviousPassword = function(){
	return this.previousPassword;
}
// profilePic
User.prototype.setProfilePic = function(profilePic){
	this.profilePic = profilePic;
}

User.prototype.getProfilePic = function(){
	return this.profilePic;
}
// GETTERS AND SETTERS ENDS HERE FOR USER MODEL

User.prototype.getUserCount = function (){
	
	var userCount = DB.getUserCount();// 
	return userCount;
}

User.prototype.login = function(){
	
	var userName = document.getElementById('username').value;
	var userPassword = document.getElementById('password').value;
	// write logic for login 

	if (typeof(Storage) !== "undefined") {
	    // Store
		var count = DB.getUserCount();
		console.log("Count users "+count);
		
		var x = 1;
		var login = 0;
		// store userId in sessionStorage as well 
		var userId = 0;
		var userName = 0;
		for(x = 1; x <count ; x++){
			var userIdString = "u"+x;
			console.log("UserId " + userIdString);
			var user = JSON.parse(localStorage.getItem(userIdString));
			var uName = user.getUsername();
			var uPass = user.getPassword();
			
			console.log("User name " +uName);
			console.log("User password " +uPass);
			
			if(username==uName && password==uPass) {
				// if password and username is matching then break 
				console.log("LoggedIN");
				login = 1;
				userId = "u"+x;
				userName = user.name;
				break;
			}
		}
		if(login == 1){
			// store as many variables as we want to store 
			// in session storage 
			sessionStorage.loggeIn = 1;
			sessionStorage.userId = userId;
			sessionStorage.userName = userName;
			location.reload();
		}else{
			console.log("Not loggedIn");
			// Instead of aleart show message on top 
			// that wrong username and password 
			alert("Wrong username and password");
			//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
		}
		//localStorage.setItem("countUsers", "Smith");
	    // Retrieve
	} else {
	    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}	
}

User.prototype.registerUser = function(){
	
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
	// Checking for validation
	
	//localStorage.clear();
	console.log("In register User");
	var count = DB.getUserCount();
	
	console.log("Count "+count);
	var userObj = new User();
	userObj.setId(id);
	userObj.setEmail(email);
	userObj.setName(name);
	userObj.setUserName(username);
	userObj.setPassword(password);
	userObj.setPhone(contact);
	/*
	var userArray = [{
		name: name,
		email: email,
		contact: contact,
		username: username,
		password: password
	}];
	*/
	var userUniqueId = "u"+count;
	localStorage.setItem(userUniqueId , JSON.stringify(userObj));
	localStorage.setItem("userCount", count);
	
	console.log("User is registered ");
	
	// close current modal 
	document.getElementById('signUp').style.display='none';
	
	var userTestObject = JSON.parse(localStorage.getItem(userUniqueId));
	console.log("output the object " + userTestObject.getUserName());
	console.log("output the object " + userTestObject.userName);
	console.log("User registered successfully");

}

// check whether user is loggedIn or not
User.prototype.isUserLoggedIn = function(){
	var userLoggedIn = sessionStorage.loggeIn;
	console.log("userLoggedIn "+userLoggedIn);
	return userLoggedIn;
}

// check whether user is already present or not 
// by checking it's email address 
User.prototype.isUserPresent = function(){
	
}

// logout the user 
User.prototype.logout = function(){
	sessionStorage.loggeIn = 0;
	console.log("userLoggedIn "+userLoggedIn);
	refreshPage();
}

// delete user Account
User.prototype.deleteUserAccount = function(){
	
}

// Change user settings 
User.prototype.changeUserSettings = function(){
	
}


// Local storage functions 

// User class ends here 


// LocalStorage class 
function Database(){
	
}

// functions for userClass starts here 
// get the userCount
Database.prototype.getUserCount = function(){
	var count = localStorage.getItem("userCount");
	var userCount = Number(count);
	// increment userCount
	userCount++;
	console.log("User count" + userCount);
	return userCount;
}

// functions for post class starts here 


// Page redirections 
function refreshPage(){
	location.reload();
}