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



// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.projectContainer',
//   }
// });
// tl.from('.projectTitle', 1, { y: 100, autoApha: 0 })
//   .from('.project', 1.5, { x: -250 , autoAlpha: 0 })
gsap.from('nav', 2, { autoAlpha: 0, esae: Power0.easeNone })

gsap.from('.sliderText', 2, { autoAlpha: 0, esae: Power0.easeNone })

gsap.from('.project', {
  x: -250,
  autoAlpha: 0,
  duration: 1.5,
  delay: 1,
  scrollTrigger: '.projectContainer'
})

gsap.from('.projectTitle', {
  y: 100,
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: '.projectContainer'
})