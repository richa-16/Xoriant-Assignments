var categories=["All Categories","Cars & Bikes","Mobiles & Tablets","Electronics & Appliances","Real Estate","Home & Lifestyle","Entertainment","Others"];
//var categories_id=[{1:"All Categories"},{2:"Cars & Bikes"},{3:"Mobiles & Tablets"},{4:"Electronics & Appliances"},{5:"Real Estate"},{6:"Home & Lifestyle"},{7:"Entertainment"},{8:"Others"}];


//var brands=[{2:"Royal Enfiled,Fiat,Hyundai,Audi,Jaguar,Honda,Skoda,TVS,Bajaj"},{3:"Gioneem,Lenovo,Micromax,Samsung,Karbonn,Oppo,Vivo"},{4:"Symphony,Usha,Bajaj,LG,Samsung,BPL,Onida,Sony,Acer,Apple,August,BlueStar,Bosch,Canon,Dell,Epson,Hp,Huwai,HTC,iSi,IRIS"}];

var advertisementsCount=10;
var advertisementsList=[{id:"1", email:"knnemade99@gmail.com", name:"Kunal Nemade", productName:"Gionee M2", brand:"Gionee", category:"Mobiles & Tablets",price:"8000", src:"images/advertisements/1.jpeg", status:"unsold", date:"01/04/2016"},
                        {id:"2", email:"knnemade99@gmail.com", name:"Kunal Nemade", productName:"Furniture", brand:"", category:"Home & Lifestyle",price:"10000",src:"images/advertisements/2.jpg", status:"unsold",date:"11/04/2016" },
                        {id:"3", email:"prateek.upacharya@gmail.com", name:"Prateek Upacharya", productName:"Bullet", brand:"Royal Enfield", category:"Cars & Bikes",price:"45000",src:"images/advertisements/3.jpg",status:"unsold",date:"11/01/2016" },
                        {id:"4", email:"aniruddha.dariyapurkar@ymail.com", name:"Aniruddha Dariyapurkar", productName:"1BHK", brand:"", category:"Real Estate",price:"8000000",src:"images/advertisements/4.jpg", status:"unsold",date:"10/12/2015" },
                        {id:"5", email:"knnemade99@gmail.com", name:"Kunal Nemade", productName:"Lenovo A7000", brand:"Lenovo", category:"Mobiles & Tablets",price:"80000",src:"images/advertisements/5.jpg", status:"unsold" ,date:"10/01/2016"},
                        {id:"6", email:"aniruddha.dariyapurkar@ymail.com", name:"Aniruddha Dariyapurkar", productName:"Food Processor", brand:"Usha", category:"Electronics & Appliances",price:"4000",src:"images/advertisements/6.jpg", status:"unsold",date:"10/02/2016"},
                        {id:"7", email:"Nandan@gmail.com", name:"Nandan", productName:"PS3", brand:"", category:"Entertainment",price:"20000" ,src:"images/advertisements/7.jpg", status: "unsold",date:"11/04/2016"},
                        {id:"8", email:"knnemade99@gmail.com", name:"Kunal Nemade", productName:"Cooler", brand:"Symphony", category:"Electronics & Appliances",price:"50000",src:"images/advertisements/8.jpg", status: "unsold",date:"19/02/2016" },
                        {id:"9", email:"Nandan@gmail.com", name:"Nandan", productName:"Lenovo k4 note", brand:"Lenovo", category:"Mobiles & Tablets",price:"75000",src:"images/advertisements/9.jpg", status:"unsold",date:"21/05/2016" },
                        {id:"10",email:"knnemade99@gmail.com", name:"Kunal Nemade", productName:"Lightings", brand:"", category:"Electronics & Appliances",price:"900",src:"images/advertisements/10.jpg", status:"unsold",date:"31/03/2016" }];

function Category(){
	
}

function fillCategory(){
	var sel = document.getElementById("category");
	
	for(var i = 0; i < categories.length; i++) {
	    var opt = document.createElement("option");
	    opt.innerHTML = categories[i];
	    opt.value = categories[i];
	    sel.appendChild(opt);

	}
}

function searching(){
	
	
	var sort_basis=document.getElementById("filter").value;
	var temp=advertisementsList;
	
	if(sort_basis=="ByDate")
	{
		
			for(var d=0;d<advertisementsList.length;d++)
			{
			
				var t;
				t=advertisementsList[d].date.substring(3,5);
				temp[d].date=temp[d].date+t+"";

				
				t=advertisementsList[d].date.substring(0,2);
				temp[d].date+=t+"";
			
				temp[d].date=temp[d].date.substring(6,14);
			
			
			}

			
			temp.sort(function(a, b){return b.date-a.date});
		
	}
	
	if(sort_basis=="LowesttoHighest")
	{
		temp=advertisementsList;
		temp.sort(function(a, b){return a.price-b.price});
		
	}
	
	if(sort_basis=="HighesttoLowest")
	{
		temp=advertisementsList;
		temp.sort(function(a, b){return b.price-a.price});
		
	}
	
	document.getElementById("searchresult").innerHTML="";
	var category = document.getElementById("category").value.toUpperCase();
	var keyword=document.getElementById("search").value.toUpperCase();
	
	for(var i=0;i<temp.length;i++)
		{
		var temp1=temp[i].product.toUpperCase();
			if(temp[i].category.toUpperCase()==category&&temp1.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp1.indexOf(keyword)>=0)
				{
					if(temp[i].status!="sold")
					{
						var old_html=document.getElementById("searchresult").innerHTML;
						document.getElementById("searchresult").innerHTML=old_html+"<div class='result'><span><img src='"+temp[i].src+"'> </span><b>Product Name:</b>"+temp[i].product+"<br><b>Seller Name:</b>"+temp[i].name+" <br><b>Email: </b>"+temp[i].email+"<br><span><b>Price:</b>"+" Rs "+temp[i].price+"</span><br><b>Contact:</b></div><br><hr>";
					}
				}
		}
	
}

function updateAdvertisement(){
	
	document.getElementById("txtProdName").disabled= false;
	document.getElementById("txtProdBrand").disabled= false;
	document.getElementById("txtProdCategory").disabled= false;
	document.getElementById("txtProdPrice").disabled= false;
	document.getElementById("checkProdSold").disabled= false;
	document.getElementById("btnSubmit").disabled= false;
	document.getElementById("btnUpdate").disabled= true;
	document.getElementById("fileUpload").disabled= false;
	
}

function submitAdvertisementUpdate(){
	
	document.getElementById("txtProdName").disabled= true;
	document.getElementById("txtProdBrand").disabled= true;
	document.getElementById("txtProdCategory").disabled= true;
	document.getElementById("txtProdPrice").disabled= true;
	document.getElementById("checkProdSold").disabled= true;
	document.getElementById("btnSubmit").disabled= true;
	document.getElementById("btnUpdate").disabled= false;
	document.getElementById("fileUpload").disabled= true;
	
	var advIndex;
	var flagFound=false;
	
	var advID = document.getElementById("txtProdID").value;
	var prodName = document.getElementById("txtProdName").value;
	var brand = document.getElementById("txtProdBrand").value;
	var cate = document.getElementById("txtProdCategory").value;
	var price = document.getElementById("txtProdPrice").value;
	var sts = document.getElementById("checkProdSold").checked;
	
	for(advIndex=0; advIndex<advertisementsCount; advIndex++)
		{
			if(advertisementsList[advIndex].id == advID)
				{
					flagFound = true;
					break;
				}
		}
	if(flagFound)
		{
			if(sts == true)
				{	
					advertisementsList[advIndex].status = "sold";		
				}
			
			else
				{
					advertisementsList[advIndex].productName = prodName;
					advertisementsList[advIndex].brand = brand;
					advertisementsList[advIndex].category = cate;
					advertisementsList[advIndex].price = price;					
				}
		}
	loadAdvertisement(advIndex);
	alert("Updated!");

}

function loadAdvertisement(advIndex){
	// ID will be same
	document.getElementById("txtProdName").value = advertisementsList[advIndex].productName;
	document.getElementById("txtProdBrand").value = advertisementsList[advIndex].brand;
	document.getElementById("txtProdCategory").value = advertisementsList[advIndex].category;
	document.getElementById("txtProdPrice").value = advertisementsList[advIndex].price;
	document.getElementById("txtProdName").disabled = true;
	document.getElementById("txtProdBrand").disabled = true;
	document.getElementById("txtProdCategory").disabled = true;
	document.getElementById("txtProdPrice").disabled = true;
	document.getElementById("imgProdImage").src = advertisementsList[advIndex].src;;
	
	var sts = advertisementsList[advIndex].status;
	if(sts == "unsold")
		{
			document.getElementById("checkProdSold").checked = false;
		}
	else
	if(sts == "sold")
		{
			document.getElementById("checkProdSold").checked = true;
			disableAll();	
		}
}

function deleteAdvertisement(){

	var advID = document.getElementById("txtProdID").value;
	var advIndex;
	var flagFound=false;
	
	for(advIndex=0; advIndex<advertisementsCount; advIndex++)
		{
			if(advertisementsList[advIndex].id == advID)
				{
					flagFound = true;
					break;
				}
		}
	
	if(flagFound)
		{
			advertisementsList[advIndex].status = "deleted";
			disableAll();
			document.getElementById("btnDelete").disabled = true;
			
		}
	else
		{
			alert("Advertisement not found!");
		}
}

function disableAll(){
	
	document.getElementById("txtProdName").disabled = true;
	document.getElementById("txtProdBrand").disabled = true;
	document.getElementById("txtProdCategory").disabled = true;
	document.getElementById("txtProdPrice").disabled = true;
	document.getElementById("checkProdSold").disabled = true;
	document.getElementById("btnUpdate").disabled = true;
	document.getElementById("btnSubmit").disabled = true;
	document.getElementById("fileUpload").disabled= true;
}

