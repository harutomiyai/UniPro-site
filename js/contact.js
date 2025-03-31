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


const contactBoxes = document.querySelectorAll(".contact__box");

contactBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        const targetIds = ["entry", "sns", "mail"];
        const targetId = targetIds[index];
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});