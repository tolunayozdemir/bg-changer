//choose color randomly
function colorPicker() {
	color = "#";
	letters= "0123456789ABCDEF";

	for(i=0;i<6;i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

//select body
var body = document.querySelector("body");

//background change
function backgroundChange(){
	body.style.background = colorPicker();
}

//select the button

var btn = document.querySelector("button");

btn.addEventListener("click", backgroundChange);