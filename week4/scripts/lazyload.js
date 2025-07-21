const lastModified = document.querySelector("#lastModified");

const lastModDate = new Date(document.lastModified);

// Set the inner html text of the elements
lastModified.innerHTML = `${lastModDate.getMonth() + 1}/${lastModDate.getDate()}/${lastModDate.getFullYear()} ${lastModDate.getHours()}:${lastModDate.getMinutes()}:${lastModDate.getSeconds()}`;