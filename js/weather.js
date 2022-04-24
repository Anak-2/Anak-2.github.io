const API_KEY = "046aaf0e45538772d28cf986937c0647";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather");
      const name = data.name;
      const weather = data.weather[0].main;
      weatherContainer.innerText = `Today's weather in ${name} is ${weather}\n\n`;
    });
}

function onGeoError() {
  alert("Oops");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
