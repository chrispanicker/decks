let tabButton = document.querySelectorAll(".tab-bar button");
let tabContent = document.querySelectorAll(".tabs .content");

for(let i = 0; i<tabButton.length; i++){
	tabButton[i].onclick = (e) => {
		for(let j = 0; j<tabButton.length; j++){
			if(j===i){
				tabContent[j].style.display = "block";
				tabButton[j].style.top="0"
				tabButton[j].style.fontSize="2.2vw"
			} else {
				tabContent[j].style.display = "none";
				tabButton[j].style.top="1vh"
				tabButton[j].style.fontSize="2vw"
			}
		};
	};
}