let tl1 = gsap.timeline();

tl1.from(".about",{
    y:50,
    duration:1,
    opacity:0
},"section1")

.from(".downArrow",{
    y:-50,
    duration:1,
    opacity:0
},"section1")

.from(".aboutCompany",{
    y:20,
    opacity:0,
    duration:0.5,
})

gsap.from(".growBusiness",{
    y:50,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger: ".growBusiness",
        scroller:"body",
        start:"top 60%"
    }
},"section2")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#line1",
        scroller:"body",
        start:"top 60%",
    }
},"section2");

tl2.from("#line1",{
    y:50,
    opacity:0,
    duration:0.6,
})

.from("#line2",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#line3",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#line4",{
    y:50,
    opacity:0,
    duration:0.6,
})

gsap.from(".card",{
    y:30,
    opacity:0,
    duration:0.5,
    stagger:0.5,
        scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        start:"top 78%"
    }
})

gsap.from(".somethingGreat",{
    y:20,
    opacity:0,
    duration:1,
        scrollTrigger:{
        trigger: ".somethingGreat",
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(".aboutRgt",{
    y:50,
    opacity:0,
    duration:0.7,
        scrollTrigger:{
        trigger: ".aboutRgt",
        scroller:"body",
    }

})

gsap.from(".aboutImage",{
    opacity:0,
    duration:0.7,
    delay:0.5,
    scrollTrigger:{
        trigger: ".aboutImage",
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from(".matter2",{
    y:50,
    opacity:0,
    duration:0.5,
        scrollTrigger:{
        trigger: ".matter2",
        scroller:"body",
        start:"top 70%",
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
        start:"top 60%"
    }
})

let tl3 = gsap.timeline({
        scrollTrigger:{
        trigger: ".aboutText",
        scroller:"body",
        start:"top 85%"
    }
});
tl3.from(".aboutText",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.3,
})

.from(".joinButton",{
    y:50,
    opacity:0,
    duration:0.7,
})





