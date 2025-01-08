let mainImage = document.querySelector('.left');
TweenMax.from(mainImage, 1.5, {
    translateX: "-100%",
});

let logo = document.getElementsByClassName('logo');
TweenMax.from(logo, 0.8, {
    delay:1.2,
    translateX: "-100%",
    opacity:0,
});

let menuIcon = document.getElementsByClassName('menu');
TweenMax.from(menuIcon, 1.2, {
    delay:1.8,
    translateX: "-100%",
    opacity:0,
});

let image = document.querySelectorAll('.image');
TweenMax.staggerTo(image, 1.2, {
    delay:3,
    translateX: 0,
    opacity:1,
},0.2);

let social = document.querySelectorAll('.social-link');
TweenMax.staggerFrom(social, 1.2, {
    delay:3.5,
    translateY: "-100%",
    opacity:0,
},0.4);

let btn = document.getElementsByClassName('btn');
TweenMax.from(btn, 1.2, {
    delay:4,
    translateY: "100%",
    opacity:0,
});

let contentHeader = document.querySelector('.content > h1');
TweenMax.from(contentHeader, 1.2, {
    delay:4.5,
    translateY: "-100%",
    opacity:0,
});

let contentPara = document.querySelector('.content > p');
TweenMax.from(contentPara, 1.2, {
    delay:5,
    translateY: "100%",
    opacity:0,
});

let count = document.querySelector('.count');
TweenMax.from(count, 1.2, {
    delay:5,
    translateY: "-100%",
    opacity:0,
});

let slider = document.querySelector('.slider');
TweenMax.from(slider, 1.2, {
    delay:5.5,
    translateY: "-100%",
    opacity:0,
});

