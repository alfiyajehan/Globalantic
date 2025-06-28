let tl = gsap.timeline();
tl.from(".joinOurTeam",{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(".downArrow",{
    y:-50,
    duration:1,
    opacity:0
})

tl.from(".joinTheTeam",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.5
})

gsap.from(".cards",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 90%",
    }
})

gsap.from(".requestQuote",{
    y:50,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".requestQuote",
        scroller:"body",
        start:"top 90%",
    }
})