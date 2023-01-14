// Sets year for footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// THis sets the last modified d
document.querySelector("#lastmodified").textContent = document.lastModified;