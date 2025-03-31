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