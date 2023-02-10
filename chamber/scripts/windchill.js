function setWindChill(windspeed, temp){        
    // Get the DOM objects that are dynamic
    const tempSpan = document.querySelector("#temperature");
    const windSpeedSpan = document.querySelector("#windspeed");
    const windChillSpan = document.querySelector("#windchill");

    // Set up the wind chill content
    let windchill = 'N/A';
    if (windspeed >= 3.0 && temp <= 50){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchill = `${chill}`;
    }

    // Write out the dynamic content
    tempSpan.textContent = temp;
    windSpeedSpan.textContent = windspeed;
    windChillSpan.innerHTML = windchill;
}

setWindChill(4, 51);