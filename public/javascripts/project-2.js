let logo = document.querySelector('.logo');
TweenMax.from(logo, 1.2, {
    translateX: "-200%",
    opacity:0,
});

let menuIcon = document.querySelector('.menu-icon');
TweenMax.from(menuIcon, 1.2, {
    delay: 0.8,
    translateX: "200%",
    opacity:0,
});

let menu = document.querySelectorAll('.menu > ul > li ');
TweenMax.staggerFrom(menu, 1.2, {
    delay:1.5,
    translateY: "-100%",
    opacity:0,
},0.2);

let heading = document.querySelector('.heading');
TweenMax.from(heading, 2, {
    delay: 2.8,
    translateX: "-100%",
    opacity:0,
    ease: Elastic.easeOut.config(1,0.5),
});

let content = document.querySelector('.content');
TweenMax.from(content, 1.2, {
    delay: 4,
    translateY: "100%",
    opacity:0,
});

let button = document.querySelector('.button');
TweenMax.to(button, 1.2, {
    delay: 4.5,
    translateY: 0,
    opacity:1,
});

let card = document.querySelectorAll('.card');
TweenMax.staggerTo(card, 5, {
    delay:5.5,
    translateY: 0,
    opacity:1,
    ease: Elastic.easeOut.config(4,0.2),
},0.2);
