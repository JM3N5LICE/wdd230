const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today h2").textContent = fulldate;

// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets the last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;