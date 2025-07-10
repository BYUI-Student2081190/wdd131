// Obtain the DOM variables from the document object
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to see when the button is clicked
button.addEventListener('click', function() {
    // Executed code in the function
    if (input.value.trim() !== '')
    {
        // If the input value is not empty then do this
        // Create new DOM variables in the document object
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        // Populate the li element
        li.textContent = input.value;
        // Populate the delete button text
        deleteButton.textContent = '❌';

        // Append the delete button to the li element
        li.append(deleteButton);
        // Append the li element to the list object
        list.append(li);
        // Add event listener to see when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            // Remove the elements from the list
            list.removeChild(li);
            input.focus();
        });
        // After this is completed set the input.value to nothing
        input.value = '';
    } else {
        input.focus();
    }
});