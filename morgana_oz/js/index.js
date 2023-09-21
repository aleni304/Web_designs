window.addEventListener("scroll", function () {
    var menu = document.getElementById('menu-main');
    menu.classList.toggle("down", window.scrollY > 0);
});

const ch = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

ch.reveal('.home-content',{delay: 200, origin:'top'});
ch.reveal('.img1',{delay: 450, origin:'top'});
ch.reveal('.img2',{delay: 450, origin:'left'});
ch.reveal('.img3',{delay: 450, origin:'right'});