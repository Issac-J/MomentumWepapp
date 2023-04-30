const API_KEY = "b494f7af42794b4873c221c23d6b1326";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherContainer = document.getElementById("weather-container");
      const weatherEl = weatherContainer.querySelector("#weather");
      const cityEl = weatherContainer.querySelector("#city");

      weatherEl.innerText = `Weather : ${data.weather[0].main} / ${data.main.temp}`;
      cityEl.innerText = `City: ${data.name}`;
    })
  );
}

function onGeoError() {
  console.log("Can't find your Location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
