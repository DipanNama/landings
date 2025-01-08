let logo = document.querySelector('.logo');
TweenMax.from(logo, 1.2, {
    y: -100,
    opacity:0,
});

let menu = document.querySelectorAll('.navlinks > li');
TweenMax.staggerFrom(menu, 3, {
    delay:1,
    y: 100,
    opacity:0,
    ease: Elastic.easeOut.config(1,0.5),
},0.2);

let heading = document.querySelectorAll('.heading > h1');
TweenMax.staggerFrom(heading, 3, {
    delay:4.5,
    x: -200,
    opacity:0,
    ease: Elastic.easeOut.config(2,0.5),
},0.2);

let bg = document.querySelector('.main');
TweenMax.from(bg, 1.2, {
    delay: 3.2,
    x: 1500,
    opacity:0,
});

let topHeading = document.querySelector('.top-heading');
TweenMax.from(topHeading, 1.2, {
    delay: 5.5,
    y: -100,
    opacity:0,
});

let info = document.querySelector('.info');
TweenMax.from(info, 1.2, {
    delay: 6,
    x: 100,
    opacity:0,
});

let bottomFooter = document.querySelector('.bottom-footer');
TweenMax.from(bottomFooter, 1.2, {
    delay: 6.5,
    y: 100,
    opacity:0,
});