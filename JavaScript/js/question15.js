function RemoveSpaces(){
	var getSentence = document.getElementById('inputSentence').value;
	var str = new String(getSentence);
	var length = str.length;
	
	var newString = new String();
	var i =0;
	var previous = 1;
	for(i=0; i< length; i++){
		if(str.charAt(i) != " "){
			previous = 0;
			newString += str.charAt(i);
		}else{
			if(previous ==0){
				newString += str.charAt(i);	
			}
			previous = 1;
		}
	}
	var para = document.getElementById("ans");
	var addElement = document.createElement("p");
	addElement.innerHTML = "Changed text is "+newString;
	para.appendChild(addElement);
	
}