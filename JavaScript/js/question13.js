function CheckEmail() {
	var getEmail = document.getElementById("emailInput").value;
    
    var x = getEmail.indexOf("@");
    var y = getEmail.lastIndexOf(".");
    if (x<1 || y<x+2 || y+2>=getEmail.length) {
        alert("It is invalid email address");
    }else{
    	alert("Valid email");
    }
}