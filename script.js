

let barbtn = document.querySelector(".bars i");
let maincontent = document.querySelector(".maincontent");

let sidebar = document.querySelector(".sidebar");

let backbtn = document.querySelector(".backbtn");
let nextbtn = document.querySelector(".nextbtn");
let index = 0;
let dot = document.querySelectorAll(".dot")
let image = document.querySelectorAll(".image")

let autoslide;

let allimages = document.querySelector(".images");

autoslide = setInterval(function () {
        image[index].classList.remove("active")
        dot[index].classList.remove("active")
        index++;
        if (index >= image.length) {
            index = 0
        }
        image[index].classList.add("active")
        dot[index].classList.add("active")
    }, 3000)

    allimages.addEventListener("mouseover", function () {
    clearInterval(autoslide)
})

allimages.addEventListener("mouseout", function () {
    autoslide = setInterval(function () {
        image[index].classList.remove("active")
        dot[index].classList.remove("active")
        index++;
        if (index >= image.length) {
            index = 0
        }
        image[index].classList.add("active")
        dot[index].classList.add("active")
    }, 3000)
})


barbtn.addEventListener("click", function () {
    sidebar.classList.toggle("showsidebar")
    maincontent.classList.toggle("blur");
    if (barbtn.classList.contains("fa-bars")) {
        barbtn.classList.remove("fa-bars")
        barbtn.classList.add("fa-xmark")
    } else if (barbtn.classList.contains("fa-xmark")) {
        barbtn.classList.remove("fa-xmark")
        barbtn.classList.add("fa-bars")
    }
})





backbtn.addEventListener("click", function () {
    image[index].classList.remove("active")
    dot[index].classList.remove("active")
    index--;
    if (index < 0) {
        index = image.length - 1
    }
    image[index].classList.add("active")
    dot[index].classList.add("active")
})

nextbtn.addEventListener("click", function () {
    image[index].classList.remove("active")
    dot[index].classList.remove("active")
    index++;
    if (index >= image.length) {
        index = 0
    }
    image[index].classList.add("active")
    dot[index].classList.add("active")
})



dot.forEach(function (d, i) {
    d.addEventListener("click", function () {
        image[index].classList.remove("active")
        dot[index].classList.remove("active")
        index = i;
        image[index].classList.add("active")
        dot[index].classList.add("active")
    })
})

let allques= document.querySelectorAll(".faq h1")

allques.forEach(function(item,currindex){
    item.addEventListener("click",function(){
        item.nextElementSibling.classList.toggle("show")
        if(item.lastElementChild.innerHTML=="+"){
            item.lastElementChild.innerHTML="-"
        }else{
            item.lastElementChild.innerHTML="+"
        }

        allques.forEach(function(ques,idx){
        if(currindex !== idx){
            ques.nextElementSibling.classList.add("show")
            ques.lastElementChild.innerHTML="+"
        }
    })
    })

    
})

let loginbtn= document.querySelector(".loginbtn")
let loginbox=document.querySelector(".loginbox")
let loginclose=document.querySelector(".loginbox m")
let navbar =document.querySelector(".navbar")


loginbtn.addEventListener("click",function(){
    loginbox.classList.add("showlogin")
    maincontent.classList.add("blur");
    navbar.classList.add("blur")
})
loginclose.addEventListener("click",function(){
    loginbox.classList.remove("showlogin")
    maincontent.classList.remove("blur");
     navbar.classList.remove("blur")
})

let loginbtn2=document.querySelector(".loginbtn2")
let loginbox2=document.querySelector(".loginbox2")
let loginclose2=document.querySelector(".loginbox2 m")

loginbtn2.addEventListener("click",function(){
    loginbox2.classList.add("showlogin2")
    
    sidebar.classList.add("blur")
})
loginclose2.addEventListener("click",function(){
    loginbox2.classList.remove("showlogin2")
    
    sidebar.classList.remove("blur")
})

let eye=document.querySelector(".loginbox i");

let passbox=document.querySelector("#passbox");

eye.addEventListener("click",function(){
    if(passbox.type=="password"){
        passbox.type = "text" 
    }else{
        passbox.type="password"
    }
    if(eye.classList.contains("fa-eye-slash")){
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    } else {
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    }
})





let eye2=document.querySelector(".loginbox2 i");

let passbox2=document.querySelector("#passbox2");

eye2.addEventListener("click",function(){
    if(passbox2.type=="password"){
        passbox2.type = "text" 
    }else{
        passbox2.type="password"
    }
    if(eye2.classList.contains("fa-eye-slash")){
        eye2.classList.remove("fa-eye-slash")
        eye2.classList.add("fa-eye")
    } else {
        eye2.classList.remove("fa-eye")
        eye2.classList.add("fa-eye-slash")
    }
})





let startX = 0
let endX = 0
let imagebox = document.querySelector(".images")

imagebox.addEventListener("touchstart", function(event){
   startX = event.changedTouches[0].screenX
})

imagebox.addEventListener("touchend", function(event){
   endX = event.changedTouches[0].screenX

   let swipedist= endX - startX;

if(swipedist < -50){
   image[index].classList.remove("active")
    dot[index].classList.remove("active");
   index++;
   if(index >= image.length){
      index = 0
   }
   image[index].classList.add("active")
   dot[index].classList.add("active");

} else if(swipedist > 50){
   image[index].classList.remove("active")
    dot[index].classList.remove("active");
   index--;
   if(index < 0){
      index = image.length -1 
   }
   image[index].classList.add("active")
   dot[index].classList.add("active");
}
})














