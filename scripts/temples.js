// Obtain the DOM variables from the file
const hamButton = document.getElementById('hamButton');
const headerText = document.querySelector('.headerText');
const nav = document.querySelector('.navigation');

// Create a click event on the hamButton
hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
    headerText.classList.toggle('noShow'); // Make this not show to only have the hamburger content on screen
});