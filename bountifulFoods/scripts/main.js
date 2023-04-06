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
  var footerStuff = document.querySelector("#contact-info");
  footerStuff.innerHTML += "<p>Last Modified: " + lastModified.toLocaleDateString() + "</p>";
});


