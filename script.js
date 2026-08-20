
// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".feature-card, .companion, .price-card, .questions p"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);



revealElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});




// Companion card interaction

const companions = document.querySelectorAll(".companion");


companions.forEach((card)=>{

    card.addEventListener("mouseenter", ()=>{

        card.style.boxShadow =
        "0 20px 50px rgba(155,108,255,0.35)";

    });


    card.addEventListener("mouseleave", ()=>{

        card.style.boxShadow = "none";

    });

});




// Smooth button scroll

const buttons = document.querySelectorAll("button");


buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        document.querySelector(".pricing")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});




// Floating background particles

const createParticle = ()=>{

    const particle = document.createElement("div");

    particle.className="particle";


    particle.style.left =
    Math.random()*100+"vw";


    particle.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },10000);

};



setInterval(createParticle,700);
