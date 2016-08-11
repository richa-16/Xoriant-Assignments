var categories = ["All Categories","Cars & Bikes","Mobiles & Tablets","Electronics & Appliances","Real Estate","Home & Lifestyle","Entertainment","Others"];
//var categories_id=[{1:"All Categories"},{2:"Cars & Bikes"},{3:"Mobiles & Tablets"},{4:"Electronics & Appliances"},{5:"Real Estate"},{6:"Home & Lifestyle"},{7:"Entertainment"},{8:"Others"}];


//var brands=[{2:"Royal Enfiled,Fiat,Hyundai,Audi,Jaguar,Honda,Skoda,TVS,Bajaj"},{3:"Gioneem,Lenovo,Micromax,Samsung,Karbonn,Oppo,Vivo"},{4:"Symphony,Usha,Bajaj,LG,Samsung,BPL,Onida,Sony,Acer,Apple,August,BlueStar,Bosch,Canon,Dell,Epson,Hp,Huwai,HTC,iSi,IRIS"}];

var advertisementsCount=10;
var advertisements=[{id:"1", email:"knnemade99@gmail.com" , name:"Kunal Nemade", product:"Gionee M2",brand:"Gionee", category:"Mobiles & Tablets",price:"8000",src:"images/advertisements/1.jpeg", status:"unsold", date:"01/04/2016"},
                    {id:"2",email:"knnemade99@gmail.com" , name:"Kunal Nemade", product:"Furniture", brand:"", category:"Home & Lifestyle",price:"10000",src:"images/advertisements/2.jpg", status:"unsold",date:"11/04/2016" },
                    {id:"3",email:"prateek.upacharya@gmail.com" , name:"Prateek Upacharya", product:"Bullet", brand:"Royal Enfield", category:"Cars & Bikes",price:"45000",src:"images/advertisements/3.jpg",status:"unsold",date:"11/01/2016" },
                    {id:"4",email:"aniruddha.dariyapurkar@ymail.com" , name:"Aniruddha Dariyapurkar", product:"1BHK", brand:"", category:"Real Estate",price:"8000000",src:"images/advertisements/4.jpg", status:"unsold",date:"10/12/2015" },
                    {id:"5",email:"knnemade99@gmail.com" , name:"Kunal Nemade", product:"Lenovo A7000",brand:"Lenovo", category:"Mobiles & Tablets",price:"80000",src:"images/advertisements/5.jpg", status:"unsold" ,date:"10/01/2016"},
                    {id:"6",email:"aniruddha.dariyapurkar@ymail.com" , name:"Aniruddha Dariyapurkar", product:"Food Processor",brand:"Usha", category:"Electronics & Appliances",price:"4000",src:"images/advertisements/6.jpg", status:"unsold",date:"10/02/2016"},
                    {id:"7",email:"Nandan@gmail.com" , name:"Nandan", product:"PS3",brand:"", category:"Entertainment",price:"20000" ,src:"images/advertisements/7.jpg", status: "unsold",date:"11/04/2016"},
                    {id:"8",email:"knnemade99@gmail.com" , name:"Kunal Nemade", product:"Cooler",brand:"Symphony", category:"Electronics & Appliances",price:"50000",src:"images/advertisements/8.jpg", status: "unsold",date:"19/02/2016" },
                    {id:"9",email:"Nandan@gmail.com" , name:"Nandan", product:"Lenovo k4 note",brand:"Lenovo", category:"Mobiles & Tablets",price:"75000",src:"images/advertisements/9.jpg", status:"unsold",date:"21/05/2016" },
                    {id:"10",email:"knnemade99@gmail.com" , name:"Kunal Nemade", product:"Lightings", brand:"", category:"Electronics & Appliances",price:"900",src:"images/advertisements/10.jpg", status:"unsold",date:"31/03/2016" }];


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
	
	var sort_basis = document.getElementById("filter").value;
	var temp = advertisements;
	if(sort_basis=="ByDate"){
		for(var d=0; d<advertisements.length; d++){
			var t;
			t = advertisements[d].date.substring(3,5);
			temp[d].date = temp[d].date+t+"";			
			t=advertisements[d].date.substring(0,2);
			temp[d].date += t + "";
			temp[d].date=temp[d].date.substring(6,14);
		}
		temp.sort(function(a, b){return b.date-a.date});
	}
	
	if(sort_basis=="LowesttoHighest"){
		temp=advertisements;
		temp.sort(function(a, b){return a.price-b.price});
	}
	
	if(sort_basis=="HighesttoLowest"){
		temp=advertisements;
		temp.sort(function(a, b){return b.price-a.price});
	}
	
	document.getElementById("searchresult").innerHTML = "";
	document.getElementById("searchresult").innerHTML = "<br>";
	document.getElementById("searchresult").innerHTML += "<div class=\"row\">"+
				"<div class=\"col-10\"></div>"+
				"<div class=\"col-1\"><span><a class=\"smallClose\" onclick=\"closeModals('searchResults')\">x</a></span></div>"+
			 "</div> <hr>";
	document.getElementById("searchresult").innerHTML += "<div class=\"row\"> " +
				"<div class=\"col-1\"> "+
					"ID"+
				"</div>"+
				"<div class=\"col-3\"> "+
					"Image"+
				"</div>"+
				"<div class=\"col-2\"> "+
					"Name"+
				"</div>"+
				"<div class=\"col-1\"> "+
					"Price"+
				"</div>"+
				"<div class=\"col-4\"> "+
					"<center>"+		
					"Action"+
					"</center>"+
				"</div>"+
			"</div><br>";
	var category = document.getElementById("category").value.toUpperCase();
	var keyword = document.getElementById("search").value.toUpperCase();
	var id = 0;
	for(var i=0;i<temp.length;i++){

		var temp1=temp[i].product.toUpperCase();
		if(temp[i].category.toUpperCase()==category&&temp1.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp1.indexOf(keyword)>=0){
			if(temp[i].status!="sold"){

				//document.getElementById("searchresult").innerHTML += "<div class='result'><span><img src='"+temp[i].src+"'> </span><b>Product Name:</b>"+temp[i].product+"<br><b>Seller Name:</b>"+temp[i].name+" <br><b>Email: </b>"+temp[i].email+"<br><span><b>Price:</b>"+" Rs "+temp[i].price+"</span><br><b>Contact:</b></div><br><hr>";
				id++;
				document.getElementById("searchresult").innerHTML += "<div class=\"row\"> " +
								"<div class=\"col-1\"> "+
								(id)+
							"</div>"+
							"<div class=\"col-3\"> "+
								"<img src=\""+temp[i].src+"\" width=\"100px\" height=\"100px\">"+
							"</div>"+
							"<div class=\"col-2\"> "+
							temp[i].product+
							"</div>"+
							"<div class=\"col-1\"> "+
							temp[i].price+
							"</div>"+
							"<div class=\"col-4\"> "+
								"<center>"+
								"<button class=\"smallButton\" onclick=\"viewDetails()\" >View Details</button>"+
								"<button class=\"smallButton\" onclick=\"viewDetails()\" >Call</button>"+
								"<button class=\"smallButton\" onclick=\"viewDetails()\" >Chat</button>"+
								"</center>"+
							"</div>"+
						"</div>";
			}
		}
	}
	openModal('searchResults');
}

// Scripts for modals
function openModal(modalName){
	console.log("Reached here ");
	document.getElementById(modalName).style.display='block';
}
function closeModals(modalName){
	console.log("Reached here ");
	document.getElementById(modalName).style.display='none';
}

