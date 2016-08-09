var footer_links = [{txt:"Privacy policy", link:"Privacy_policy.html"},
                    {txt:"Terms & Conditions", link:"Terms_and_Conditions.html"},
                    {txt:"Mission & Vision", link:"Mission_and_Vision.html"},
                    {txt:"Contact us", link:"Contact_us.html"},
                    {txt:"About us", link:"About_us.html"}];
var social_navigation = [{src:"img/facebook_logo.png", link:"http://www.facebook.com"}, 
                         {src:"img/google_plus_logo.png", link:"http://www.google.com"}, 
                         {src:"img/twitter_logo.jpg", link:"http://www.twitter.com"},];

function renderUi(){
	console.log("In render Ui");
	// render footer
	footerLoad();
	
}

function footerLoad(){
	var linkLen = footer_links.length;
	var social_nav_len = social_navigation.length;
	
	var i;
	
	for(i=0; i<linkLen; i++)
		{
			var old_html=document.getElementById("div_footer").innerHTML;
			document.getElementById("div_footer").innerHTML=old_html+"<div class='div_ftr'><a class = 'a_link' href='"+ footer_links[i].link + "' class='a_footer'>" + footer_links[i].txt + "</a></div>";
		}
	
	old_html=document.getElementById("div_footer").innerHTML;
	old_html+="<br>";
	document.getElementById("div_footer").innerHTML = old_html + "&copy All rights reserved.";
	
	for(i=0; i<social_nav_len; i++)
	{
		old_html=document.getElementById("footer_img_link").innerHTML;
		document.getElementById("footer_img_link").innerHTML= old_html + "<a class = 'div_img_footer' href='"+ social_navigation[i].link + "'><img class='social_redirect' src='" + social_navigation[i].src + "'> </a>";
	}

	//<a class="a_img" href="http://www.facebook.com/pages/"><img class="social_redirect" src="Images/facebook_logo.png"></a>
}