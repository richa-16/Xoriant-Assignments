function printPrimes(){
	var FirstNum = parseInt(document.getElementById('num1').value);
	var SecondNum = parseInt(document.getElementById('num2').value);
	
	var page = document.getElementById('ans');
	
	// prime number logic 
	// we can use seive erotheness algorithm 
	// but it is not required here 
	var i = 0;
	
	for(i = FirstNum; i <= SecondNum  ; i++ ){
		console.log(i);
		
		var j = 2;
		var check = 0;
		for(;j<(i/2)+1 ;j++){
			if((i %j) == 0 ){
				// then it is not prime
				check = 1;
				break;
			}
		}
		if(check ==0){
			var addElement = document.createElement("p");
			addElement.innerHTML = " " + i +" <br>";
			page.appendChild(addElement);
		}
		
	}
}