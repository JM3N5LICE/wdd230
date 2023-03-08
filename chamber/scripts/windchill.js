
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeedSpan = document.querySelector("#windspeed");
const windChillSpan = document.querySelector("#windchill");
const lat = '-37.5';
const lon = '175.3333';
const apikey = 'b5b67c95f3c88ae42c280e43466094ec';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayResults(weatherData) {

  // toFixed(0) rounds the temperature to the nearest whole number
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;
  const capitalizedDesc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  const wspeed = weatherData.wind.speed;
  const temp = weatherData.main.temp;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalizedDesc;
  windSpeedSpan.textContent = wspeed;

  setWindChill(wspeed, temp);
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

function setWindChill(windspeed, temp) {
  // Set up the wind chill content
  let windchill = 'N/A';
  if (windspeed >= 3.0 && temp <= 50) {
    let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));
    windchill = `${chill}&deg;F`;
  }

  // Write out the dynamic content
  windChillSpan.innerHTML = windchill;
}