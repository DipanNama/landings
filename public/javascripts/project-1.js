// let container = document.querySelector('.container-box');
// for(let i=1;i<=100;i++){
//     let box = document.createElement('div');
//     box.classList.add('element');
//     container.appendChild(box);
// }

// let boxAll = document.querySelectorAll('.element');
// let animation = anime.timeline({
//     targets: boxAll,
//     loop: true,
//     easing: 'easeInOutExpo',
//     delay: anime.stagger(100,{grid: [10,10],from: 'center'}),

// })
// animation
// .add({
//     rotateZ: 180,
//     translateX: anime.stagger(-20,{grid: [10,10],from: 'center',axis: 'x'}),
//     translateY: anime.stagger(-20,{grid: [10,10],from: 'center',axis: 'y'}),
//     opacity: 1,
// })
// .add({
//     borderRadius: 50,
// })
// .add({
//     scale: 0.2,
//     opacity: 0.2,
// })
// .add({
//     rotateZ: 180,
//     translateX: anime.stagger(0,{grid: [10,10],from: 'center',axis: 'x'}),
//     translateY: anime.stagger(0,{grid: [10,10],from: 'center',axis: 'y'}),
//     opacity: 1
// })
// .add({
//     scale: 1,
//     borderRadius: 0,
// })
// .add({
//     rotateZ: -90,
// })

let profile = document.querySelector('.profile');
let profileAnime = anime.timeline({
    targets: profile,
    loop: false,
    easing: 'easeInOutExpo',
    delay: 8000,
})
profileAnime
    .add({
        opacity: 1,
        rotateZ: -360,
    })

let container = document.querySelector('.container-box');
for (let i = 1; i <= 100; i++) {
    let box = document.createElement('div');
    box.classList.add('element');
    container.appendChild(box);
}

let box = document.querySelectorAll('.element');
Array.from(box).forEach(element => {
    element.style.borderRadius = "50%";
    element.style.opacity = "0.5";
    element.style.scale = "0.2";
});

let clone = container.cloneNode(true);
let cloneContainer = document.querySelector('.clone-container').appendChild(clone);

let bigHeading = document.querySelector('.big-heading h1');

// let animation = anime.timeline({
//     targets: boxAll,
//     loop: true,
//     easing: 'easeInOutExpo',
//     delay: anime.stagger(100,{grid: [10,10],from: 'center'}),

// })
// animation
// .add({
//     rotateZ: 180,
//     translateX: anime.stagger(-20,{grid: [10,10],from: 'center',axis: 'x'}),
//     translateY: anime.stagger(-20,{grid: [10,10],from: 'center',axis: 'y'}),
//     opacity: 1,
// })

anime({
    targets: '.big-heading h1',
    opacity: 0.1,
    duration: 3000,
    // translateY: 50,
    translateX: -90,
    delay: 9000
});

anime({
    targets: '.big-heading-bottom h1',
    opacity: 0.1,
    duration: 3000,
    translateX: 280,
    delay: 9200
});

anime({
    targets: 'section .container-box',
    opacity: 0.4,
    duration: 3000,
    // translateY: 50,
    translateX: -100,
    delay: 9600
});

anime({
    targets: '.clone-container .container-box',
    opacity: 0.4,
    duration: 3000,
    // translateY: 50,
    translateX: 100,
    delay: 9800
});
