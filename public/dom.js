const inputBar = document.getElementById('input');
const searchButton = document.getElementById('btn');
const countryName = document.getElementById('country-name');
const temp = document.getElementById('temp');
const weatherStatus = document.getElementById('weather-status');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const badInput = document.getElementById('bad-input');
const fetchWeather = (weatherData) => {
  console.log(weatherData);
  countryName.innerText = (`Country Name: ${weatherData.name}`);
  temp.innerText = `Temperature ${weatherData.main.temp}C°`;
  weatherStatus.innerText = (`Weather Status: ${weatherData.weather[0].description}`);
  windSpeed.innerText = (`Wind Speed: ${weatherData.wind.speed}m/s`);
  humidity.innerText = (`Humidity: ${weatherData.main.humidity}%`);
};

const fetching = (country = 'palestine') => {
  fetch(`/search/${country}`)
    .then((res) => res.json())
    .then(fetchWeather)
    .catch(console.error);
};
fetching();

searchButton.addEventListener('click', () => {
  fetching(inputBar.value.trim());
});
