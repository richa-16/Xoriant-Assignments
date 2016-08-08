var randomElements = new Array();

function Sort(){
	var getSort = document.getElementById('sort').value;
	console.log(getSort);
	var page = document.getElementById('ans');

	if(getSort=="asce"){
		randomElements.sort(function(a, b){return a-b});
	}
	if(getSort=="desc"){
		randomElements.sort(function(a, b){return b-a});
	}
	
	DisplayAnswer();
}

function DisplayElements(){
	var str = " ";
	var i =0;
	for(i = 0; i< 10; i++){
		randomElements[i] = parseInt(Math.random()*100);
		str += " "+randomElements[i];
	}

	var page = document.getElementById('ans');
	var addElement = document.createElement("p");
	addElement.innerHTML = "Numbers are " +str.toString();
	page.appendChild(addElement);
}

function DisplayAnswer(){
	var str = " ";
	var i =0;
	for(i = 0; i< 10; i++){
		//randomElements[i] = parseInt(Math.random()*100);
		str += " "+randomElements[i];
	}

	var page = document.getElementById('ans');
	var addElement = document.createElement("p");
	addElement.innerHTML = "Numbers are " +str.toString();
	page.appendChild(addElement);

}