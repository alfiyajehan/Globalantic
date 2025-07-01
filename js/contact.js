let tl = gsap.timeline();

tl.from(".contact",{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(".downArrow",{
    y:-50,
    duration:0.7,
    opacity:0
})

let t2 = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".aboutCompany",
        start: "top 88%"
    }
});
t2.from(".aboutCompany",{
    y:50,
    opacity:0,
    duration:0.7,
})
.from(".matter1",{
    y:50,
    opacity:0,
    duration:0.6,
},"section1")

let tl3 = gsap.timeline({
    scrollTrigger:{
    scroller:"body",
    trigger:".aboutCompany",
    start: "top 88%"
    }
},"section1")

tl3.from("#text1",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#text2",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#text3",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#text4",{
    y:50,
    opacity:0,
    duration:0.6,
})
.from("#text5",{
    y:50,
    opacity:0,
    duration:0.6,
})

gsap.from(".infoSection .infoCol",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger:".infoSection .infoCol",
        scroller:"body",
        start:"top 85%"
    }
})

gsap.from(".greatWork",{
    x:40,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
    trigger:".greatWork",
    scroller:"body",
    start:"top 80%",
    }
})

let tl4 = gsap.timeline(
    {
        scrollTrigger:{
        trigger:".about2",
        scroller:"body",
        start:"top 84%",
    }
}
);

tl4.from(".about2",{
    y:100,
    opacity:0,
    duration:0.7,

})
.from(".helpYou",{
    y:100,
    opacity:0,
    duration:0.7,
})

let tl5 = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger: ".form",
        start:"top 67%",
    }
});

tl5.from(".form .row",{
    y:10,
    opacity:0,
    duration:1,
    stagger:0.5,

})

tl5.from(".btn",{
    y:50,
    duration:0.7,
})
