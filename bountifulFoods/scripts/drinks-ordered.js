let count = localStorage.getItem('drinkCount') || 0;
  
// update the drink count on the page
document.getElementById('drink-count').textContent = count;