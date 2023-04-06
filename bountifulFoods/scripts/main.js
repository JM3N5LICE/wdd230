// code to make the hamburger menu function
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

// code to make the last modified code appeaer in the footer

document.addEventListener("DOMContentLoaded", function() {
  var lastModified = new Date(document.lastModified);
  var footer = document.querySelector("footer");
  footer.innerHTML += "Last Modified: " + lastModified.toLocaleDateString();
});

let count = localStorage.getItem('drinkCount') || 0;
  
// update the drink count on the page
document.getElementById('drink-count').textContent = count;