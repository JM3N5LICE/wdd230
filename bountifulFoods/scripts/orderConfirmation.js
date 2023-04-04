const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('firstName');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const fruit1 = urlParams.get('fruit1');
const fruit2 = urlParams.get('fruit2');
const fruit3 = urlParams.get('fruit3');
const specialInstructions = urlParams.get('specialInstructions');
const carbohydrates = urlParams.get('carbohydrates');
const protein = urlParams.get('protein');
const fat = urlParams.get('fat');
const calories = urlParams.get('calories');
const sugar = urlParams.get('sugar');
const orderDate = urlParams.get('orderDate');

// display information in HTML elements
document.getElementById('first-name').innerText = firstName;
document.getElementById('email').innerText = email;
document.getElementById('phone').innerText = phone;

// display selected fruits
if (fruit1 !== '') {
  document.getElementById('fruit1').innerText = fruit1;
}
if (fruit2 !== '') {
  document.getElementById('fruit2').innerText = fruit2;
}
if (fruit3 !== '') {
  document.getElementById('fruit3').innerText = fruit3;
}

document.getElementById('special-instructions').innerText = specialInstructions;
document.getElementById('carbohydrates').innerText = carbohydrates;
document.getElementById('protein').innerText = protein;
document.getElementById('fat').innerText = fat;
document.getElementById('calories').innerText = calories;
document.getElementById('sugar').innerText = sugar;
document.getElementById('order-date').innerText = new Date(orderDate).toLocaleString();
