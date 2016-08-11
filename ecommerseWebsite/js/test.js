function loadTest(){
	console.log("Reached here ");
	var para = document.getElementById('ans');
	// localstorage 
	
	//printUsers();
	printPosts();
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

function printPosts(){
	
	var countPosts = localStorage.getItem("postCount");
	console.log("Post count "+ countPosts);
	var count = Number(countPosts);
	console.log("Count posts" + countPosts);
	var i = 0; 
	for(i = 1; i<=countPosts;i++){
		var x = "p"+i;
		var postObj = JSON.parse(localStorage.getItem(x));
		console.log(" Post Name "+postObj[0].pName);
		console.log("Post email "+postObj[0].pEmail);
		console.log(" Select category "+postObj[0].selectCategory);
		console.log(" Image "+postObj[0].image);
	}
	
}

function clearDb(){
	console.log("Cleared database");
	localStorage.clear();
}