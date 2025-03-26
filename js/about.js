document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header__menu-icon");
    const rightSidebar = document.getElementById("sidebarRight");

    menuButton.addEventListener("click", () => {
        rightSidebar.classList.toggle("active");
    });

    // 初期状態でサイドバーをクリック可能にする
    rightSidebar.addEventListener("click", () => {
        rightSidebar.classList.toggle("active");
    });
});