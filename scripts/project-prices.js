// Pulled in Elements
const tableContainer = document.getElementById("prices-table-container");
const estimate = document.getElementById("estimate");

// Blueprint for table
const rows = 4;
const cols = 5;
const tableColData = ["", "None", "Basic", "Pro", "Master"];
const tableRowData = [
    ["9 Hole Game", 20, 15, 10, 8],
    ["18 Hole Game", 25, 20, 15, 10],
    ["Cart Rental", 20, 15, 10, 5],
    ["Pull Cart Rental", 15, 10, 5, 2]
];

// Hold the current rows and col that are selected
let activeCol = null;
let selectedRows = new Set();

// Function to create the table
function createTable() {
    // Create the table element
    const table = document.createElement('table');
    table.setAttribute("class", "price-table");

    // Create the thead element
    const thead = document.createElement('thead');
    const tableTitle = document.createElement('tr');
    const tableTitleContent = document.createElement('th');
    tableTitleContent.setAttribute("colspan", "5");
    tableTitleContent.setAttribute("scope", "colgroup");
    tableTitleContent.textContent = "Membership Pricing";
    tableTitle.append(tableTitleContent);
    const tableColNames = document.createElement('tr');
    for (let i = 0; i < cols; i++) {
        const th = document.createElement('th');
        th.setAttribute("scope", "col");
        th.textContent = tableColData[i];
        // If this is the first one in the group
        if (i == 0) {
            th.setAttribute("class", "blank-col");
        };

        if (i == 1) {
            th.setAttribute("id", "none-col");
        };

        if (i == 2) {
            th.setAttribute("id", "basic-col");
        };

        if (i == 3) {
            th.setAttribute("id", "pro-col");
        };

        if (i == 4) {
            th.setAttribute("id", "master-col");
        };

        // Add them to the container
        tableColNames.append(th);
    };
    // Add them to the thead then the table
    thead.append(tableTitle);
    thead.append(tableColNames);
    table.append(thead);

    // Create the tbody
    const tbody = document.createElement('tbody');

    // Now create the rows
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            if (i == 0 && j == 0) {
                td.setAttribute("id", "nine-hole");
                td.textContent = tableRowData[i][j];
            }

            else if (i == 1 && j == 0) {
                td.setAttribute("id", "eighteen-hole");
                td.textContent = tableRowData[i][j];
            }

            else if (i == 2 && j == 0) {
                td.setAttribute("id", "cart-rent");
                td.textContent = tableRowData[i][j];
            }

            else if (i == 3 && j == 0) {
                td.setAttribute("id", "pcart-rent");
                td.textContent = tableRowData[i][j];
            }

            else {
                td.textContent = `$${tableRowData[i][j]}.00`;
            };

            // Then append the td to the tr
            tr.append(td);
        };
        // Append the tr to the table
        tbody.append(tr);
    };

    // Append the tbody to the table
    table.append(tbody);

    // Create and append the caption
    const cap = document.createElement('caption');
    cap.textContent = "Table 1: Pricing Based on Membership";
    table.append(cap);

    // Finish off the table by adding it to the div
    tableContainer.append(table);
};

// Function to calculate the estimated amount
function calcEstimate() {
    if (!activeCol) {
        estimate.textContent = "0.00";
    } else {
        // Check to see if the set is empty
        if (selectedRows.size == 0) {
            estimate.textContent = "0.00";
        } else {
            // Go ahead and calculate the estimate
            const prices =
            activeCol === "basic" ? [15, 20, 15, 15] :
            activeCol === "pro" ? [10, 15, 10, 10] :
            activeCol === "master" ? [8, 10, 5, 2] :
            [20, 25, 20, 15]; // Default on the none prices if the other three are not active

            // Loop through the set and do math based on what is found
            let total = 0;

            selectedRows.forEach(row => {
                // Check the condition
                if (row == 1) {
                    total += prices[0];
                };

                if (row == 2) {
                    total += prices[1];
                };

                if (row == 3) {
                    total += prices[2];
                };

                if (row == 4) {
                    total += prices[3];
                };
            });

            // After the loop set the current estimate
            estimate.textContent = `${total}.00`;
        };
    };
};

// Function to reset the row set
function resetRowSet(nineHoleRow, eighteenHoleRow, cartRow, pcartRow) {
    selectedRows.clear();
    nineHoleRow.setAttribute("class", "");
    eighteenHoleRow.setAttribute("class", "");
    cartRow.setAttribute("class", "");
    pcartRow.setAttribute("class", "");
};

// Call to function to create the table
createTable();
calcEstimate();

// Create DOM variables to hold the table elements
const noneCol = document.getElementById("none-col");
const basicCol = document.getElementById("basic-col");
const proCol = document.getElementById("pro-col");
const masterCol = document.getElementById("master-col");
const nineHoleRow = document.getElementById("nine-hole");
const eighteenHoleRow = document.getElementById("eighteen-hole");
const cartRow = document.getElementById("cart-rent");
const pcartRow = document.getElementById("pcart-rent");

// Create click events that call the functions to check if conditions have been met
noneCol.addEventListener("click", function () {
    if (activeCol == null || activeCol != "none") {
        // Handle the action
        activeCol = "none";
        noneCol.setAttribute("class", "active-col");
        basicCol.setAttribute("class", "nonactive-col");
        proCol.setAttribute("class", "nonactive-col");
        masterCol.setAttribute("class", "nonactive-col");
        calcEstimate();
    } else {
        // Set the active column to null because we clicked this twice
        activeCol = null;
        noneCol.setAttribute("class", "");
        basicCol.setAttribute("class", "");
        proCol.setAttribute("class", "");
        masterCol.setAttribute("class", "");
        resetRowSet(nineHoleRow, eighteenHoleRow, cartRow, pcartRow);
        calcEstimate();
    };
});

basicCol.addEventListener("click", function () {
    if (activeCol == null || activeCol != "basic") {
        // Handle the action
        activeCol = "basic";
        noneCol.setAttribute("class", "nonactive-col");
        basicCol.setAttribute("class", "active-col");
        proCol.setAttribute("class", "nonactive-col");
        masterCol.setAttribute("class", "nonactive-col");
        calcEstimate();
    } else {
        // Set the active column to null because we clicked this twice
        activeCol = null;
        noneCol.setAttribute("class", "");
        basicCol.setAttribute("class", "");
        proCol.setAttribute("class", "");
        masterCol.setAttribute("class", "");
        resetRowSet(nineHoleRow, eighteenHoleRow, cartRow, pcartRow);
        calcEstimate();
    };
});

proCol.addEventListener("click", function () {
    if (activeCol == null || activeCol != "pro") {
        // Handle the action
        activeCol = "pro";
        noneCol.setAttribute("class", "nonactive-col");
        basicCol.setAttribute("class", "nonactive-col");
        proCol.setAttribute("class", "active-col");
        masterCol.setAttribute("class", "nonactive-col");
        calcEstimate();
    } else {
        // Set the active column to null because we clicked this twice
        activeCol = null;
        noneCol.setAttribute("class", "");
        basicCol.setAttribute("class", "");
        proCol.setAttribute("class", "");
        masterCol.setAttribute("class", "");
        resetRowSet(nineHoleRow, eighteenHoleRow, cartRow, pcartRow);
        calcEstimate();
    };
});

masterCol.addEventListener("click", function () {
    if (activeCol == null || activeCol != "master") {
        // Handle the action
        activeCol = "master";
        noneCol.setAttribute("class", "nonactive-col");
        basicCol.setAttribute("class", "nonactive-col");
        proCol.setAttribute("class", "nonactive-col");
        masterCol.setAttribute("class", "active-col");
        calcEstimate();
    } else {
        // Set the active column to null because we clicked this twice
        activeCol = null;
        noneCol.setAttribute("class", "");
        basicCol.setAttribute("class", "");
        proCol.setAttribute("class", "");
        masterCol.setAttribute("class", "");
        resetRowSet(nineHoleRow, eighteenHoleRow, cartRow, pcartRow);
        calcEstimate();
    };
});

// Now add event listeners to the rows
nineHoleRow.addEventListener("click", function() {
    // Check to see if the activeCol is null
    if (!activeCol) {
        // Let the user know they need to select a column first then return
        alert("You must select a column first, then you may select the rows you would like.");
        return;
    } else {
        if (selectedRows.has(1)) {
            // Remove this one from the set, because it was already selected
            selectedRows.delete(1);
            nineHoleRow.setAttribute("class", "");
            calcEstimate();
        } else {
            // Add this value to the set and remove the 18 hole value and set the classes
            if (selectedRows.has(2)) {
                selectedRows.delete(2);
                eighteenHoleRow.setAttribute("class", "nonactive-row");
            };

            selectedRows.add(1);
            nineHoleRow.setAttribute("class", "active-row");
            calcEstimate();
        };
    };
});

eighteenHoleRow.addEventListener("click", function() {
    // Check to see if the activeCol is null
    if (!activeCol) {
        // Let the user know they need to select a column first then return
        alert("You must select a column first, then you may select the rows you would like.");
        return;
    } else {
        if (selectedRows.has(2)) {
            // Remove this one from the set, because it was already selected
            selectedRows.delete(2);
            eighteenHoleRow.setAttribute("class", "");
            calcEstimate();
        } else {
            // Add this value to the set and remove the 9 hole value and set the classes
            if (selectedRows.has(1)) {
                selectedRows.delete(1);
                nineHoleRow.setAttribute("class", "nonactive-row");
            };

            selectedRows.add(2);
            eighteenHoleRow.setAttribute("class", "active-row");
            calcEstimate();
        };
    };
});

cartRow.addEventListener("click", function() {
    // Check to see if the activeCol is null
    if (!activeCol) {
        // Let the user know they need to select a column first then return
        alert("You must select a column first, then you may select the rows you would like.");
        return;
    } else {
        if (selectedRows.has(3)) {
            // Remove this one from the set, because it was already selected
            selectedRows.delete(3);
            cartRow.setAttribute("class", "");
            calcEstimate();
        } else {
            selectedRows.add(3);
            cartRow.setAttribute("class", "active-row");
            calcEstimate();
        };
    };
});

pcartRow.addEventListener("click", function() {
    // Check to see if the activeCol is null
    if (!activeCol) {
        // Let the user know they need to select a column first then return
        alert("You must select a column first, then you may select the rows you would like.");
        return;
    } else {
        if (selectedRows.has(4)) {
            // Remove this one from the set, because it was already selected
            selectedRows.delete(4);
            pcartRow.setAttribute("class", "");
            calcEstimate();
        } else {
            selectedRows.add(4);
            pcartRow.setAttribute("class", "active-row");
            calcEstimate();
        };
    };
});