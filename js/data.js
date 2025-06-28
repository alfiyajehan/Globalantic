const blogs =[
    [
    {
        id:1,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"   
    },

    {
        id:2,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:3,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:4,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:5,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:6,
        idx:0,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    }
    ],

    [
    {
        id:1,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:2,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:3,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:4,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:5,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:6,
        idx:1,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    }
    ],

    [
    {
        id:1,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:2,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:3,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:4,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:5,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    },

    {
        id:6,
        idx:2,
        src:'images/article1.png',
        title:"Latest blogs on latest topics 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, inventore!",
        date:"12th May",
        name:"Den viliamso"    
    }
    ]
];

const len = blogs.length;
let idx = 0;
document.getElementById("leftArrow").addEventListener("click",()=> {
    idx = (idx-1+len)%len;
    console.log(idx);
    blogContainer1.innerHTML = "";
    blogContainer2.innerHTML = "";

    blogs[idx].forEach((blog , id) =>{
        const blogCard = document.createElement("div");
        blogCard.className ="flex flex-col w-1/3 rounded-2xl shadow-xl"
        blogCard.innerHTML =`
        <img class="w-full" src="${blog.src}" alt="">
        <h2 class="text-3xl font-bold px-8 py-5 text-[#293349]">${blog.title}</h2>
        <p class="text-[1.15vw] px-8">${blog.description}</p>
        <span class="py-7 px-8 font-semibold">${blog.date}</span>
        <span class="py-7 px-8 font-semibold">${blog.name}</span>
        `;

        if(id<3)blogContainer1.appendChild(blogCard);
        else blogContainer2.appendChild(blogCard);

    });
    buttonUpdate(idx);
})
document.getElementById("rightArrow").addEventListener("click",()=> {
    idx = (idx+1+len)%len;
    console.log(idx);
    blogContainer1.innerHTML = "";
    blogContainer2.innerHTML = "";

        blogs[idx].forEach((blog , id) =>{
        const blogCard = document.createElement("div");
        blogCard.className ="flex flex-col w-1/3 rounded-2xl shadow-xl"
        blogCard.innerHTML =`
        <img class="w-full" src="${blog.src}" alt="">
        <h2 class="text-3xl font-bold px-8 py-5 text-[#293349]">${blog.title}</h2>
        <p class="text-[1.15vw] px-8">${blog.description}</p>
        <span class="py-7 px-8 font-semibold">${blog.date}</span>
        <span class="py-7 px-8 font-semibold"> By ${blog.name}</span>
        `;

        if(id<3)blogContainer1.appendChild(blogCard);
        else blogContainer2.appendChild(blogCard);

    });
    buttonUpdate(idx);
});

function buttonUpdate(){
    for(let i = 0; i <3 ; i++){
        if(i == idx) document.getElementById(i).className= 'w-10 h-10 bg-[#7B16EC] text-white text-xl font-semibold rounded-3xl flex justify-center items-center';
        else document.getElementById(i).className='w-10 h-10  text-[#7B16EC] text-xl font-semibold rounded-3xl flex justify-center items-center'
    }

}


const blogContainer1 = document.getElementById("blogContainer1");
const blogContainer2 = document.getElementById("blogContainer2");
blogs[idx].forEach((blog , id) =>{
    const blogCard = document.createElement("div");
    blogCard.className ="flex flex-col w-1/3 rounded-2xl shadow-xl"
    blogCard.innerHTML =`
    <img class="w-full" src="${blog.src}" alt="">
    <h2 class="text-3xl font-bold px-8 py-5 text-[#293349]">${blog.title}</h2>
    <p class="text-[1.15vw] px-8">${blog.description}</p>
    <span class="py-7 px-8 font-semibold text-sm text-[#2e3245]">
    ${blog.date}
    </span>

    <span class="py-1 px-8 font-semibold text-sm text-[#2e3245] uppercase">
    By 
    <span class="ml-1 border-b-2 border:[#2110a8] text-[#2110a8] transition duration-300 cursor-pointer">
        ${blog.name}
    </span>
    `;

    if(id<3)blogContainer1.appendChild(blogCard);
    else blogContainer2.appendChild(blogCard);

});


const blog = document.querySelector(".blog");
const downArrow = document.querySelector(".downArrow");
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

