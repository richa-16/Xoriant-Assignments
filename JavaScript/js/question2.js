
function GetGreetings( name ){
	this.name = name;
	this.greetings = function greetUser(){
		var str = "Dear "+ this.name + ", Good Morning !!! Have a nice day !";
		document.write(str.toString());
		// make below code work 
		/*
		var message = str;
		message.concat(" ",this.name);
		message.concat(" ",", Good Morning !!! Have a nice day !");
		console.log(message.toString());
		document.write(message.toString());
		*/
	}
}
function Greetings(){
	var NameOfUser = document.getElementById('name').value;
	// write validation cases 
	console.log(NameOfUser);
	var Greeter = new GetGreetings(NameOfUser);
	Greeter.greetings();
}