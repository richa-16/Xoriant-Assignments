
function postAdd(){

	var pName = document.getElementById('pName').value;
	var pEmail = document.getElementById('pEmail').value;
	var pContact = document.getElementById('pContact').value;
	var productName = document.getElementById('productName').value;
	var selectCategory = document.getElementById('selectCategory').value;
	var sellingPrice = document.getElementById('sellingPrice').value;
	var image = document.getElementById('image');
	image = getBase64Image(image);
	
	//localStorage.clear();
	var postCountFullStr = localStorage.getItem("postCount");
	console.log("PostCount full str" +postCountFullStr);
	var postCount = 0;
	if(postCountFullStr == null || postCountFullStr =="null"){
		console.log("In null");
		//var postCountHalfStr = postCountFullStr.substring(1,len);
		postCount = 0;
	}else{
		console.log("In not null");
		postCount = Number(postCountFullStr);	
	}
	console.log("Post count " + postCount);
	// common for all 
	var currentIndex = postCount + 1;
	console.log("Current Index "+ currentIndex);
	
	
	var postObj =[{
		pName : pName,
		pEmail : pEmail,
		pContact : pContact,
		productName: productName,
		selectCategory : selectCategory,
		sellingPrice : sellingPrice,
		image: image
	}];
	
	console.log("Object created ");
	var postId = "p"+currentIndex;
	console.log("Post id "+postId);
	
	localStorage.setItem(postId, JSON.stringify(postObj));
	//currentIndex++;
	
	localStorage.setItem("postCount",currentIndex);
	alert(" Post added successfully ");
	console.log("Post added into database succefully");
	redirectPage();
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// display image

/*
/var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = "data:image/png;base64," + dataImage;
*/