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


document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-title");
    const subtitle = document.getElementById("hero-subtitle");

    const fullText = "境界の、その先で";
    const firstPart = "境界の、";
    const secondPart = "その先で";

    title.textContent = "";

    let i = 0;

    function typeText(text, callback) {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeText(text, callback), 120);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }

    function typeSecondPart() {
        let j = 0;
        function typeNextChar() {
            if (j < secondPart.length) {
                title.textContent += secondPart.charAt(j);
                j++;
                setTimeout(typeNextChar, 120);
            } else {
                subtitle.classList.add("show");
            }
        }
        typeNextChar();
    }

    typeText(firstPart, typeSecondPart);
});
