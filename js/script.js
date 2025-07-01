// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const brightEllipse = document.querySelector(".ellipse-bright");
const fadedEllipse = document.querySelector(".ellipse-faded");

const heading1 = document.querySelector(".headline1");
const heading2 = document.querySelector(".headline2");
const heading2blue = document.querySelector(".headline2blue");
const introPara = document.querySelector(".intro-para");
const introBtn = document.querySelector(".intro-btn");

let clutter = "";
let head1content = heading1.textContent.split("");
head1content.forEach((ch) => {
    clutter += `<span>${ch}</span>`;
})

heading1.innerHTML = clutter;

console.log(heading1);

let head1char = document.querySelectorAll(".headline1 span"); 

clutter = "";
let head2content = heading2.textContent.split("");
head2content.forEach((ch) => {
    clutter += `<span>${ch}</span>`;
})
console.log(clutter);
heading2.innerHTML = clutter;
console.log(heading2);

let head2char = document.querySelectorAll(".headline2 span"); 

clutter = "";
let head22content = heading2blue.textContent.split("");
head22content.forEach((ch) => {
    clutter += `<span>${ch}</span>`
})
heading2blue.innerHTML = clutter;

let head2bluechar = document.querySelectorAll(".headline2blue span");


let tl = gsap.timeline();

tl.from(fadedEllipse, {
    scale: 0,
    ease: "power4.out",
    duration: 2,
    opacity: 0
}, "ab")
tl.from(brightEllipse, {
    scale: 0,
    ease: "power4.out",
    delay: .2,
    duration: 2,
    opacity: 0
}, "ab")
.from(head1char, {
    opacity: 0,
    y: 100,
    duration: .03,
    stagger: .03
})
.from(head2char, {
    opacity: 0,
    y: 100,
    duration: .03,
    stagger: .03
})
.from(head2bluechar, {
    opacity: 0,
    y: 100,
    duration: .03,
    stagger: .03
})
.from(introPara, {
    y: 100,
    opacity: 0,
    duration: .5,
    ease: "power1.out"
})
.from(introBtn, {
    y: 50,
    opacity: 0,
    duration: .3,
    ease: "power1.out"
})

gsap.from(".young-brains-head", {
    opacity: 0,
    top: 90,
    duration: .4,
    ease: "power1.out",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".young-team",
        start: "top 0%",
        end: "top 20%",
        scrub: 1,
    },
})


  window.addEventListener("DOMContentLoaded", () => {
    // Only scroll to center on small screens
    if (window.innerWidth < 768) {
      const centerCard = document.getElementById("centerCard");
      centerCard?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });