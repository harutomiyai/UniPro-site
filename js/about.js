document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header__menu-icon");
    const rightSidebar = document.getElementById("sidebarRight");

    menuButton.addEventListener("click", () => {
        rightSidebar.classList.toggle("active");
    });


    rightSidebar.addEventListener("click", () => {
        rightSidebar.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!rightSidebar.contains(event.target) && !menuButton.contains(event.target)) {
            rightSidebar.classList.remove("active");
        }
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".about__title");
    const text = target.innerHTML.replace(/<br\s*\/?>/g, "\n").trim();
    target.innerHTML = "";

    text.split("").forEach((char) => {
        if (char === "\n") {
            target.appendChild(document.createElement("br"));
            return;
        }

        const span = document.createElement("span");
        span.classList.add("char");
        span.textContent = char;
        target.appendChild(span);
    });

    const chars = document.querySelectorAll(".about__title .char");
    const scrollContainer = document.querySelector(".main");

    scrollContainer.addEventListener("scroll", () => {
        const center = window.innerHeight / 1.5;

        chars.forEach((char) => {
            const rect = char.getBoundingClientRect();
            const middle = rect.top + rect.height / 1.5;

            if (middle < center) {
                char.classList.add("seen");
            } else {
                char.classList.remove("seen");
            }
        });
    });
});
