// Obtain the DOM variables from the document object
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};

// Display List Function
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    // Add event listener to see when the delete button is clicked
    deleteButton.addEventListener('click', function() {
        // Remove the elements from the list
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};

// Add event listener to see when the button is clicked
button.addEventListener('click', function() {
    if (input.value.trim() != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});