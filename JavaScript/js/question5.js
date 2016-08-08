function checkVowels(){
	
	var getInput = document.getElementById('alphabet').value;
	console.log(getInput);
	var inputString = new String(getInput);
	inputString = inputString.toLowerCase();
	var checker = new Array();
	checker[0] ='a';
	checker[1] ='e';
	checker[2] ='i';
	checker[3] ='o';
	checker[4] ='u';
	var page = document.getElementById('ans');
	var i = 0;
	for(i = 0; i< 5; i++){
		if(checker[i] == inputString.charAt(0)){
			var para = document.createElement("p");
			para.innerHTML = "Yes it is a vowel";
			page.appendChild(para);
			return;
		}
	}
	var para = document.createElement("p");
	para.innerHTML = "No it is no vowel";
	page.appendChild(para);
}