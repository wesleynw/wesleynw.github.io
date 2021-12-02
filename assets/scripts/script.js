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

document.querySelector("#arrow").onmouseenter = arrow_animation.pause;
document.querySelector("#arrow").onmouseleave = arrow_animation.play;


let leftPosition = false;
let navHidden = false;

window.onscroll = function() {
    let widthCorrect = document.getElementById("navbarMain").offsetWidth;
    let dist = -window.innerWidth / 2 + widthCorrect / 2 + 20
    if (window.scrollY === 0) {
        document.getElementById("navbar").style.backgroundColor = "";

    } else {
        document.getElementById("navbar").style.backgroundColor = "#121212";
    }
    if (window.scrollY >= 350) {
        if (window.innerWidth <= 600 ||
            (document.getElementById("navbarMain").offsetWidth + (document.getElementById("nav-name").offsetWidth / 2) > (window.innerWidth / 2))) {
            document.getElementById("navbarMain").style.display = "none";
            navHidden = true;
        }
        document.getElementById("nav-name").style.display = "inline";
        anime({
            targets: '#navbarMain',
            translateX: dist,
            duration: 250
        });
        anime({
            targets: '#navbarMain a',
            marginRight: 5,
            marginLeft: 5,
            fontSize: "10pt",
            fontSize: "13pt",
            duration: 250
        });
        anime({
            targets: '#nav-name',
            opacity: 1,
            duration: 500
        });
        leftPosition = true;
    } else if (leftPosition === true && window.scrollY <= 350) {
        if (navHidden) {
            document.getElementById("navbarMain").style.display = "inline";
        }
        document.getElementById("nav-name").style.display = "none";
        anime({
            targets: '#navbarMain',
            translateX: 0,
            duration: 250
        })
        anime({
            targets: '#nav-name',
            opacity: 0,
            duration: 500
        })
        anime({
            targets: '#navbar a',
            marginRight: 15,
            marginLeft: 15,
            fontSize: "3vh",
            duration: 250
        })
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