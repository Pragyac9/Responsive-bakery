/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav__close");

/* meu show*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* hide menu*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //  when click on each nav__link,we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50vh add the blur-header class
  window.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher then 350 viewport height add the show-scroll class
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive=()=>{
const scrollDown =window.scrollY

sections.forEach(current=>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          } else{
            sectionClass.classList.remove('active-link')
          }
          
})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    opacity:1,
    scale:1.1,
    duration:2500,
    delay:300,
    // reset:true,
})
sr.reveal(`.home__data, .about__img, .about__data,.visit__data`)

sr.reveal(`.home__image,.footer__img-1,.footer__img-2`,{rotate:{z:-15}})
sr.reveal(`.home__bread, .about__bread`, { rotate: { z: 15 } })
sr.reveal(`.home__footer`, {scale:1,origin:'bottom' })


sr.reveal(`.new__card:nth-child(1) img`, { rotate: { z: -30},distance:0 })
sr.reveal(`.new__card:nth-child(2) img`, { rotate: { z: -30 }, distance: 0,delay:600 })
sr.reveal(`.new__card:nth-child(3) img`, { rotate: { z: -30 }, distance: 0,delay:900 })

sr.reveal(`.favorite__card img`, {interval:100, rotate: { z: 15}, distance: 0 });


sr.reveal(`.footer__container`, { scale: 1 });

