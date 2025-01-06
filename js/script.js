const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.add ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navba = document.querySelector('.navba');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navba.classList.toggle('open');

};

window.onscroll = () => {
menu.classList.remove('bx-x');
navba.classList.remove('open');

};
const sr = ScrollReveal ({
      distance: '60px',  
     duration: 2500,
     delay:400,
     reset:true
})
sr.reveal('.home-text', {delay:200, origin:'top'});
