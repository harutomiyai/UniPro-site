// ナビゲーションバーのアニメーション
const navbar = document.querySelector('.about-navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.transform = 'translateY(-5px)';
        navbar.style.opacity = '0.9';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }
});