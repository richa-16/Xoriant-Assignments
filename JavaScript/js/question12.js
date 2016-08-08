function CheckTests(){
	var getInput = document.getElementById('inputWord').value;
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
	
	// check for consonant 
	var consonant = 0;
	for(i = 0; i< length;i++){
		//console.log(current);
		var j = 0;
		for(j=0; j<5;j++){
			//console.log(current +" " + checker[j]);
			if(getInput.charAt(i) == checker[j]){
				consonant = 1;
			}
		}
	}
	
	// check for pallindrom
	var pallindrome = 0;
	var loopCount = 0;
	if(length%2 ==0){
		loopCount = length/2;
	}else{
		loopCount = length/2 ;
		loopCount = loopCount+1;
	}
	
	for(i = 0; i< loopCount; i++){
		console.log(i);
		console.log(getInput.charAt(i) +" "+ getInput.charAt(length-i-1));
		if(getInput.charAt(i) == getInput.charAt(length-i-1)){
			continue;
		}else{
			console.log("not");
			pallindrome = 1;
		}
		
	}
	
	var page = document.getElementById('ans');
	
	var addElement = document.createElement("p");
	var ansStr = " The given word is ";
	if(pallindrome ==1){
		ansStr += "is not a pallindrome";
	}else{
		ansStr += "is  a pallindrome";
	}
	
	if(consonant ==1){
		ansStr += ". It is not a consonant";
	}else{
		ansStr += ". It is a consonant";
	}
	
	addElement.innerHTML = ansStr;
	page.appendChild(addElement);
	
}