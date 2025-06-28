const service = document.querySelector(".service");
const downArrow = document.querySelector(".downArrow");
const creativeApproach = document.querySelector(".creativeApproach");
const growBusiness = document.querySelector(".growBusiness");
const text = document.querySelector(".text");
const bestServices = document.querySelector(".bestServices");
const rating = document.querySelector(".rating");
const rgt = document.querySelector(".rgt");
const dataSection =document.querySelector(".dataSection")
const creative =document.querySelector(".creative")
const ourServices =document.querySelector(".ourServices")

gsap.from(service,{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(downArrow,{
    y:-50,
    duration:1,
    opacity:0
})

gsap.from(dataSection,{
    rotateX: 100,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    transformOrigin: "center",
    scrollTrigger:{
        trigger:dataSection,
        scroller:"body",
        start:"top 97%",
    }
})

gsap.timeline({
  scrollTrigger: {
    trigger: rgt, 
    start: "top 80%",              
    scroller: "body",                         
  }
})
.from(creativeApproach, {
  y: 20,
  opacity: 0,
  duration: 0.5
})
.from(growBusiness, {
  y: 30,
  opacity: 0,
  duration: 0.5
})
.from(text, {
  y: 30,
  opacity: 0,
  duration: 0.5
})
.from(bestServices, {
  y: 30,
  opacity: 0,
  duration: 0.5
})
.from(rating, {
  y: 30,
  opacity: 0,
  duration: 0.5
});


gsap.from(creative,{
    y:50,
    opacity:0,
    duration:1,
        scrollTrigger:{
        trigger: creative,
        scroller:"body",
        start:"top 90%",
    }
})

gsap.from(ourServices,{
    y:50,
    opacity:0,
    duration:1,
      scrollTrigger:{
      trigger: creative,
      scroller:"body",
      start:"top 90%",
    }
})
gsap.from(".card div",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
    trigger: ".card div",
    scroller:"body",
    start:"top 85%",
  }
})