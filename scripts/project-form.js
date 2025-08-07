// Obtain the variables from the document to use
const membershipSelect = document.getElementById("membershipType");
const detailsContainer = document.getElementById("membershipDetails");
const totalPriceDisplay = document.getElementById("membershipPrice");
const membershipForm = document.getElementById("membershipForm");

// Create variable to hold local storage
let membershipPurchases = getMembershipPurchaseCount() || 0;

// Array of objects to hold all the membership data
// Note: benefits also has the prices for each benefit mixed into the array
const memberships = [
    {
        name: "Basic",
        benefits: ["Day in advance Tee Time reservation.", 5, "Discounts.", 2],
        price: 10
    },
    {
        name: "Pro",
        benefits: ["Week in advance Tee Time reservation.", 6, "Discounts.", 1, "Free 5 pack of golf balls every month.", 10],
        price: 15
    },
    {
        name: "Master",
        benefits: ["Month in advance Tee Time reservation.", 7, "Huge Discounts.", 1, "Free 5 pack of golf balls every month.", 10, "Free newest and latest golf club set per year.", 5],
        price: 20
    }
];

// Function to create the rest of the options
function createMembershipOptions() {
    // Start by obtaining the names from the objects in the array
    let membershipName = memberships.map((obj) => obj.name);

    // Create each option based on the membershipName array
    membershipName.forEach(name => {
        const option = document.createElement('option');
        option.value = name.toLowerCase();
        option.textContent = name;
        // Append it to the select
        membershipSelect.append(option);
    });
};

// Function to display the membership data and calculate/diplay price
function displayMembershipData(value) {
    // Get the right object based on the incoming value then
    // display the info to the div
    const membership = memberships.filter(obj => obj.name.toLowerCase() === value);

    const benefits = membership[0].benefits.filter(benefit => typeof benefit === 'string');
    const benefitPrices = membership[0].benefits.filter(benefit => typeof benefit === 'number');

    // Clear all children from the div before adding more
    detailsContainer.replaceChildren();

    const membershipDetailsTitle = document.createElement('h3');
    membershipDetailsTitle.textContent = "Membership Benefits:"
    detailsContainer.append(membershipDetailsTitle);

    benefits.forEach(benefit => {
        const p = document.createElement('p');
        p.textContent = benefit;
        detailsContainer.append(p);
    });

    let total = 0;

    benefitPrices.forEach(benPrice => {
        total += benPrice;    
    });

    total += membership[0].price;

    totalPriceDisplay.textContent = `$${total}.00 per Month`;
};

// Function to get membership purchase count
function getMembershipPurchaseCount() {
    return parseInt(localStorage.getItem('myMembershipCount'));
};

// Function to set membership putchase count
function setMembershipPurchaseCount() {
    membershipPurchases += 1;
    localStorage.setItem('myMembershipCount', membershipPurchases);
};

function setCurrentMemberShip(membership) {
    localStorage.setItem('myCurrentMembership', membership);
};

// Call to create the selection options
createMembershipOptions();

// Event listener to check and see if the option has changed
membershipSelect.addEventListener("change", function () {
    // Send the value into the function
    displayMembershipData(membershipSelect.value);
});

// Event listener to check and see if the form has been submitted
membershipForm.addEventListener("submit", function () {
    // Call the function to set local storage
    setMembershipPurchaseCount();
    setCurrentMemberShip(membershipSelect.value);
});