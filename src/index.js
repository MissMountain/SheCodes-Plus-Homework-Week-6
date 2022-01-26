let weather = {
  paris: {
    temp: 4,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 16,
    humidity: 20
  },
  Berlin: {
    temp: -1,
    humidity: 40
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

function letcities() {
  let cities = prompt("Enter your city");
  if (weather[cities] !== undefined) {
    let temperature = weather[cities].temp;
    let humidity = weather[cities].humidity;
    let tempCelsius = Math.round(temperature);
    let tempFahrenheit = Math.round((temperature * 9) / 5 + 32);

    alert(
      `It is currently ${Math.round(temperature)}°C (${Math.round(
        (temperature * 9) / 5 + 32
      )}°F) in ${cities} with a humidity of ${humidity}%"`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cities} `
    );
  }
}
// It is suppose to change the date of the class "date" //
function getdate() {
  let now = new Date();
  let day = [
    "Monday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let days = day[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days} ${month} ${year}, ${hours}:${minutes}`;
}

let nowdate = document.querySelector("#this");
nowdate.innerHTML = getdate(new Date());

// EventListener
function signUp(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h2 = document.querySelector("#header-h2");
  h2.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", signUp);

// API-Integration
let apiKey = "a008a4c2930d0085e61eaaccd6166d8b";
let units = "metric";
let cityname = document.querySelector("#search-text-input").value;
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;
//https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=a008a4c2930d0085e61eaaccd6166d8b

axios.get(apiUrl).then(showTemperature);
console.log(apiUrl);
console.log(cityname);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("#header-h2");
  h1.innerHTML = message;
}
