let tl = gsap.timeline();

tl.from(".joinOurTeam",{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(".downArrow",{
    y:-50,
    duration:0.7,
    opacity:0
})

tl.from(".joinTheTeam",{
    y:100,
    opacity:0,
    duration:0.7,
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

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".stepAhead",
        scroller:"body",
        start:"top 85%",
    }
});

tl2.from(".stepAhead",{
    y:50,
    opacity:0,
    duration:0.6
})

tl2.from(".team",{
    y:50,
    opacity:0,
    duration:0.6
})

let tl3 = gsap.timeline({
        scrollTrigger:{
        trigger:".row1",
        scroller:"body",
        start:"top 78%",
    }
}  
);
tl3.from(".row1",{
    y:50,
    opacity:0,
    duration:0.7,
})
.from(".row2",{
    y:50,
    opacity:0,
    duration:0.7,
})

.from(".coverMessage",{
    y:50,
    opacity:0,
    duration:0.7,
})

tl3.from(".button",{
    y:50,
    opacity:0,
    duration:0.7,
})

