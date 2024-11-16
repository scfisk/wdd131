const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const modifiedDate = document.lastModified;
year.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last modified: <span class="highlight">${modifiedDate}</span>`;
