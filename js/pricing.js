const about = document.querySelector(".pricing");
const downArrow = document.querySelector(".downArrow");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const requestQuote = document.querySelector(".requestQuote");
const pricingImage = document.querySelector(".pricingImage");
const serviceSection = document.querySelector(".serviceSection");


gsap.from(about,{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(downArrow,{
    y:-50,
    duration:1,
    opacity:0
})

gsap.from(".packageSection .pricingPackage",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5
})

gsap.from(card1,{
    x:40,
    opacity:0,
    duration:1,
        scrollTrigger:{
        trigger: card1,
        scroller:"body",
        start:"top 70%",
    }
})

gsap.from(card2,{
    opacity:0,
    duration:1,
        scrollTrigger:{
        trigger: card1,
        scroller:"body",
        start:"top 70%",
    }
})

gsap.from(card3,{
    x:-40,
    opacity:0,
    duration:0.7,
        scrollTrigger:{
        trigger: card1,
        scroller:"body",
        start:"top 70%",
    }
})

gsap.from(".matterSection .heading",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.4,
        scrollTrigger:{
        trigger: ".matterSection .heading",
        scroller:"body",
        start:"top 67%",
    }
})


gsap.from(".name",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.4,
        scrollTrigger:{
        trigger: ".name",
        scroller:"body",
        start:"top 65%",
    }
})

gsap.from(".email",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.4,
        scrollTrigger:{
        trigger: ".email",
        scroller:"body",
        start:"top 65%",
    }
})

gsap.from(".message",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.4,
        scrollTrigger:{
        trigger: ".message",
        scroller:"body",
        start:"top 63%",
    }
})

gsap.from(requestQuote,{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.4,
        scrollTrigger:{
        trigger: requestQuote,
        scroller:"body",
        start:"top 63%",
    }
})

gsap.from(pricingImage,{
    opacity:0,
    duration:0.7,
    stagger:0.4,
    delay:0.4,
        scrollTrigger:{
        trigger: pricingImage,
        scroller:"body",
        start:"top 61%",
    }
})

gsap.from(serviceSection,{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.4,
    delay:0.4,
        scrollTrigger:{
        trigger: serviceSection,
        scroller:"body",
        start:"top 61%",
    }
})


