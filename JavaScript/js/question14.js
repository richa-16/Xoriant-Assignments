function Counter(){
	var getInput = document.getElementById('inputSentence').value;
	getInput = new String(getInput);
	getInput = getInput.toLowerCase();
	var length = getInput.length;
	var count = 0;
	for(i = 0; i< length;i++){
		if(getInput.charAt(i) !=" "){
			count++;
		}
		
	}
	var page = document.getElementById('ans');
	var addElement = document.createElement("p");
	addElement.innerHTML = "Total characters are (excluding spaces) : "+count;
	page.appendChild(addElement);

}