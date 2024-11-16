const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last modified: <span class="highlight">${document.lastModified}</span>';
