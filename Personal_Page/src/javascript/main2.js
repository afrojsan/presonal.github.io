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