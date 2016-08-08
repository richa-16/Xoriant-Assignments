var countFailedLogins =0;
var username = "pratik";
var password = "something";
function Authentication(){
	var getUsername = document.getElementById('username').value;
	var getPassword = document.getElementById('password').value;
	console.log(getUsername);
	console.log(getPassword);
	var page = document.getElementById('ans');
	if(getUsername == username && password == getPassword){
		console.log("Mached")
		var ans = document.createElement("p");
		ans.innerHTML = " Login successfully "; 
		page.appendChild(ans);
	}else{
		countFailedLogins++;
		if(countFailedLogins >3){
			window.location.href='http://www.google.com';
		}else{

			alert("Wrong credentials , please try again ");
		}
	}
}