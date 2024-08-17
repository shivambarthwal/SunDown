const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function pageAnimation(){
    
let element1 = document.querySelector("#elem-container")
let fixed = document.querySelector('#fixed-image')
element1.addEventListener("mouseenter",()=>{
    fixed.style.display ="block"
})
element1.addEventListener("mouseleave",()=>{
    fixed.style.display ="none"
})


//For One - element only we have to repeat it for 7 times that's why we will use Loop
// let elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     let image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })

let elems = document.querySelectorAll(".elem")
elems.forEach((e)=>{
e.addEventListener("mouseenter",()=>{
    let image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
})
}

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 80,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

pageAnimation()
swiperAnimation()

 let menu = document.querySelector("nav h3")
 let full = document.querySelector("#full-scr")
 let navimg = document.querySelector("nav img")
 let flag = 0
 menu.addEventListener("click",()=>{
    if(flag==0){
    full.style.top = 0
    navimg.style.opacity = 0
    flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
 })


 let loader = document.querySelector("#loader")
 setTimeout(()=>{
    loader.style.top = "-100%"
 },4000)