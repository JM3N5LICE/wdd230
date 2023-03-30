const city = "Carlsbad";
const country = "US";
const apiKey = "b5b67c95f3c88ae42c280e43466094ec";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=imperial`;


function getWeatherData() {
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      // Extract current weather data
      const currentWeatherData = data.list[0];
      const currentTemperature = Math.round(currentWeatherData.main.temp_max);
      const currentDescription = currentWeatherData.weather[0].description;
      const currentHumidity = currentWeatherData.main.humidity;
      const currentDate = new Date(data.list[0].dt * 1000);
      console.log(currentDate.toDateString());
      

      // Extract 3 day forecast data
      const forecastData = data.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(1, 3);
      const forecastMarkup = forecastData
        .map((item) => {
          const dayOfWeek = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short"});
          console.log(dayOfWeek);
          const temperature = Math.round(item.main.temp);
          const description = item.weather[0].description;
          const humidity = item.main.humidity;

          const iconUrl = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
          return `
            <div class="forecast-day">
              <h3>${dayOfWeek}</h3>
              <img src="${iconUrl}" alt="weather icon">
              <p>${temperature} &deg;F</p>
              <p>${description}</p>
              <p>${humidity} humidity</p>
            </div>
          `;
        })
        .join("");

      // Render weather data
      const currentIcon = `https://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`;
      const weatherCard = document.getElementById("weather-card");
      const weatherData = `
      
        <div class="forecast-day" >
          <h3>Today</h3>
          <img src="${currentIcon}" alt="${currentDescription}">
          <p>${currentTemperature} &deg;F</p>
          <p>${currentDescription}</p>
          <p>${currentHumidity} humidity</p>
        </div>
        <div class="forecast-days">
            
            <div class="forecast-container">${forecastMarkup}</div>
        </div>
      `;
      weatherCard.innerHTML = weatherData;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
    });
}

getWeatherData();
