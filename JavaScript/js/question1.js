
function FindBirthYear( age ){
	this.age = age;
	this.calculation = function cal(){
		var currentDate = new Date();
		console.log(currentDate);
		// to get full year 
		var currentYear = currentDate.getFullYear();
		console.log(currentYear);
		var birthYear = currentYear - age;
		console.log(birthYear);
		document.write(birthYear);
	}
}
function Calender(){
	var AgeOfUser = document.getElementById('age').value;
	// write validation cases 
	console.log(AgeOfUser);
	var BirthYear = new FindBirthYear(parseInt(AgeOfUser));
	BirthYear.calculation();
}