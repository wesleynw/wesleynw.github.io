let arrow = document.getElementById("arrow");
anime({
    targets: '#arrow',
    loop: true,
    translateY: '20px',
    direction: 'alternate',
    duration: 1600,
    easing: 'cubicBezier(0.445, 0.05, 0.55, 0.95)'
})