// =======================================
// DailyDealsHub V3 JavaScript
// =======================================

// Smooth scrolling for menu links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// =======================================
// Back To Top Button
// =======================================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// Hide button on page load

topBtn.style.display="none";


// =======================================
// Navbar Shadow on Scroll
// =======================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 6px 20px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";

}

});


// =======================================
// Product Card Hover Effect
// =======================================

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// =======================================
// Buy Button Animation
// =======================================

const buttons=document.querySelectorAll(".buy-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.innerHTML="Redirecting...";

setTimeout(()=>{

button.innerHTML="Buy on Amazon";

},1500);

});

});


// =======================================
// Active Navigation Highlight
// =======================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =======================================
// Fade In Animation
// =======================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".product-card,.category-card,.about-card").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".6s";

observer.observe(item);

});


// =======================================
// Welcome Message
// =======================================

window.addEventListener("load",()=>{

console.log("Welcome to DailyDealsHub!");

});


// =======================================
// End of JavaScript
// =======================================
