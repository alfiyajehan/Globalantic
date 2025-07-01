let tl1 = gsap.timeline();

tl1.from(".pricing",{
    y:50,
    duration:1,
    opacity:0
},"section1")

.from(".downArrow",{
    y:-50,
    duration:1,
    opacity:0
},"section1")

.from(".packageSection",{
    y:50,
    opacity:0,
    duration:0.7,
})

gsap.from(".pricingPackage",{
    y:50,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
    trigger: ".pricingPackage",
    scroller:"body",
    start:"top 79%"
    }

})

let tl2 = gsap.timeline({
    scrollTrigger:{
    trigger: ".card1",
    scroller:"body",
    start:"top 74%",
}
});
tl2.from(".card1",{
    x:40,
    opacity:0,
    duration:1,

},"card")

.from(".card2",{
    opacity:0,
    duration:1,

},"card")

.from(".card3",{
    x:-40,
    opacity:0,
    duration:0.7,
},"card")

gsap.from(".matterSection .heading",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.5,
        scrollTrigger:{
        trigger: ".matterSection .heading",
        scroller:"body",
        start:"top 67%",
    }
})

let tl3 = gsap.timeline({
        scrollTrigger:{
        trigger: ".row",
        scroller:"body",
        start:"top 65%",
    }
});
tl3.from(".row",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.5

})

.from(".btn",{
    y:50,
    opacity:0,
    duration:0.7,

})

gsap.from(".pricingImage",{
    opacity:0,
    duration:1,
    delay:0.4,
        scrollTrigger:{
        trigger: ".pricingImage",
        scroller:"body",
        start:"top 61%"
    }
})

gsap.from(".serviceSection",{
    y:10,
    opacity:0,
    duration:0.9,
    stagger:0.4,
    delay:0.4,
        scrollTrigger:{
        trigger: ".serviceSection",
        scroller:"body",
        start:"top 61%",
    }
})


