// Function to toggle the left menu collapse/expand
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
}

// Function to adjust the page width based on screen size
function adjustPageWidth() {
    const body = document.body;
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        body.style.transform = "scale(0.9)"; // Shrink to 90%
        body.style.transformOrigin = "top left";
    } else if (width >= 700 && width <= 767) {
        body.style.transform = "scale(0.8)"; // Shrink to 80%
        body.style.transformOrigin = "top left";
    } else if (width >= 600 && width < 700) {
        body.style.transform = "scale(0.75)"; // Shrink to 75%
        body.style.transformOrigin = "top left";
    } else if (width <= 600) {
        body.style.transform = "scale(0.5)"; // Shrink to 50%
        body.style.transformOrigin = "top left";
    } else {
        body.style.transform = "scale(1)"; // Reset to full size
    }
}

// Listen for resize events to apply the function dynamically
window.addEventListener("resize", adjustPageWidth);

// Call the function initially to set the page size on page load
adjustPageWidth();



