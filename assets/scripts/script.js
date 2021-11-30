let arrow = document.getElementById("arrow");

var arrow_animation = anime({
    targets: '#arrow',
    loop: true,
    translateY: '20px',
    direction: 'alternate',
    duration: 1600,
    easing: 'cubicBezier(0.445, 0.05, 0.55, 0.95)',
    autoplay: true
})

// document.getElementById("arrow").onmouseenter = arrow_animation.play;
// document.getElementById("arrow").onmouseleave = arrow_animation.play;
document.querySelector("#arrow").onmouseenter = arrow_animation.pause;
document.querySelector("#arrow").onmouseleave = arrow_animation.play;