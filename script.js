/* =========================
   THERA INTERACTIONS
========================= */



// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


},
{
threshold:.15
}
);



reveals.forEach(section=>{

observer.observe(section);

});






// Companion Selection


const companions =
document.querySelectorAll(".companion-card");


companions.forEach(card=>{


card.addEventListener("click",()=>{


companions.forEach(item=>{

item.classList.remove("active");

});


card.classList.add("active");


});


});







// Cosmic Particles


const stars =
document.querySelector(".stars");


for(let i=0;i<80;i++){


const particle =
document.createElement("span");


particle.className="particle";


particle.style.left =
Math.random()*100+"%";


particle.style.top =
Math.random()*100+"%";


particle.style.animationDelay =
Math.random()*5+"s";


stars.appendChild(particle);


}








// Buttons


const buttons =
document.querySelectorAll(".action-btn");



const WHATSAPP_LINK =
"https://wa.me/YOUR_NUMBER";



const FLUTTERWAVE_LINK =
"YOUR_FLUTTERWAVE_PAYMENT_LINK";



buttons.forEach(button=>{


button.addEventListener("click",()=>{


const type =
button.dataset.link;



if(type==="whatsapp"){

window.open(
WHATSAPP_LINK,
"_blank"
);


}



if(type==="flutterwave"){

window.open(
FLUTTERWAVE_LINK,
"_blank"
);


}



});


});







// Floating geometric particles


const shapes =
[
"◆",
"◇",
"✦",
"✧",
"○"
];



for(let i=0;i<25;i++){


const shape =
document.createElement("div");


shape.className="geo";


shape.innerHTML =
shapes[
Math.floor(
Math.random()*shapes.length
)
];



shape.style.left =
Math.random()*100+"vw";


shape.style.top =
Math.random()*100+"vh";


shape.style.animationDelay =
Math.random()*10+"s";



document.body.appendChild(shape);


}