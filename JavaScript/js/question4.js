function printTable(){
	var numberToPrintTable = parseInt(document.getElementById('num').value);
	console.log("Num "+ numberToPrintTable);
	var tableOFNumber = new Array();
	// generate the table
	// display table in the answer div
	var page = document.getElementById('ans');
	var i = 1;
	for(i = 1; i<11; i++){
		tableOFNumber[i] = numberToPrintTable * i;
		var tableAns = document.getElementById('tableContent');
		
		var para = document.createElement("p");
		para.innerHTML = i+ " : "+ tableOFNumber[i];
		//var node = document.createTextNode(i+ " : "+ tableOFNumber[i]);
		page.appendChild(para);
		
		// print on console
		console.log(tableOFNumber[i]);
		
		// generate confirmation box
	}
	var txt;
	var r = confirm("Want to print more tables!");
	if (r == true) {
		window.location.replace('04_Print_Table_Of_Number.html');
	} else {
		alert("Thank you for using application !!!");
	}
	
	
}