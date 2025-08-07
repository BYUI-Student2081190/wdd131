// Obtain the DOM variables
const currentMembership = document.getElementById("currentMem");
const membershipCount = document.getElementById("memCount");

let currMem = getCurrentMem() || "None";
let memCount = getMemCount() || 0;

// Function to obtain the two localstorage values
function getCurrentMem() {
    return localStorage.getItem('myCurrentMembership');
};

function getMemCount() {
    return parseInt(localStorage.getItem('myMembershipCount'));
};

// Function to set the DOM variables text
function setText() {
    currentMembership.textContent = currMem;
    if (memCount === 1) {
        membershipCount.textContent = `${memCount} membership`;
    } else {
        membershipCount.textContent = `${memCount} memberships`;
    }
};

// Call the setting function
setText();