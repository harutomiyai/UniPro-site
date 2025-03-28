document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".hero-video");
    const control = document.getElementById("videoControl");
    const icon = document.getElementById("controlIcon");

    control.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            icon.src = "svg/pause.svg";
        } else {
            video.pause();
            icon.src = "svg/play.svg";
        }
    });
});

let target = document.querySelector('.button-wrap');
let elemData;
target.addEventListener("mouseenter", e => {
    elemData = target.getBoundingClientRect();
})

target.addEventListener("mousemove", e => {
    let transX = ((e.clientX - (elemData.width / 2)) - elemData.left) * 0.6;
    let transY = ((e.clientY - (elemData.height / 2)) - elemData.top) * 0.6;
    target.style.transform = "translate(" + transX + "px, " + transY + "px)";
})

target.addEventListener("mouseleave", e => {
    target.style.transform = "translate(0px, 0px)";
})


document.addEventListener("DOMContentLoaded", () => {
    const block = document.querySelector(".reveal-block");
    const text = document.querySelector(".hero-title .text");
    const subtitle = document.getElementById("hero-subtitle");
    block.animate([
        { width: "0%" },
        { width: "100%" }
    ], {
        duration: 150,
        easing: "ease-in-out",
        fill: "forwards"
    }).onfinish = () => {
        text.style.opacity = 1;
        block.animate([
            { left: "0%", width: "100%" },
            { left: "100%", width: "0%" }
        ], {
            duration: 150,
            easing: "ease-in-out",
            fill: "forwards"
        }).onfinish = () => {
            subtitle.classList.add("show");
        };
    };
});


document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.backgroundColor = '#fff';
    });
});