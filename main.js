let chat=document.getElementById("chat");
let far=document.getElementById("far");
let navbar=document.getElementById("nav-bar");
let title=document.getElementById("title");
let healthy=document.getElementById("healthy");
let photos=document.getElementById("photos");
let pic=document.getElementsByClassName("pic");
let Products=document.getElementById("Products");
let Product=document.getElementById("Product");
let fruit=document.getElementById("fruit");
let Vegetables=document.getElementById("Vegetables");
let Fresh=document.getElementById("Fresh");
let shop=document.getElementById("shop");
let Benefits=document.getElementById("Benefits");
let blabla=document.getElementById("blabla");
let Blog=document.getElementById("Blog");
let titlee=document.getElementById("titlee");
let left=document.getElementById("left");
let center=document.getElementById("center");
let right=document.getElementById("right");
let Testimonials =document.getElementById("Testimonials");
let Clients=document.getElementById("Clients");
let opinion=document.getElementsByClassName("opinion");
let Subscribe=document.getElementById("Subscribe");
let Newsletter=document.getElementById("Newsletter");
let form=document.getElementById("form");




function chatme(){
    chat.classList.add("show-chat");
    far.classList.add("show-far");
}
function closechat(){
    chat.classList.remove("show-chat");
    far.classList.remove("show-far")
}



window.onscroll = function(){
    if(this.scrollY>200){
        navbar.style.backgroundColor="#8B8B8B";
    }else{
        navbar.style.backgroundColor="white";
    }
    if(window.scrollY>healthy.offsetTop -100){
        title.classList.add("show-title");
    }
    if(window.scrollY>photos.offsetTop -500){
        for(i=0;i<pic.length;i++){
            pic[i].classList.add("show");
    }
}
    if(window.scrollY>Products.offsetTop -600){
        Product.classList.add("titlee");
    }
     if(window.scrollY>fruit.offsetTop -100){
        Vegetables.classList.add("show-Vegetables");
        Fresh.classList.add("show-Fresh");
        shop.classList.add("visible");
     }
     if(window.scrollY>Benefits.offsetTop -200){
        blabla.classList.add("visible-img");
     }
     if(window.scrollY>Blog.offsetTop -300){
        titlee.classList.add("show-title");
        left.classList.add("show-left");
        left.classList.add("show-left");
        center.classList.add("show-center");
        right.classList.add("show-right");
     }
if(window.scrollY>Testimonials.offsetTop -700){
    Clients.classList.add("show-Clients");
    for(i=0; i<opinion.length;i++){
        opinion[i].classList.add("show-opinion");
    }
}
if(window.scrollY>Subscribe.offsetTop -300){
    Newsletter.classList.add("show-Newsletter");
    form.classList.add("show-form");
}
}

