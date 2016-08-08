function findFactorial(){
	
	var getNumber = parseInt(document.getElementById('num').value);
	
	var page = document.getElementById('ans');
	var ans = 1;
	var i =1;
	for(i = 1; i< getNumber+1; i++){
		ans = ans*i;
	}
	
	var addElement = document.createElement("p");
	addElement.innerHTML =" Factorial of a number  "+ getNumber +" is "+ ans;
	page.appendChild(addElement);
	
}