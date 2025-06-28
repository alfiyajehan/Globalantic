const blog = document.querySelector(".blog");
const downArrow = document.querySelector(".downArrow");
const blogContainer1 = document.querySelector("#blogContainer1");
const blogContainer2 = document.querySelector("#blogContainer2");
var tl = gsap.timeline();

gsap.from(blog,{
    y:50,
    duration:1,
    opacity:0
})

gsap.from(downArrow,{
    y:-50,
    duration:1,
    opacity:0
})

tl.from(blogContainer1,{
    y:100,
    duration:0.7,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:blogContainer1,
        scroller:"body",
        start:"top 80%"

    }
})

tl.from(blogContainer2,{
    y:100,
    duration:0.7,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:blogContainer2,
        scroller:"body",

    }
})