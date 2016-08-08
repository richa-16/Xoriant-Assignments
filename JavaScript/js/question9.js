function FindResults(){
	
	var numbers = new Array();
	numbers[0] = 1;
	numbers[1] = 2;
	numbers[2] = 3;
	numbers[3] = 4;
	numbers[4] = 5;
	numbers[5] = 6;
	numbers[6] = 7;
	
	var min = 999;
	var max = 0;
	var total = 0;
	var average = 0;
	
	var i = 0; 
	for(i = 0; i< 7;i++){
		if(numbers[i] > max){
			max = numbers[i]; 
		}
		if(numbers[i] < min){
			min = numbers[i]; 
		}
		total += numbers[i];
	}
	
	var page = document.getElementById('ans');
	var addElement1 = document.createElement("p");
	addElement1.innerHTML = "Min ="+ min;
	page.appendChild(addElement1);
	var addElement2 = document.createElement("p");
	addElement2.innerHTML = "Max ="+ max;
	page.appendChild(addElement2);
	var addElement3 = document.createElement("p");
	addElement3.innerHTML = "Total ="+ total;
	page.appendChild(addElement3);
	var addElement4 = document.createElement("p");
	var average = total / 7;
	addElement4.innerHTML = "Average ="+ average;
	page.appendChild(addElement4);
	
}