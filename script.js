document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".hero-video");
    const control = document.getElementById("videoControl");
    const icon = document.getElementById("controlIcon");

    control.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            icon.src = "pause.svg";
        } else {
            video.pause();
            icon.src = "play.svg";
        }
    });
});
