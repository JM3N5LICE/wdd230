// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = '64.8401';
const lon = '147.7200';
const apikey = 'b5b67c95f3c88ae42c280e43466094ec';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayResults(weatherData) {

    // toFixed(0) rounds the temperature to the nearest whole number
  
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
  
    weatherIcon.setAttribute('alt', desc);
  
    captionDesc.textContent = desc;  
  
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();