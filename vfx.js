const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


let tl = gsap.timeline({scrollTrigger:{
  trigger:".part-1",
  start:"50% 50%",
  end:"350% 50%",
  scrub:true,
  // markers:true,
  pin:true

}})

tl.to(".rotate-div",{
  rotate:-15,
  scale:0.8,
  skewX:1
},'a')

.to("#row-div-1",{
  marginTop:"-15%"
},'a')
.to("#row-div-2",{
  marginTop:"-25%"
},'a')

.to("#row-div-3",{
  marginTop:"-29%"
},'a')

.to("#row-div-4",{
  marginTop:"-25%"
},'a')

.to("#row-div-5",{
  marginTop:"-10%"
},'a')

.to(".overlay-div img",{
  opacity:1,
},'a')

.to(".overlay-div",{
  backgroundColor: "#000000ba"
},'a')

.to(".scrolling",{
  width:"100%"
},'a');



// HOME SECTION TWO START HERE------------------------
let typeSplit = new SplitType('.home-sec-three-wrap h1', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('.home-sec-three-wrap .word', {
  y: '100%',
  opacity: 1,
  duration: 1,
  stagger:0.05,
  ease: 'power1.out',
  
  scrollTrigger: {
    trigger: '.home-sec-three-wrap h1',
    start: 'top center',
    // markers:true
    
  }
})

// HOME SECTION TWO END HERE------------------------


gsap.set(".home-sec-services-heading h3",{
  x:"100%",  
  skewX:-5,
})

gsap.to(".home-sec-services-heading h3",{
  x:"-100%",
  skewX:5,
  ease:"linner",
  fontWeight:100,
  scrollTrigger:{
    trigger:".home-sec-services-heading",
    pin:true,
    start:"top top",
    end:"700% 100%",
    scrub:true,
    // markers:true
  } 
})


// HOME SECTION SERVICES START HERE------------------------

// HOME SECTION FIVE START HERE
const textYMove = [-100, 200, -50, 150, -90, 100, -200, 70, -100];
const textRMove = [-10, -20, -50, 50, -90, 100, -40, 70, -100];
const textScale = [2, 2, -1, 4, 2, -1, 2, 1, 3];
const imgYMove = [-10, -200, -50, 150, -90, 100, -200, 70, -100];
const imgRMove = [50, -60, 70, 20, -66, 100, -40, 70, -100];
const sec5Text = document.querySelectorAll(".home-sec-five-text span");
const sec5Img = document.querySelectorAll(".home-sec-five-images span img");
const homeSecFiveWrap = document.querySelectorAll(".home-sec-five-wrap");

ScrollTrigger.create({
  trigger:homeSecFiveWrap,
  start:"top top",
      end:"300%",
      pin:true,
      // markers:true

})

gsap.set(sec5Img,{
  y:"100vh"
})


textYMove.forEach((textmove, index) => {
  gsap.to(sec5Text[index], {
    rotate: textRMove[index],
    y: textmove,
    stagger:3,
    scale:textScale[index],
    duration: 10,
    ease: "power2.inOut",
    scrollTrigger:{
      trigger:sec5Text,
      start:"top top",
      end:"400%",
      scrub:3
    }
  });
});


imgYMove.forEach((imgmove, index) => {
  gsap.to(sec5Img[index], {
    rotate: imgRMove[index],
    y: imgmove,
    scale:1.2,
    duration: 50,
    ease: "power2.inOut",
    delay:-3,
    scrollTrigger:{
      trigger:sec5Img,
      start:"-30%",
      end:"400%",
      scrub:3,
      // markers:true
    }
  });
});


// HOME SECTION FIVE END HERE


gsap.set(".por-image img",{
  scale:1.1,
  // y:50
})

gsap.to(".por-image img",{
  y:-20,
  // duration:20,
  scrollTrigger:{
    trigger:".work-con",
    start:"top top",
    end:"200% bottom",
    scrub:1,
    // markers:true
  }
})


const team = [
  { name: "Haris Ali", role: "Founder / Director" },
  { name: "Syed Ghazi Ali", role: "Founder / CEO" },
  { name: "Zafar Zaidi", role: "Executive Producer" },
  { name: "Jaweria Ali", role: "Marketing Director" },
  { name: "Sabeen Abbasi", role: "Production Manager" },
];

const cursor = document.querySelector('.cursor');
const cursorIcon = cursor.querySelector('i');

const cursorWidth = cursor.offsetWidth / 2;
const cursorHeight = cursor.offsetHeight / 2;

let currentSlide = 1;
const totalSlides = 5;

const updateCursorClass = (xPosition) => {
const halfPageWidth = window.innerWidth / 2;
if (xPosition > halfPageWidth) {
  if (currentSlide < totalSlides) {
    cursorIcon.classList.remove('ph-arrow-left');
    cursorIcon.classList.add('ph-arrow-right');
    cursor.style.display = '';
  } else {
    cursor.style.display = 'none';
  }
} else {
  if (currentSlide > 1) {
    cursorIcon.classList.remove('ph-arrow-right');
    cursorIcon.classList.add('ph-arrow-left');
    cursor.style.display = '';
  } else {
    cursor.style.display = 'none';
  }
}
}

document.addEventListener('mousemove', (e) => {
gsap.to(cursor, {
  x: e.clientX - cursorWidth,
  y: e.clientY - cursorHeight,
  duration: 1,
  ease: "power3.out"
});

updateCursorClass(e.clientX);
});

const updateInfo = (slideNumber) => {
const member = team[slideNumber - 1];
document.querySelector('.info .name').textContent = member.name;
document.querySelector('.info .role').textContent = member.role;
};

const animateSlide = (slideNumber, reveal) => {
const marquee = document.querySelector(`.t-${slideNumber}.marquee-wrapper`);
const img = document.getElementById(`t-${slideNumber}`);
const clipPathValue = reveal ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)';

gsap.to(marquee, { clipPath: clipPathValue, duration: 1, ease: "power4.out", delay: 0.3 });

gsap.to(img, { clipPath: clipPathValue, duration: 1, ease: "power4.out" });
};

updateInfo(currentSlide);

const handleRightClick = () => {
if (currentSlide < totalSlides) {
  animateSlide(currentSlide + 1, true);
  currentSlide++;
  updateInfo(currentSlide);
}
}

const handleLeftClick = () => {
if (currentSlide > 1) {
  animateSlide(currentSlide, false);
  currentSlide--;
  updateInfo(currentSlide);
}
}

document.addEventListener('click', (e) => {
const halfPageWidth = window.innerWidth / 2;
if (e.clientX > halfPageWidth) {
  handleRightClick();
} else {
  handleLeftClick();
}
})