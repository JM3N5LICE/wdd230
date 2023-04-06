// load fruit data from JSON file
fetch('./data/fruityvice.json')
.then(response => response.json())
  .then(data => {
    const fruitOptions = data.fruits.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`).join('');
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
      select.innerHTML = '';
      select.innerHTML += fruitOptions;
    });
  });
  
// submit form
const form = document.getElementById('specialty-drink-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const specialInstructions = document.getElementById('special-instructions').value;
  
  // get nutrition information from local JSON file
  const fruits = [fruit1, fruit2, fruit3];
  const promises = fruits.map(fruit => fetch('./data/fruityvice.json')
                                      .then(response => response.json())
                                      .then(data => data.fruits.find(f => f.name === fruit)));
  Promise.all(promises)
    .then(data => {
      const nutritionInfo = data.reduce((total, fruit) => {
        total.carbohydrates += fruit.nutritions.carbohydrates;
        total.protein += fruit.nutritions.protein;
        total.fat += fruit.nutritions.fat;
        total.calories += fruit.nutritions.calories;
        total.sugar += fruit.nutritions.sugar;
        return total;
      }, { carbohydrates: 0.00, protein: 0.00, fat: 0.00, calories: 0, sugar: 0.00 });

      // Multiply nutrition values by 100, round to nearest integer, then divide by 100
      const roundedNutritionInfo = {
        carbohydrates: nutritionInfo.carbohydrates.toFixed(1),
        protein: nutritionInfo.protein.toFixed(1),
        fat: nutritionInfo.fat.toFixed(1),
        calories: nutritionInfo.calories.toFixed(0),
        sugar: nutritionInfo.sugar.toFixed(1)
      };

      // update drink count in localStorage
      const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
      localStorage.setItem('drinkCount', drinkCount + 1);

      // navigate to order confirmation page
      const queryParams = new URLSearchParams({
        firstName: firstName,
        email: email,
        phone: phone,
        fruit1: fruit1,
        fruit2: fruit2,
        fruit3: fruit3,
        specialInstructions: specialInstructions,
        carbohydrates: roundedNutritionInfo.carbohydrates,
        protein: roundedNutritionInfo.protein,
        fat: roundedNutritionInfo.fat,
        calories: roundedNutritionInfo.calories,
        sugar: roundedNutritionInfo.sugar,
        orderDate: new Date().toISOString()
      });
      
      window.location.href = `orderConfirmation.html?${queryParams.toString()}`;
    });
});


