// Obtain the document elements
const productSelect = document.getElementById("productName");

// Object used in product storage
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

// Go through the object list and obtain the needed data
products.forEach(product => {
    // Obtain the information and create the elements
    let option = document.createElement("option");
    option.setAttribute('name', product.name);
    option.setAttribute('value', product.id);
    option.textContent = convertToTitleCase(product.name);

    // Append it to the option select
    productSelect.append(option);
});