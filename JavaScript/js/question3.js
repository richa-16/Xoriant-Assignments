function Calculation(){
	var first = document.getElementById('num1').value;
	first = parseInt(first);
	var second = document.getElementById('num2').value;
	second = parseInt(second);
	
	var action = new Divide(first, second);
	
}

function Divide(first, second){
	this.first = first;
	this.second = second;
	if(second == 0){
		alert("You can't divide a number by 0");
	}else{
		var ans = first / second;
		document.write("Division is "+ ans);
	}
}