const apiKey = "b5d61e418d8c50413ab2ff6e9d5769fd";

function getWeather() {
  let city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data); 

      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = "City not found X";
        return;
      }

      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].main}</p>
      `;
    })
    .catch(error => {
      console.log(error);
      document.getElementById("weatherResult").innerHTML = "Error fetching data";
    });
}