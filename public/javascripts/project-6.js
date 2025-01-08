TweenMax.to(".background", 2, {
    width: "100%",
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".menu ul > li,.nav .logo, .nav .cart", 2, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Elastic.easeOut.config(1,0.4)
},0.2);

TweenMax.from(".blocks", 1.5, {
    delay: 1.8,
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut
});

TweenMax.from(".tag-line", 1.8, {
    delay: 2,
    opacity: 0,
    x: -160,
    ease: Expo.easeInOut
});

TweenMax.from(".hero", 2, {
    delay: 3,
    opacity: 0,
    x: 170,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".title-container > div", 3, {
    delay: 4.4,
    y: 320,
    opacity: 0,
    ease: Elastic.easeOut.config(2,0.4)
}, 0.2);

TweenMax.from(".year", 1.5, {
    delay: 5.8,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".content p", 2, {
    delay: 6.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.to(".content button", 1.5, {
    delay: 6.8,
    opacity: 1,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 7.5,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
}, 0.2);
