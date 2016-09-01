

function sendMsg(){
	//var div = document.getElementById("main_msg_holder").innerHTML;
	var msg = document.getElementById("txtMsg").value ;
	if(msg.length>0)
	{
		//var newMsg = "<input id='as' type='text' class='msgSent' value='"+ msg +"' autowidth disabled  >"  + "<br>";
		var newMsg = "<textarea id='as' class='msgSent' disabled auto maxlength=150 >" +  msg + "</textarea> <br>";
		document.getElementById("main_msg_holder").innerHTML += newMsg;
		var objDiv = document.getElementById("main_msg_holder");
		objDiv.scrollTop = objDiv.scrollHeight;
	}
	document.getElementById("txtMsg").value = "";
	document.getElementById("txtMsg").focus();
}

function receiveMsg(){
	//var div = document.getElementById("main_msg_holder").innerHTML;
	var msg = document.getElementById("txtMsgNew").value ;
	if(msg.length>0)
		{
			//var newMsg = "<input type='text' class='msgReceived' value='"+ msg+"' disabled  >"  + "<br>";
			var newMsg = "<textarea id='as' class='msgReceived' disabled auto maxlength=150  >" +  msg + "</textarea> <br>";
			document.getElementById("main_msg_holder").innerHTML += newMsg;
			var objDiv = document.getElementById("main_msg_holder");
			objDiv.scrollTop = objDiv.scrollHeight;
		}
	document.getElementById("txtMsgNew").value = "";
	document.getElementById("txtMsgNew").focus();
}