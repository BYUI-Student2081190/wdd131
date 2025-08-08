// Obtain the DOM variables for the hamburger button
const hamButton = document.getElementById("hamButton");
const nav = document.getElementById("navigation");

// Function to toggle the nav open and closed
function toggleHamButton() {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
};

// Click Event
hamButton.addEventListener("click", function () {
    toggleHamButton();
});