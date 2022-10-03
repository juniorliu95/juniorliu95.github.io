// fade in function
function fadeIn() {
    const showcase = document.querySelector("#showcase");
    showcase.style.opacity = 1;
    const arrows = document.querySelector(".arrows");
    setTimeout(() => arrows.classList.add("arrowsActive"), 1000);
};

// gradually show and fade the home info when scrolling
function scrolling() {
    
};