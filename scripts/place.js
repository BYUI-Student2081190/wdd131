// Calculates the Wind Chill for the place page

// Obtain the DOM variables
const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#wind');
const windChill = document.querySelector('#windChill');

function calculateWindChill()
{
    // Convert the strings to numbers
    const numTemp = Number(temp.textContent);
    const numWindSpeed = Number(windSpeed.textContent);

    // Calculate the wind chill
    const calculatedWindChill = 35.74 + 0.6215 * numTemp - 35.75 * Math.pow(numWindSpeed, 0.16) + 0.4275 * numTemp * Math.pow(numWindSpeed, 0.16);
    // Return the calculated wind chill
    return `${Math.round(calculatedWindChill * 10) / 10} °F`;
};

// Create an if statement to see if the wind chill should be calculated
if (Number(temp.textContent) <= 50 && Number(windSpeed.textContent > 3))
{
    windChill.textContent = calculateWindChill();
} else {
    windChill.textContent = 'N/A';
}