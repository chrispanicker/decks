import {map, constrain} from "./math.js";

let htmlEl = document.querySelector("html");

let skateBar = document.createElement("img");
skateBar.src = "./assets/media/images/scrollbar_asset.svg";
skateBar.id = "skateBar"

htmlEl.appendChild(skateBar);

window.addEventListener('scroll',()=>{
    // infinite scroll!
    if(window.scrollX + window.innerWidth >= document.documentElement.scrollWidth){
    	htmlEl.style.scrollBehavior = "unset";
      setTimeout(() => {
        window.scroll(0,0);
      }, 100)

      setTimeout(() => {
        htmlEl.style.scrollBehavior = "smooth";
      }, 1000)
    } 
    //whole lotta math for calculating where the skateboard should be
    let pageWidth = document.documentElement.scrollWidth;
    let windowWidth = document.innerWidth;
    let currentX = window.scrollX;
    let relativePixels = currentX/pageWidth;
    let boardSize = windowWidth/5;
    let offset = map(window.scrollX, 0, pageWidth, 0, .5);
    let skateBarPos = (relativePixels-.2+offset)*100;

    skateBar.style.left = skateBarPos + "vw";
});

// skateBar.addEventListener('dragstart',(e)=>{
//   htmlEl.style.scrollBehavior = "unset";
// });

// skateBar.addEventListener('drag',(e)=>{
//   let pageWidth = document.documentElement.scrollWidth;
//   let windowWidth = window.innerWidth;
//   const mappedScroll= map(e.x, 0, windowWidth, 0, pageWidth);
//   window.scroll(mappedScroll,0);
// });

// skateBar.addEventListener('dragend',(e)=>{
//   let pageWidth = document.documentElement.scrollWidth;
//   let windowWidth = window.innerWidth;
//   const mappedScroll= map(e.x, 0, windowWidth, 0, pageWidth);
//   window.scroll(1000,0);
//   setTimeout(() => {
//     htmlEl.style.scrollBehavior = "smooth";
//   }, 1000)
// });