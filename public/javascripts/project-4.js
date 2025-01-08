let left = document.querySelector('.left');
TweenMax.from(left, 1.5, {
    x: -1000,
    opacity:0,
});

let right = document.querySelector('.right');
TweenMax.from(right, 1, {
    delay: 1.5,
    x: 1000,
    opacity:0,
});

let logo = document.querySelector('.logo');
TweenMax.from(logo, 0.8, {
    delay: 2.5,
    y: -150,
    opacity:0,
});

let heading = document.querySelectorAll('.heading > h1');
TweenMax.staggerFrom(heading, 2, {
    delay: 3.3,
    x: -100,
    opacity:0,
    ease: Elastic.easeOut.config(4,0.4),
},0.5);

let leftInfo = document.querySelector('.left-info-container');
TweenMax.from(leftInfo, 0.8, {
    delay: 4.4,
    x: -250,
    opacity:0,
});

let leftInfoHeader = document.querySelector('.left-info > h2');
TweenMax.from(leftInfoHeader, 0.8, {
    delay: 4.8,
    x: -250,
    opacity:0,
});

let leftInfoPara = document.querySelector('.left-info > p');
TweenMax.from(leftInfoPara, 0.8, {
    delay: 5.2,
    x: -200,
    opacity:0,
});

let leftBottom = document.querySelector('.left-bottom');
TweenMax.from(leftBottom, 0.8, {
    delay: 5.6,
    x: -250,
    opacity:0,
});

let leftBottomHeader = document.querySelector('.left-bottom > h3');
TweenMax.from(leftBottomHeader, 0.8, {
    delay: 6,
    x: -250,
    opacity:0,
});

let rightNavbar = document.querySelector('.right-navbar');
TweenMax.from(rightNavbar, 0.8, {
    delay: 6.4,
    y: -100,
    opacity:0,
});

let bluredText = document.querySelectorAll('.blured-text > h1');
TweenMax.staggerFrom(bluredText, 2, {
    delay: 7,
    x: 200,
    opacity:0,
    ease: Elastic.easeOut.config(2,0.5),
},0.5);

let arrow = document.querySelector('.right-forwards-logo');
TweenMax.from(arrow, 0.8, {
    delay: 8,
    x: 200,
    opacity:0,
});

let rightInfoContainer = document.querySelector('.right-info-container');
TweenMax.from(rightInfoContainer, 0.8, {
    delay: 8.4,
    x: 150,
    opacity:0,
});

let rightInfoLogo = document.querySelector('.right-info-logo');
TweenMax.from(rightInfoLogo, 0.8, {
    delay: 8.8,
    x: 150,
    opacity:0,
});    

let rightInfoText = document.querySelector('.right-info-text');
TweenMax.from(rightInfoText, 0.8, {
    delay: 9.2,
    x: 150,
    opacity:0,
});

let rightBottom = document.querySelector('.right-bottom > h3');
TweenMax.from(rightBottom, 0.8, {
    delay: 9.6,
    x: 150,
    opacity:0,
});

let image = document.querySelector('.main-image');
TweenMax.from(image, 1.2, {
    delay: 10,
    y: -250,
    opacity:0,
});

let ring = document.querySelector('.ring');
TweenMax.from(ring, 0.8, {
    delay: 10.6,
    y: -150,
    opacity:0,
});
