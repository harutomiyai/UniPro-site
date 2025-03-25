const logo = document.getElementById("logo");
const nav = document.getElementById("nav");

let navTimeout;

logo.addEventListener("mouseenter", () => {
    clearTimeout(navTimeout);
    nav.style.display = "flex";
    nav.style.opacity = "1";
});

logo.addEventListener("mouseleave", () => {
    navTimeout = setTimeout(() => {
        if (!nav.matches(":hover")) {
            nav.style.display = "none";
        }
    }, 200);
});

nav.addEventListener("mouseleave", () => {
    nav.style.display = "none";
});
