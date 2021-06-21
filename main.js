const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
} 

menu.addEventListener('click' , mobileMenu);


// Close mobile Menu when clicking on a menu item

 const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');

   if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
 }

 menuLinks.addEventListener('click' , hideMobileMenu);
 navLogo.addEventListener('click' , hideMobileMenu);

// Animations 
// These line allows to use scrolltriger 

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero' ,{
    duration: 0.6,
    opacity:0,
    y: -150,
    stagger: 0.3,
});

gsap.from('.animate-about' ,{
    scrollTrigger: '.animate-about',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate-img' ,{
    scrollTrigger: '.animate-img',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-skill' ,{
    scrollTrigger: '.animate-skill',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

gsap.from('.animate-card' ,{
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2,
});

gsap.from('.animate-project' ,{
    scrollTrigger: '.animate-project',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2,
});

gsap.from('.animate-email' ,{
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.4,
});
