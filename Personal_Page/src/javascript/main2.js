function loading() {
  if(window === onload){
    document.querySelector('.loading').style.css = 'block'
    document.querySelector('.finish').style.css = 'none'
  }else{
    document.querySelector('.loading').style.css = 'none'
    document.querySelector('.finish').style.css = 'block'
  }
}

window.addEventListener('load', loading)

/* --------------------------------------------------------------------- */
/* ----------------------------Nav-Bar animation------------------------ */
/* --------------------------------------------------------------------- */

const navBtn = document.querySelector('.navBtn');
const navLinks = document.querySelector('.navLinks')

function navigation(){
    navLinks.classList.toggle('open');
    navLinks.style.transition = 'transform 0.5s ease-in';
};

navBtn.addEventListener('click', navigation);

/* --------------------------------------------------------------------- */
/* ----------------------------Stop animation--------------------------- */
/* --------------------------------------------------------------------- */

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


/* --------------------------------------------------------------------- */
/* ----------------------------scroll top------------------------------- */
/* --------------------------------------------------------------------- */
const scrollBtn = document.querySelector('#routeToTop')

function showScrollBtn(){
    if(window.pageYOffset < 100){
        scrollBtn.style.display = 'none'
    }else{
        scrollBtn.style.display = 'flex'
    }
};
window.addEventListener('scroll', showScrollBtn);

/* --------------------------------------------------------------------- */
/* ----------------------------fade in animation------------------------ */
/* --------------------------------------------------------------------- */

gsap.from('nav', 2, { autoAlpha: 0, esae: Power0.easeNone })
gsap.from('.sliderText', 2, { autoAlpha: 0, esae: Power0.easeNone, delay: 1 })
gsap.from('.slideContainer', 2, { autoAlpha: 0, esae: Power0.easeNone })



gsap.from('.selfImg', {
  x: -250,
  duration: 1.5,
  autoAlpha: 0,
  scrollTrigger: '.about'
})

gsap.from('.aboutME', {
  x: +250,
  duration: 1.5,
  delay: 1,
  autoAlpha: 0,
  scrollTrigger: '.about'
})

gsap.from('.project', {
  x: -250,
  autoAlpha: 0,
  duration: 1.5,
  delay: 1,
  scrollTrigger: '.project'
})

gsap.from('.projectTitle', {
  y: 100,
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: '.project'
})


gsap.from('.name', {
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: '.name'
})
gsap.from('.phone', {
  autoAlpha: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: '.name'
})
gsap.from('.email', {
  autoAlpha: 0,
  duration: 1,
  delay: 2,
  scrollTrigger: '.name'
})

