// Category class and modules starts here--------------------------------------------------------------
//This class is used to add new category, update category and delete category
function Category(cId,cName,cDescription,cImageURL,cDate)
{
	
	this.cId=cId;
	this.cName=cName;
	this.cDescription=cDescription;
	this.cImageURL=cImageURL;
	this.cDate=cDate;
	
	this.addCategory=function(){

		var count = getCategoryCount();
		
		var cat=[{cId:cId,cName:cName,cDescription:cDescription,cImageURL:cImageURL,cDate:cDate}];
		var categoryId = "c"+count;
		
		
		localStorage.setItem(categoryId,JSON.stringify(cat));
		//count++;
		localStorage.setItem("categoryCount",count);
		
		//console.log("categoryCount "+ count);
		
		var output = JSON.parse(localStorage.getItem(categoryId));
		
		/*console.log("Cname "+output[0].cName);
		console.log("CID "+output[0].cId);
		console.log("Cdate "+output[0].cDate);
		*/
	}	
	
	
	this.updateCategory=function(cid)
	{
		var cat=[{cId:cid,cName:cName,cDescription:cDescription,cImageURL:cImageURL,cDate:cDate}];
		var temp="c"+cid
		localStorage.setItem(temp,JSON.stringify(cat));
		console.log("category updated");
		
	}	
	
	
	this.deleteCategory=function(cid)
	{
		var temp="c"+cid;
		
		localStorage.removeItem(temp);
		console.log(cid+" deleted");
	}
}


// this funcition is used to add a new category
//Add Category starts
function addCat(){
	var cid = document.getElementById("categoryId").value;
	cid = Number(cid);
	//console.log("Cid " + cid);
	var cName=document.getElementById("categoryName").value;
	var cDescription=document.getElementById("categoryDescription").value;
	var cURL=document.getElementById("categoryURL").value;
	var cDate=new Date();
	var obj = new Category(cid,cName,cDescription,cURL,cDate);
	
	obj.addCategory();
}
//Add category ends



//this function is used to show all categories
//show categories starts
function showCat()
{
	var count= getCategoryCount();//localStorage.getItem("count");
	for(var i=1;i<count;i++)
	{
		var temp="c"+i;
		var cat=JSON.parse(localStorage.getItem(temp));
		if(cat!=null)
		{
			document.write(cat[0].cId+" "+cat[0].cName+" "+cat[0].cDescription+" "+cat[0].cImageURL+"<br>");
		}
		
		
		/*console.log("Cname " + cat[0].cName);
		console.log("CID " + cat[0].cId);
		console.log("Cdate" + cat[0].cDate);*/
		
		
	}
}
//show categories ends




//this function is used to update category
function updateCat(){
	var select=document.getElementById("categoryMenu").value;
	if(select!="Select")
	{
		var cName=document.getElementById("categoryName").value;
		var cDescription=document.getElementById("categoryDescription").value;
		var cURL=document.getElementById("categoryURL").value;
		var cid=document.getElementById("categoryMenu").value;
		//console.log(cName+cDescription+cURL+cid);
		var cDate=new Date();
		
		
		var obj = new Category(cid,cName,cDescription,cURL,cDate);
		obj.updateCategory(cid);
		
	}
	
}




//this will be called on onload ofupdat category
//update category modules starts
function fillCategory()
{
	var sel = document.getElementById("categoryMenu");
	var opt = document.createElement("option");
	opt.innerHTML ="Select";
	opt.value="Select";
	sel.appendChild(opt);
	
	var count=getCategoryCount();
	for(var i = 1; i < count; i++) 
	{
    
		var temp="c"+i;
		var cat=JSON.parse(localStorage.getItem(temp));
		if(cat!=null)
		{
		var opt = document.createElement("option");
		opt.innerHTML = cat[0].cName;
		opt.value =cat[0].cId ;
		sel.appendChild(opt);
		}

	}
}


//this will fill default values of category to be updated use only for updating catagory
function fillDetails()
{
	var id=document.getElementById("categoryMenu").value;
	if(id!="Select")
	{
	console.log("id to be updated="+id);
	var temp="c"+id;
	var cat=JSON.parse(localStorage.getItem(temp));
	document.getElementById("cName").innerHTML="<label for='categoryName'>Category Name:</label><input type='text' class='form-control' id='categoryName' value='"+cat[0].cName+"' required>";
	document.getElementById("cDescription").innerHTML="<label for='categoryDescription'>Description:</label><input type='text' class='form-control' id='categoryDescription' value='"+cat[0].cDescription+"' required>";
	document.getElementById("cImageURL").innerHTML="<label for='categoryURL'>URL:</label><input type='text' class='form-control' id='categoryURL' value='"+cat[0].cImageURL+"' required>";
	}
	else
	{
		document.getElementById("cName").innerHTML="";
		document.getElementById("cDescription").innerHTML="";
		document.getElementById("cImageURL").innerHTML="";
	}
}
//update categories modules ends





//delete category modules starts
function delCat()
{
	var id=document.getElementById("categoryMenu").value;
	var g=new Category();
	g.deleteCategory(id);
}
//delete categories modules ends








//initialization class only used for adding a new category
function initialization(){	
	//clearDb();
	var count = getCategoryCount();
	console.log("Category count "+ count);
	document.getElementById("id").innerHTML="<label for='categoryId'>Id:</label><input type='text' class='form-control' id='categoryId' disabled value='"+count+"'>";
}




//function to clear database
function clearDb(){
	localStorage.clear();
}



//this function returns number of categories present in database
function getCategoryCount(){
	var countStr = localStorage.getItem("categoryCount");
	var count = 0;
	if(countStr == null || countStr == "null"){
		count = 0;
	}else{
		count = Number(countStr);
	}
	count++;
	return count;
}

// Category class and modules ends here----------------------------------