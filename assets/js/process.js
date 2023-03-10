let zoomMe = document.querySelector(".zoom-me");
let zoom = document.querySelector("#zoom");
let logoEl = document.querySelector("#logo");


zoomMe.onclick= function(){
	zoom.style.display="flex";
	zoom.style.zIndex="200"
}

zoom.onclick= function(){
	zoom.style.display="none";
}

