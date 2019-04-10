var carouselContainer = document.querySelector(".carousel-container");
var carouselSlide = document.querySelector(".carousel-slide");
var imageSlide = document.querySelectorAll(".carousel-slide img");

var nextBtn = document.querySelector("#next");
var previousBtn = document.querySelector("#prev");
let counter = 1;

const size = imageSlide[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px";

nextBtn.addEventListener("click", () =>{
    if(counter >= imageSlide.length -1 ) return;
   carouselSlide.style.transition =  "transform 0.4s ease-in-out";  
    counter++
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px";

    
});
previousBtn.addEventListener("click", () =>{
    if(counter <= 0) return;
   carouselSlide.style.transition =  "transform 0.4s ease-in-out";  
    counter--
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px";

    
});

carouselSlide.addEventListener("transitionend", () =>{
    if(imageSlide[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = imageSlide.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px";
    }if(imageSlide[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = imageSlide.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px";
    }
})


