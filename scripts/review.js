// Obtain the data from the get request from the URL
const queryString = window.location.search; // Pull the URL as a string
const urlParams = new URLSearchParams(queryString); // Get the params from the string URL
const productId = urlParams.get('product');
// DOM elements to set their text content
const productDisplay = document.getElementById('currentProduct');
const reviewsDisplay = document.getElementById('reviewCount');

// Create the local storage variable
let reviewsSubmited = getReviews() || 0;

// Have the list of objects here
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Function to convert the product name into title case
function convertToTitleCase(string) {
    // Check to see if string is empty
    if (!string) {
        return "";
    }

    return string
        .toLowerCase() // Put the whole string into a lower case string
        .split(' ') // Split at the spaces of the string
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }) // Map through the string and only upper case the first character of each word in the string
        .join(' '); // Join the string back into a single string again with spaces
};

// Obtain the reviews count from the local storage
function getReviews() {
    return parseInt(localStorage.getItem('myReviewCount'));
};

// Set the review count for the local storage
function setReviews() {
    localStorage.setItem('myReviewCount', reviewsSubmited);
};

// Loop through the objects and locate the id
products.forEach(product => {
    if (product.id === productId) {
        productDisplay.textContent = convertToTitleCase(product.name);
    }
});

// Update the review count in local storage
reviewsSubmited += 1;
// Display it to the viewer
reviewsDisplay.textContent = reviewsSubmited;
// Now update
setReviews();