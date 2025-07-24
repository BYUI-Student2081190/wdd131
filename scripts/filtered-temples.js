// Obtain the DOM variables from the file
const hamButton = document.getElementById('hamButton');
const headerText = document.querySelector('.headerText');
const nav = document.querySelector('.navigation');
const templeContainer = document.querySelector('.container');
const home = document.getElementById('home');
const old = document.getElementById('old');
const newTemple = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');

// Temple Object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // My own temple objects...
  {
    templeName: "Billings Montana",
    location: "Billings, Motana, United States",
    dedicated: "1999, November, 20-21",
    area: 33800,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/32ee7c27ae82d11691a7d95ad36c350935bfdacf/full/1920%2C/0/default"
  },
  {
    templeName: "London England Temple",
    location: "Surrey, England",
    dedicated: "1958, September, 7-9",
    area: 42652,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/3a576e7992d0ccd390d9019e33265ddad023f556/full/1920%2C/0/default"
  },
  {
    templeName: "Oklahoma City Oklahoma Temple",
    location: "Yukon, Oklahoma, United States",
    dedicated: "2000, July, 30",
    area: 10890,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/94c4205c68ebf5c9680eea174c808221daed27ae/full/1920%2C/0/default"
  }
];

// Create a function that creates all the temple objects for view
function createTempleDiv(templeList){
  // Use a for loop through the object
  for (let i = 0; i < templeList.length; i++) {
    // Obtain all the values from the object
    let templeName = templeList[i].templeName;
    let location = templeList[i].location;
    let dedicated = templeList[i].dedicated;
    let area = templeList[i].area;
    let imageUrl = templeList[i].imageUrl;

    // Create the elements
    let newDiv = document.createElement('div');
    let newHeader = document.createElement('h3');
    let newDescripList = document.createElement('dl');
    let newTempleLocation = document.createElement('dt');
    let newTempleLocationText = document.createElement('dd');
    let newTempleDedicated = document.createElement('dt');
    let newTempleDedicatedText = document.createElement('dd');
    let newTempleArea = document.createElement('dt');
    let newTempleAreaText = document.createElement('dd');
    let newImg = document.createElement('img');

    // Set the attributes and text of the elements
    newHeader.textContent = templeName;
    newTempleLocation.textContent = "Location:";
    newTempleLocationText.textContent = location;
    newTempleDedicated.textContent = "Dedicated:";
    newTempleDedicatedText.textContent = dedicated;
    newTempleArea.textContent = "Area:";
    newTempleAreaText.textContent = `${area} sq ft`;
    newImg.src = imageUrl;
    newImg.alt = templeName;
    newImg.width = 400;
    newImg.height = 250;
    newImg.loading = "lazy";

    // Append the elements
    newDescripList.appendChild(newTempleLocation);
    newDescripList.appendChild(newTempleLocationText);
    newDescripList.appendChild(newTempleDedicated);
    newDescripList.appendChild(newTempleDedicatedText);
    newDescripList.appendChild(newTempleArea);
    newDescripList.appendChild(newTempleAreaText);

    newDiv.appendChild(newHeader);
    newDiv.appendChild(newDescripList);
    newDiv.appendChild(newImg);

    templeContainer.appendChild(newDiv);
  }
};

// Create a click event on the hamButton
hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
    headerText.classList.toggle('noShow'); // Make this not show to only have the hamburger content on screen
});

// Create click events for the nav
home.addEventListener('click', () => {
  home.setAttribute('class', 'active');
  old.setAttribute('class', '');
  newTemple.setAttribute('class', '');
  large.setAttribute('class', '');
  small.setAttribute('class', '');
});

old.addEventListener('click', () => {
  home.setAttribute('class', '');
  old.setAttribute('class', 'active');
  newTemple.setAttribute('class', '');
  large.setAttribute('class', '');
  small.setAttribute('class', '');
});

newTemple.addEventListener('click', () => {
  home.setAttribute('class', '');
  old.setAttribute('class', '');
  newTemple.setAttribute('class', 'active');
  large.setAttribute('class', '');
  small.setAttribute('class', '');
});

large.addEventListener('click', () => {
  home.setAttribute('class', '');
  old.setAttribute('class', '');
  newTemple.setAttribute('class', '');
  large.setAttribute('class', 'active');
  small.setAttribute('class', '');
});

small.addEventListener('click', () => {
  home.setAttribute('class', '');
  old.setAttribute('class', '');
  newTemple.setAttribute('class', '');
  large.setAttribute('class', '');
  small.setAttribute('class', 'active');
});

// Call the function to be used at the start
createTempleDiv(temples);