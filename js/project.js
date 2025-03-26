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


const list = document.getElementById("word-list");
const words = list.querySelectorAll("li");
const wordDisplay = document.querySelector(".word-area");

function update() {
  const centerY = window.innerHeight / 1.1;
  let closest = null;
  let minDist = Infinity;

  words.forEach(word => {
    const rect = word.getBoundingClientRect();
    const y = rect.top + rect.height / 1;
    const dist = Math.abs(centerY - y);

    if (dist < minDist) {
      minDist = dist;
      closest = word.textContent;
    }
  });

  if (closest) {
    wordDisplay.textContent = closest;
  }

  requestAnimationFrame(update);
}

update();


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = document.querySelectorAll(".ex_list li");
        items.forEach(item => {
          item.style.animationPlayState = "running";
        });
        observer.unobserve(entry.target); // 一回だけでOKなら
      }
    });
  }, { threshold: 0.3 });
  
  const exList = document.querySelector(".ex_list");
  observer.observe(exList);
  