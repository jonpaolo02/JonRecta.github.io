function popup()  {
	  open("about_ironMan_popup.html");
	  open("iron man.jpg")
}


function changeImage(){
	var image = document.getElementById('myImage');
	if(image.src.match("bulb_off.png")){
		image.src= "bulb_on.png";
	}
	else{
		image.src="bulb_off.png";
	}
}
