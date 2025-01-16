

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
