const city = "Carlsbad";
const country = "US";
const apiKey = "b5b67c95f3c88ae42c280e43466094ec";
const currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=imperial`;

function getWeatherData() {
  fetch(currentApiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((currentData) => {
      // Extract current weather data
      const currentDate = new Date(currentData.dt * 1000);
      
      fetch(forecastApiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((forecastData) => {
          // Extract forecast data for next three days
          const nextThreeDays = forecastData.list.filter((item) => {
            const itemDate = new Date(item.dt * 1000);
            const timeDifference = itemDate.getTime() - currentDate.getTime();
            const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
            
            return dayDifference >= 0 && dayDifference <= 3;
          });
          
          if (nextThreeDays.length === 4) {
            nextThreeDays.splice(0, 1); // remove the first item (current day)
          } else if (nextThreeDays.length === 2) {
            // Add the next day to get three days
            const nextDay = forecastData.list.find((item) => {
              const itemDate = new Date(item.dt * 1000);
              const timeDifference = itemDate.getTime() - currentDate.getTime();
              const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
              
              return dayDifference === 1;
            });
            
            if (nextDay) {
              nextThreeDays.push(nextDay);
            }
          }
          
          // Get highest temperature, condition description, humidity, and icon for each day
          const highestTemperatures = {};
          for (const item of nextThreeDays) {
            const itemDate = new Date(item.dt * 1000);
            const dayOfWeek = itemDate.toLocaleDateString("en-US", { weekday: "short" });
            const temperature = Math.round(item.main.temp);
            const condition = item.weather[0].description;
            const humidity = item.main.humidity;
            const iconUrl = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

            const hour = itemDate.getHours();
            const currentDay = highestTemperatures[dayOfWeek] || { temperature: -Infinity };

            if (hour >= 12 && temperature > currentDay.temperature) {
              highestTemperatures[dayOfWeek] = {
                temperature,
                condition,
                humidity,
                iconUrl
              };
            }
          }
          
          // Render weather data
          
          const forecastMarkup = Object.keys(highestTemperatures)
            .map((dayOfWeek) => {
              const { temperature, condition, humidity, iconUrl } = highestTemperatures[dayOfWeek];
              
              return `
                <div class="forecast-day">
                  <h3>${dayOfWeek}</h3>
                  <img src="${iconUrl}" alt="Weather Icon">
                  <p> ${temperature} &deg;F</p>
                  <p> ${condition}</p>
                  <p> ${humidity}% humidity</p>
                </div>
              `;
            })
            .join("");

          const weatherCard = document.getElementById("weather-card");
          const weatherData = `
            <div class="forecast-days">
              <h2 class="tdfheading">Three Day Forecast</h2><br> 
              <div class="forecast-container">${forecastMarkup}</div>
            </div>
          `;
          weatherCard.innerHTML = weatherData;
        })
        .catch((error) => {
          console.error("Error fetching weather data: ", error);
        });
    });
}

getWeatherData();