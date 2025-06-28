const about = document.querySelector(".about");
const downArrow = document.querySelector(".downArrow");
const aboutCompany = document.querySelector(".aboutCompany");
const growBusiness = document.querySelector(".growBusiness");
const line = document.querySelectorAll(".line");
const card = document.querySelectorAll(".card");
const somethingGreat = document.querySelector(".somethingGreat");
const aboutRgt = document.querySelector(".aboutRgt");
const aboutImage = document.querySelector(".aboutImage");
const matter2 = document.querySelector(".matter2");
const aboutText = document.querySelector(".aboutText");
const joinButton = document.querySelector(".joinButton");


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

gsap.from(aboutCompany,{
    y:20,
    opacity:0,
    duration:0.5,
})

gsap.from(growBusiness,{
    y:15,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger: growBusiness,
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(".matter1 .line",{
    y:25,
    opacity:0,
    duration:1,
    stagger:0.4,
        scrollTrigger:{
        trigger: ".line",
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(card,{
    y:30,
    opacity:0,
    duration:0.5,
    stagger:0.2,
        scrollTrigger:{
        trigger: card,
        scroller:"body",
        start:"top 76%"
    }
})

gsap.from(somethingGreat,{
    opacity:0,
    duration:1,
        scrollTrigger:{
        trigger: somethingGreat,
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(aboutRgt,{
    y:20,
    opacity:0,
    duration:0.5,
        scrollTrigger:{
        trigger: aboutRgt,
        scroller:"body",
    }

})

gsap.from(aboutImage,{
    opacity:0,
    duration:0.7,
    delay:0.5,
    scrollTrigger:{
        trigger: aboutImage,
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(matter2,{
    y:50,
    opacity:0,
    duration:0.5,
        scrollTrigger:{
        trigger: matter2,
        scroller:"body",
        start:"top 50%",
    }
})

gsap.from(".abtImg img",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.3,
        scrollTrigger:{
        trigger: ".abtImg img",
        scroller:"body",
        start:"top 50%", 
    }
})

gsap.from(aboutText,{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.3,
        scrollTrigger:{
        trigger: aboutText,
        scroller:"body",
        start:"top 90%", 
    }
})

gsap.from(joinButton,{
    y:50,
    opacity:0,
    duration:0.5,
        scrollTrigger:{
        trigger: joinButton,
        scroller:"body",
        start:"top 83%", 
    }
})





