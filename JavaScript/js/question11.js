function VowelsCounter(){
	var getInput = document.getElementById('inputSentence').value;
	getInput = new String(getInput);
	getInput = getInput.toLowerCase();
	var length = getInput.length;
	// Create checker 
	var checker = new Array();
	checker[0] = "a";
	checker[1] = "e";
	checker[2] = "i";
	checker[3] = "o";
	checker[4] = "u";
	
	var answer = new Array();
	var i = 0; 
	for(i = 0 ; i< 5; i++){
		answer[i] =0;
	}
	
	for(i = 0; i< length;i++){
		var current = getInput.charAt(i);
		console.log(current);
		var j = 0;
		for(j=0; j<5;j++){
			console.log(current +" " + checker[j]);
			if(getInput.charAt(i) == checker[j]){
				console.log("inside");
				console.log(" again "+current +" " + checker[j]);
				answer[j] +=1;
			}
		}
	}
	var page = document.getElementById('ans');
	
	for(i=0; i< 5; i++){
		var addElement = document.createElement("p");
		addElement.innerHTML = checker[i] +" : " + answer[i];
		page.appendChild(addElement);
	}
}