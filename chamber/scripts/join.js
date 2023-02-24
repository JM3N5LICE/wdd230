const positionTitlePattern = /^[A-Za-z\s\-]{7,}$/;

// Get the current date and time
const now = new Date();
  
// Format the date and time as a string
const dateString = now.toISOString();

// Set the value of the hidden input field to the formatted date and time
document.getElementById("formLoadTime").value = dateString;