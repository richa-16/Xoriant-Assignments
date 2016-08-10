function loadTest(){
	console.log("Reached here ");
	var para = document.getElementById('ans');
	// localstorage 
	
	printUsers();
	
	var data = document.createElement("p");
	data.innerHTML = "sOMETHING";
	para.appendChild(data);
	
}

function printUsers(){
	var countUsers = localStorage.getItem("countUsers");
	console.log("Count users" + countUsers);
	var i = 0; 
	for(i = 1; i<=countUsers;i++){
		var userObj = JSON.parse(localStorage.getItem(i));
		console.log("Username "+userObj[0].username);
		console.log("Password "+userObj[0].password);
	}
}