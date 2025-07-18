// Calculates the Wind Chill for the place page

// Obtain the DOM variables
const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#wind');
const windChill = document.querySelector('#windChill');

function calculateWindChill(numTemp, numWindSpeed)
{
    return (35.74 + 0.6215 * numTemp - 35.75 * Math.pow(numWindSpeed, 0.16) + 0.4275 * numTemp * Math.pow(numWindSpeed, 0.16));
};

// Create an if statement to see if the wind chill should be calculated
if (Number(temp.textContent) <= 50 && Number(windSpeed.textContent > 3))
{
    // Convert the strings to numbers
    const numTemp = Number(temp.textContent);
    const numWindSpeed = Number(windSpeed.textContent);

    windChill.textContent = `${Math.round(calculateWindChill(numTemp, numWindSpeed) * 10) / 10} °F`;
} else {
    windChill.textContent = 'N/A';
}