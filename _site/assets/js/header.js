import {map, constrain} from "./math.js";

let mainEl = document.querySelector("#main");
let logoEl = document.querySelectorAll(".logo");
let prevEl = document.querySelector("#prev");
let nextEl = document.querySelector("#next");
let headerEl = document.querySelector("header");
let aboutButton = document.querySelector("header #aboutEl")
let processButton = document.querySelector("header #processEl")
let downloadsButton = document.querySelector("header #downloadsEl")


window.addEventListener('scroll',()=>{
    if(window.scrollX >= window.innerWidth*.4){
      headerEl.style.opacity="100%"
      headerEl.style.opacity="100%"
    } else if(window.scrollX>window.innerWidth*3){
      headerEl.style.opacity="0%"
    } else if(window.scrollX<window.innerWidth){
      headerEl.style.opacity="0%"
    }

    let aboutMappedMargin;
    let aboutMappedSize;

    let processMappedMargin;
    let processMappedSize;
  
  
    let downloadsMappedMargin;
    let downloadsMappedSize;


    let start1 = .6;
    let mid1 = 1.1;
    let end1 = 2.6;
    let start2 = 2.1;
    let mid2 = 2.9;
    

    //-------------------------------------about section
    if(window.scrollX>window.innerWidth*.6&&window.scrollX<window.innerWidth*1.1){
      aboutMappedMargin = map(window.scrollX, window.innerWidth*.6, window.innerWidth*1.1, 0, 10); 
      aboutMappedSize = map(window.scrollX, window.innerWidth*.6, window.innerWidth*1.1, 2, 4) 

    }else if(window.scrollX>window.innerWidth*1.1&&window.scrollX<window.innerWidth*2.6){
      aboutMappedMargin = map(window.scrollX, window.innerWidth*2.6, window.innerWidth*1.1, 0, 10);
      aboutMappedSize = map(window.scrollX, window.innerWidth*2.6, window.innerWidth*1.1, 2, 4)  
    }
    if(window.scrollX>window.innerWidth*.6&&window.scrollX<window.innerWidth*2.6){
      aboutButton.style.margin=`0 ${aboutMappedMargin}vw 0 ${aboutMappedMargin}vw`;
      aboutButton.style.fontSize=`${aboutMappedSize}vw`;
    }else{
      aboutButton.style.margin="0vw"
      aboutButton.style.fontSize="2vw";
    }

    //-------------------------------------process section
    if(window.scrollX>window.innerWidth*.6&&window.scrollX<window.innerWidth*2.1){
      processMappedMargin = map(window.scrollX, window.innerWidth*.6, window.innerWidth*2.1, 0, 10); 
      processMappedSize = map(window.scrollX, window.innerWidth*.6, window.innerWidth*2.1, 2, 4) 

    }else if(window.scrollX>window.innerWidth*2.1&&window.scrollX<window.innerWidth*2.9){
      processMappedMargin = map(window.scrollX, window.innerWidth*2.9, window.innerWidth*2.1, 0, 10);
      processMappedSize = map(window.scrollX, window.innerWidth*2.9, window.innerWidth*2.1, 2, 4)  
    }

    if(window.scrollX>window.innerWidth*.6&&window.scrollX<window.innerWidth*2.9){
      processButton.style.margin=`0 ${processMappedMargin}vw 0 ${processMappedMargin}vw`;
      processButton.style.fontSize=`${processMappedSize}vw`;
    }else{
      processButton.style.margin="0vw"
      processButton.style.fontSize="2vw";
    }

    //-------------------------------------downloads section
    if(window.scrollX>window.innerWidth*2.1&&window.scrollX<window.innerWidth*3.2){
      downloadsMappedMargin = map(window.scrollX, window.innerWidth*2.1, window.innerWidth*3.2, 0, 10); 
      downloadsMappedSize = map(window.scrollX, window.innerWidth*2.1, window.innerWidth*3.2, 2, 4) 

    }else if(window.scrollX>window.innerWidth*3.2&&window.scrollX<window.innerWidth*3.6){
      downloadsMappedMargin = map(window.scrollX, window.innerWidth*3.6, window.innerWidth*3.2, 0, 10);
      downloadsMappedSize = map(window.scrollX, window.innerWidth*3.6, window.innerWidth*3.2, 2, 4)  
    }

    if(window.scrollX>window.innerWidth*2.1&&window.scrollX<window.innerWidth*3.6){
      downloadsButton.style.margin=`0 ${downloadsMappedMargin}vw 0 ${downloadsMappedMargin}vw`;
      downloadsButton.style.fontSize=`${downloadsMappedSize}vw`;
    }else{
      downloadsButton.style.margin="0vw"
      downloadsButton.style.fontSize="2vw";
    }
})




for(let i = 0; i<logoEl.length; i++){
  logoEl[i].onclick = function(){
    window.scroll(0,0);
  }
}



aboutButton.onclick = function() {
  window.scroll(window.innerWidth,0);
}

processButton.onclick = function(){
  window.scroll(window.innerWidth*2, 0)
}

downloadsButton.onclick = function(){
  window.scroll(window.innerWidth*3, 0)
}


// prevEl.onclick = function(){
//   if(window.scrollX>window.innerWidth&&window.scrollX<window.innerWidth*2){
//     window.scroll(window.innerWidth, 0);
//   }
// }
