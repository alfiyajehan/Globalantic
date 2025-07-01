let tl1 = gsap.timeline();

tl1.from(".service",{
    y:50,
    duration:1,
    opacity:0
},"section1")

.from(".downArrow",{
    y:-50,
    opacity:0,
    duration:1,
},"section1")

gsap.from(".dataSection",{
     opacity: 0,
    rotateX: 50,
    scale: 1.1,
    duration: 1,
    ease: "easeOutQuad",
    transformOrigin: "center center",

},"section2")


let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".dataSection",
        scroller:"body",
        start:"top 90%"
    }
});


tl2.from(".creativeApproach",{
  y: 20,
  opacity: 0,
  duration: 0.7
},"section2")

.from(".growBusiness", {
  y: 30,
  opacity: 0,
  duration: 0.7
})
.from(".text", {
  y: 30,
  opacity: 0,
  duration: 0.7
})
.from(".bestServices", {
  y: 30,
  opacity: 0,
  duration: 0.7
})
.from(".rating", {
  y: 30,
  opacity: 0,
  duration: 0.5
});

let tl3 = gsap.timeline({

    scrollTrigger:{
      trigger: ".creative",
      scroller:"body",
      start:"top 85%",
  }
}
);

tl3.from(".creative",{
    y:50,
    opacity:0,
    duration:0.7,

})

.from(".ourServices",{
    y:50,
    opacity:0,
    duration:0.7,
})
.from(".card div",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,

})