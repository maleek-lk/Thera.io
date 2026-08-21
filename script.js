// Scroll reveal

const elements =
document.querySelectorAll(
".feature-card,.companion,.price-card,.questions p"
);


const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});


},
{
threshold:.15
}
);



elements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(50px)";

el.style.transition=
"1s ease";


observer.observe(el);

});





// Companion 3D movement

const cards =
document.querySelectorAll(".companion");


cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();


const x =
e.clientX-box.left;


const y =
e.clientY-box.top;



const rotateY =
(x/box.width-.5)*20;


const rotateX =
(y/box.height-.5)*-20;



card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-15px)
`;



});


card.addEventListener(
"mouseleave",
()=>{

card.style.transform="";

});

});





// Geometric particles

function createParticle(){

const p =
document.createElement("div");


p.className="particle";


p.style.left=
Math.random()*100+"vw";


p.style.animationDuration=
(5+Math.random()*6)+"s";


p.style.width=
(5+Math.random()*12)+"px";


p.style.height=
p.style.width;


document.body.appendChild(p);



setTimeout(()=>{

p.remove();

},10000);


}



setInterval(
createParticle,
500
);