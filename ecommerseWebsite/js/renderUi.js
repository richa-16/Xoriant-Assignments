function renderUi(){
	console.log("In render Ui");
	// render footer
	checkLogin();
}
function checkLogin(){
	var selectDiv = document.getElementById('profileInfo');
	var showPostDiv = document.getElementById('showPost');
	if(sessionStorage.loggeIn == 1){
		console.log("User is logged In");
		// Need to display username here
		selectDiv.innerHTML = "<li><a type=\"button\" id=\"profileButton\"> "+sessionStorage.userName+"</a><li>";
		selectDiv.innerHTML += "<li><a type=\"button\" id=\"profileButton\" onclick=\"logout()\"> Logout </a><li>";
		showPostDiv.innerHTML = "<li><a type=\"button\" name=\"Postadd\" onclick=\"openModal('postAdd');fillCategory('postCategory');\" class=\"postButton\">"+
			  			"Post</a><li>";
	}else{
		console.log("User is not loggedIn");
	}
}

function logout(){
	sessionStorage.loggeIn = 0;
	redirectPage();
}

function redirectPage(){
	location.reload();
}