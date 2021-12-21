let arrow = document.getElementById("arrow");
let arrowPath = document.getElementById("arrow-path");

var arrowAnimation = anime({
    targets: '#arrow',
    loop: true,
    translateY: '20px',
    direction: 'alternate',
    duration: 1300,
    easing: 'cubicBezier(0.445, 0.05, 0.55, 0.95)',
    autoplay: true
})
arrow.onmouseenter = function() {
    arrowAnimation.pause();
    arrowPath.style.opacity = 0.85;
}
arrow.onmouseleave = function() {
    arrowAnimation.play();
    arrowPath.style.opacity = 1;
}

window.onscroll = function() {
    if (window.scrollY === 0) {
        document.getElementById("nav").style.backgroundColor = "";

    } else {
        document.getElementById("nav").style.backgroundColor = "#C0E6C5";
    }
}

document.getElementById("gform").onsubmit = function() {
    anime({
        targets: '#gform',
        opacity: 0
    })
    document.getElementById("gform").style.visibility = "hidden";
    document.getElementById("form-submitted-message").style.display = "inline";

    anime({
        targets: '#form-submitted-message',
        opacity: 1
    })
}