const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');

searchButton.addEventListener('click', function() {
    const city = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cityName.textContent = data.name;
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            cityName.textContent = 'City not found';
            weatherIcon.innerHTML = '';
            temperature.textContent = '';
            weatherDescription.textContent = '';
        });
});
